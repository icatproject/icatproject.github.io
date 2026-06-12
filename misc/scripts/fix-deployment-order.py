#!/usr/bin/env python
import threading
import platform
import shlex
import subprocess
import StringIO

def execute(cmd):
        
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

def setOrder(app, order):
    out, err, rc = execute ("asadmin -t set applications.application." + app + ".deployment-order=" + str(order))
    if rc:
        abort(err)

    print out

out, err, rc = execute ("asadmin -t list-applications")
if rc:
    abort(err)

for line in out.splitlines():
    app = line.split()[0]
    if app.startswith("authn"):
        setOrder(app,80)
    elif app.startswith("icat."):
        setOrder(app, 100) 
    elif app.startswith("ids."):
        setOrder(app, 120)   
    elif app.startswith("ijp."):
        setOrder(app, 140) 
