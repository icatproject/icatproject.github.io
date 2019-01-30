---
title: Glassfish
---

# JDK

Get the latest stable jdk for your architecture as part of the OS
distribution or from from the Oracle web site (where it is known as Java
SE and you want the JDK download).

**You must use at least JDK 1.8.**

You need to ensure that it is in the PATH of the person running glassfish.
You should ensure that java, javac, jps, keytool etc are all available.

# Glassfish

Designate an account for running glassfish. This is called here "the
glassfish account" though the user name does not have to be glassfish.
It is recommended to obtain the platform independent zip file (without
jdk) and unpack it into the home directory of the glassfish account.
Avoid using installers. After unpacking add the bin directory to the
PATH of the user as indicated in the table below. Glassfish 4.0 is
currently recommended.

| Tested distribution | PATH component   |
| ------------------- | ---------------- |
| glassfish-4.0.zip   | ~/glassfish4/bin |

Ensure that `hostname -f` returns a sensible result.

## Scripted setup

Then run [setup-glassfish.py](/misc/scripts/setup-glassfish.py)
which takes as arguments the name of the domain you wish to create, the amount
of memory to allow for the Java heap in glassfish and optionally a
password. If you don't specify a password you will be prompted for it
once without echoing. To use 75% of the available memory specify 75% as
the second parameter otherwise write 2048m or, equivalently 2g. For the
script to work properly the glassfish default ports should all be
available.

Note that there was an error in this script which prevented Glassfish
4.1.1 being used. So make sure you use an up to date copy.

If you wish, go to [http://localhost:4848](http://localhost:4848/) you
will be redirected to https and will be able to login as admin to see
from the GUI how the server is configured.

## Manual setup

As an alternative to running the script you can issue the commands
within that script manually.  When you create the domain you will be
asked to specify the admin username and password. Do not use the default
empty password.

## Deployment Order

Since glassfish 4 it is has been possible to specify a deployment order
for applications deployed within glassfish. This can ensure that, for
example, authenticators are deployed before ICAT. The default sequence
number is 100 and components with a lower deployment order will be
started before those with a higher value. New releases of ICAT
components will deploy authenticators, icat, ids and ijp as 80, 100, 120
and 140 respectively. There is also a script: [fix-deployment-order.py](/misc/scripts/fix-deployment-order.py)
which may be used on existing deployments of glassfish 4.

## Firewalls

Depending upon your installation it is possible that the ports normally
used by glassfish (4848 and 8181) are blocked. If this is the case allow
the ports to be used. How you do this is platform dependent.

## Proxies

To allow  Glassfish to make use of a web proxy when making outgoing
calls use asadmin to identify the host and port to be used. For example:

    asadmin create-jvm-options -Dhttp.proxyHost=wwwcache.rl.ac.uk



    asadmin create-jvm-options -Dhttp.proxyPort=8080

## Certificates

If you have a "genuine" SSL certificate from a trusted provider to
install, follow the instructions
at: [certificate](http://icatproject.org/installation/glassfish/certificate/ "Certificate").

If you don't have a trusted certificate then any java application
seeking to use the glassfish will need to be told to trust it. Go to the
config directory for your domain and:

    keytool -export -keystore keystore.jks -file cert.der -storepass changeit -alias s1as

will extract the certificate to a file called cert.der. The keystore
password is by default "changeit". Then go to the jre/lib/security
directory for the jdk you will use and if jssecacerts does not exist:

    cp cacerts jssecacerts

which leaves the original cacerts unchanged. However jssecacerts will be
used in preference to cacerts. Then:

    keytool -import -keystore jssecacerts -file <cert.der> -storepass changeit -alias <full host name> -noprompt

where `<cert.der>` identifies the exported certificate and the
recommended alias is the fully qualified name of the machine you are
trusting.

You may also choose to convert the certificate to pem format for use
with a Python client:

    openssl x509 -in cert.der -inform der -out cert.pem

## Expired certificates

Expired cacerts appear to do not harm except for cluttering the
server.log. To get rid of them go to the config directory for your
domain and:

    keytool -delete -keystore cacerts.jks -alias gtecybertrustglobalca -storepass changeit



    keytool -delete -keystore cacerts.jks -alias gtecybertrust5ca -storepass changeit

for each offending certificate. The keystore password is by default
_changeit_.

## Database connectors

Your chosen database jars must be installed in the lib/ext directory of
your domain. These files will have names such as:
_mysql-connector-java-5.1.21-bin.jar_ (for MySQL) and _ojdbc6.jar_ (for
Oracle). After installing these jars glassfish must be restarted. It is
recommended to use asadmin stop-domain followed by asadmin start-domain
to achieve this.

## Problems starting glassfish

In some circumstances glassfish may refuse to start. A series of dots
will appear on the screen and after about four rows will time out. This
is less likely to occur with Glassfish 4 provided that deployment orders
are sensible. To get round this problem:

- determine which is the bad component by looking at the end of the
  server.log to see what it is was trying to load
- edit domain.xml in the config directory -- find the line in the
  section

<!-- -->

      <servers>



        <server>

starting with \<application-ref ref="... for the troublesome component
and disable it it by inserting "enabled="false" so that the line now
starts: _\<application-ref "enabled="false" ref="..._

- start the domain with `asadmin start-domain ...`
- enable the component with `asadmin enable ...`

To avoid the problem if you need to stop and start the domain, disable
the troublesome component before stopping it and enable it after
starting the domain.
