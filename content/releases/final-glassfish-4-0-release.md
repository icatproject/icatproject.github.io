---
title: Final Glassfish 4.0 Release
---

This is the final set of releases that have been tested and are known to
work on Glassfish 4.0. There is a similar page which describes those
[releases](/releases/current-release/) which have
been tested on Payara 41.

# Top page for each component

From the top page of each component go to the release you want --
normally the highest number as listed below.  You can find release
notes, installation instructions and the distribution in addition to
user and developer documentation.

- [authn.anon](https://repo.icatproject.org/site/authn/anon)  1.1.1
- [authn.db](https://repo.icatproject.org/site/authn/db)  1.2.1
- [authn.ldap](https://repo.icatproject.org/site/authn/ldap)  1.2.0
- [authn_shib2local](https://repo.icatproject.org/site/authn_shib2local) 
  1.1.0 (not compatible with icat.server 4.6.0 and later)
- [authn.simple](https://repo.icatproject.org/site/authn/simple) 
  1.1.0
- [icat.server](https://repo.icatproject.org/site/icat/server) 4.8.0
- [icat.client](https://repo.icatproject.org/site/icat/client) 4.8.0
- [ice](https://repo.icatproject.org/site/tools/ice)  1.0.0 _-- Will
  not be developed further. Please use the icat manager instead._
- [icat-setup](https://repo.icatproject.org/site/tools/icat-setup) 
  1.1.0 *-- Will not be developed further.  Please use the icat
  manager or the import offered by the ICAT restful interface
  instead.*
- [ids.server](https://repo.icatproject.org/site/ids/server) 1.8.0
- [ids.client](https://repo.icatproject.org/site/ids/client) 1.3.0
- [ids.plugin](https://repo.icatproject.org/site/ids/plugin) 1.3.1
- [ids.storage_file](https://repo.icatproject.org/site/ids/storage_file)
  1.4.0
- [ijp.demo](https://repo.icatproject.org/site/ijp/demo) 1.0.0
- [ijp.server](https://repo.icatproject.org/site/ijp/server) 2.0.1
- [ijp.unixbatch](https://repo.icatproject.org/site/ijp/unixbatch) 1.0.0
- [topcat](https://repo.icatproject.org/site/topcat/) 2.3.0

## Issues with the current releases

- IDS
  - If you choose to use the IDS client without maven you will need
    to locate three extra jars to add to your classpath. For
    convenience they are available below
    - [jackson-core-2.2.0.jar](/misc/jars/jackson-core-2.2.0.jar)
    - [jackson-annotations-2.2.0.jar](/misc/jars/jackson-annotations-2.2.0.jar)
    - [jackson-databind-2.2.0.jar](/misc/jars/jackson-databind-2.2.0.jar)
- authn.db
  - Please manually uninstall (asadmin undeploy ...) any previous
    versions before updating to 1.2.1
