---
title: Current release
---

## Top page for each component

These components have all been tested with Payara 41

From the top page of each component go to the release you want --
normally the highest number as listed below.  You can find release
notes, installation instructions and the distribution in addition to
user and developer documentation.

- [authn.anon](https://repo.icatproject.org/site/authn/anon)  2.0.0
- [authn.db](https://repo.icatproject.org/site/authn/db)  2.0.0
- [authn.ldap](https://repo.icatproject.org/site/authn/ldap)  2.0.0
- [authn.simple](https://repo.icatproject.org/site/authn/simple) 
  2.0.0
- [icat.server](https://repo.icatproject.org/site/icat/server) 4.9.1
- [icat.client](https://repo.icatproject.org/site/icat/client) 4.9.0
- [icat.lucene](https://repo.icatproject.org/site/icat/lucene) 1.1.0
- [ids.server](https://repo.icatproject.org/site/ids/server) -- 1.9.1
- [ids.client](https://repo.icatproject.org/site/ids/client) -- 1.3.0
- [ids.plugin](https://repo.icatproject.org/site/ids/plugin) -- 1.4.0
- [ids.storage_file](https://repo.icatproject.org/site/ids/storage_file) --
  1.4.1
- [ijp.demo](https://repo.icatproject.org/site/ijp/demo) -- Coming
  soon
- [ijp.server](https://repo.icatproject.org/site/ijp/server) -- Coming
  soon
- [ijp.unixbatch](https://repo.icatproject.org/site/ijp/unixbatch) --
  Coming soon
- [topcat](https://repo.icatproject.org/site/topcat/) -- 2.4.1

## Issues with the current releases

- IDS
  - If you choose to use the IDS client without maven you will need
    to locate three extra jars to add to your classpath. For
    convenience they are available below
    - [jackson-core-2.2.0.jar](/misc/jars/jackson-core-2.2.0.jar)
    - [jackson-annotations-2.2.0.jar](/misc/jars/jackson-annotations-2.2.0.jar)
    - [jackson-databind-2.2.0.jar](/misc/jars/jackson-databind-2.2.0.jar)
