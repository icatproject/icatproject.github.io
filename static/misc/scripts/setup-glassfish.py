#!/usr/bin/env python
import threading
import platform
import shlex
import subprocess
import StringIO
import getpass
import sys
import os
import tempfile

def execute(cmd):
        
    print cmd
    if platform.system() == "Windows": 
        cmd = cmd.split()
        proc = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    else:
        cmd = shlex.split(cmd)
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stringOut = StringIO.StringIO()

    mstdout = Tee(proc.stdout, stringOut)
    mstdout.start()
    stringErr = StringIO.StringIO()
    mstderr = Tee(proc.stderr, stringErr)
    mstderr.start()
    rc = proc.wait()

    mstdout.join()
    mstderr.join()

    out = stringOut.getvalue().strip()
    stringOut.close()

    err = stringErr.getvalue().strip()
    stringErr.close()

    return out, err, rc

class Tee(threading.Thread):
    
    def __init__(self, inst, *out):
        threading.Thread.__init__(self)
        self.inst = inst
        self.out = out
        
    def run(self):
        while 1:
            line = self.inst.readline()
            if not line: break
            for out in self.out:
                out.write(line)

def abort(msg):
    """Print to stderr and stop with exit 1"""
    print >> sys.stderr, msg, "\n"
    sys.exit(1)

def executeGood(cmd):
    out, err, rc = execute(cmd)
    if rc:
        abort(err)
    return out

args = sys.argv[1:]
if len(args) < 2: abort ("Must have at least two arguments - the domain name and the memory for the Java heap. The memory can either be a number with a % on the end to give a percentage of available memory or end with an m or g to express it in mega- or giga-bytes")
domain = args[0]

rest = args[1][:-1]
type = args[1][-1]
if type not in "%mg": abort("Memory must be specified as %, m or g")

try:
    fac = float(rest)
except ValueError:
    abort("Memory must be a number followed by %, m or g ")

if len(args) == 3:
    password = args[2]
else:
    password = getpass.getpass("Desired admin password: ")
dummy, tfile = tempfile.mkstemp()
a = open(tfile,"w")
a.write("AS_ADMIN_PASSWORD=" + password)
a.close()

out = executeGood("asadmin list-domains")
exists = False
for line in out.splitlines():
    if line.split()[0] == domain:
        running = line.split()[1].startswith("running")
        exists = True

if exists:
    if running:
        executeGood("asadmin stop-domain --kill " + domain)
    executeGood("asadmin delete-domain " + domain)

executeGood("asadmin -W " + tfile + " --user admin create-domain --savelogin " + domain)
executeGood("asadmin start-domain " + domain)
executeGood("asadmin enable-secure-admin")

if type == "%":
    if platform.system() == "Windows":
        abort("% memory calculation for Java heap size is not yet supported on windows")
    else:
        mem = str(int(os.sysconf('SC_PAGE_SIZE') * os.sysconf('SC_PHYS_PAGES') / 1024.**2 * float(fac)/100.))+"m"
else:
    mem = str(int(fac)) + type
for line in executeGood("asadmin list-jvm-options").splitlines():
    if (line.startswith("-Xmx")):
        executeGood("asadmin delete-jvm-options " + line.strip())
executeGood("asadmin create-jvm-options -Xmx" + mem)

if platform.system() == "Windows": 
    cmd = "taskkill /F /PID %p"
else:
    cmd = "kill -9 %p"

dq = '\\"'
executeGood("asadmin create-jvm-options '-XX\:OnOutOfMemoryError=" + dq + cmd + dq +"'")
executeGood("asadmin stop-domain --kill " + domain)
executeGood("asadmin start-domain " + domain)
executeGood('asadmin set server.http-service.access-log.format="common"')
executeGood('asadmin set server.http-service.access-logging-enabled=true')
executeGood('asadmin set server.thread-pools.thread-pool.http-thread-pool.max-thread-pool-size=128')
executeGood('asadmin set server.ejb-container.property.disable-nonportable-jndi-names="true"')
executeGood('asadmin set configs.config.server-config.network-config.protocols.protocol.http-listener-2.http.request-timeout-seconds=-1')
