---
title: Installation
---

ICAT makes use of authentication plugins. These have their own version
numbers and are maintained separately from the main ICAT. This document
exists to tie them together and to provide useful pointers inside the
generated documentation. Four authentication plugins are provided:
authn_ldap which makes use of an LDAP server, authn_db which uses a
database table holding (username, password) pairs, authn_simple which
holds password information in a properties file and authn_anon to
provide anonymous access. You may also write your own plugin. You will
need at least one authentication plugin.

[Current release](releases/current-release/ "Current release")
lists the most recent set of artefacts. You are, however, recommended to
read the individual component installation instructions first, each of
which contains links to its own set of artefacts. Installation for all
components follows the same model as explained at
[Installation of an ICAT Component](/installation/component/ "ICAT component").

After installing the authenticators of your choice and ICAT itself
please also install icat-setup to set up the authorization information
and ice to start populating ICAT.

There are four components for the IDS (ICAT Data Service)  The
ids.client has a Java and Python client for talking to the ids.server.
To deploy an ids.server you will either need the ids.storage_file or
you can build your own implementing the ids.plugin.

Finally consider adding TopCAT.

- [Choice of Database and considerations for ICAT use](/installation/database/ "Database")
- [How to install and configure Glassfish](/installation/glassfish "Glassfish")
- [Installation of an ICAT component](/installation/component/ "Installation of a new ICAT component")
- [Apache front end for Glassfish](/installation/apache-front-end/ "Apache front end")
- [Quick Start Installation](/installation/quick-start-installation/ "Quick Start Installation")
