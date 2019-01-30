---
title: Apache front end
---

An Apache web server can easily be configured to act as a front end to
one or more  Glassfish servers to expose the normal https port 443 There
are a number of ways of doing it, two of which use the ajp protocol,
which is a stripped down binary http equivalent to give better
performance, for connecting to Glassfish. The module mod_jk is no
longer widely distributed so it is probably better to use the standard
apache mod_proxy_ajp.

In any case you will want to install the apache ssl module so that https
is supported (for example

    yum install mod_ssl

on many systems that support rpm packages). The machines running the
Glassfish server or servers need to have port 8009 opened to the machine
run the Apache web server. As ajp traffic is not secured, port 8009
should only be opened to the web server.

On the Glassfish server enter:

    asadmin create-network-listener --protocol http-listener-1 --listenerport 8009 --jkenabled true jk-connector

and restart Glassfish to set up the ajp connector.

To configure apache (on linux) to forward everything to Glassfish,
create a file, proxy.conf inside the directory /etc/httpd/conf.d with
the line:

    ProxyPass / ajp:localhost:8009/

and restart httpd. If you have a group of machines configured to work
together (which has been possible since release 4.3.3 of ICAT) then the
entry should be:

    <Proxy balancer://satellites>

    BalancerMember ajp://m1.example.com:8009 retry=60 timeout=3600

    BalancerMember ajp://m2.example.com:8009 retry=60 timeout=3600

    </Proxy>

    ProxyPass / balancer://satellites/

where m1.example.com and m2.example.com are two machines running
Glassfish with an ajp connector on port 8009. Note the trailing "/" at
the end of the ProxyPass line.

The paramter retry=60 will give a 60 second pause before that server is
retried should it be found to be unavailable.

The timeout value defaults to 60 (seconds). If ICAT does not complete
the call by the timeout then Apache will throw an error. In the example
above the value 3600 allows an hour.

Clients connecting to the Apache web server on port 443 (the default
https port) must then trust Apache and not the individual Glassfishes.
When you install mod_ssl a certificate /etc/ssl/certs/localhost.crt is
generated for you as a self signed certificate. For testing purposes you
can add this to the truststore used by your client. For production use
you will normally install a real certificate for Apache to use.
