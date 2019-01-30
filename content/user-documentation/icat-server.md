---
title: ICAT Server
---

# Introduction to the ICAT Server

The ICAT server is a metadata catalogue to support  Large Facility
experimental data, linking all aspects of the research chain from
proposal through to publication.  It provides  SOAP and RESTful web
service interfaces to an underlying database via easy to use APIs. It
has powerful search features, a rule based authorization mechanism and
it uses plugins for authentication. The service runs in a J2EE container
such as Glassfish.

# Database and Schema

The primary database is relational. ICAT should in principle work on any
relational database  provided that there is a JDBC driver available
though best understood are MariaDB/MySQL and Oracle. Some of the
information held in the relational database is also indexed in Apache
Lucene which is a fast text search engine.

This gives the benefit of the relational model for keeping the data
organised and at the same time allows users to find things when they
have no idea where to look.

The [schema](/user-documentation/icat-schema/) is
designed to be as regular as possible.  All relationships are one to
many and are cascaded in the one to many direction.  This means for
example that if you delete a Dataset then all its Datafiles are deleted
too. Entities are identified by an object in the many to one direction
and one or more naming fields. For example a Datafile is identified by
its Dataset and a name. This also means that a Datafile cannot exist
without a Dataset and that it can only be "part of" one Dataset.

# Authentication Plugins

An authenticator must implement a small interface. This interface allows
ICAT to authenticate and to find out information about the
authenticator. Each plugin is deployed as a separate application in the
J2EE container and is accessed by ICAT as remote calls which behind the
scenes uses Corba. Each authenticator accepts a map of key names to key
values where typical key names would be "username" and "password".

# Accessing the service

The server exposes both SOAP and REST interfaces. Originally ICAT only
exposed a SOAP interface but now REST interfaces are more common than
SOAP. The intention is not to develop the SOAP interface further.

For the SOAP web service each table in the database is mapped onto a
data structure exposed by the web service. When the web
service interface definition (WSDL) is processed by a client then it
has sufficient information to allow an object to be built on the
client side matching rows of each table in the database. The convenience
of using the SOAP interface depends critically upon the level of
support provided by the libraries available. In Java support is good and
tools such as wsimport can be used to generate client stubs to make it
very easy to use and to provide type safety. Java client libraries have
been generated -- see
[icat.client](https://repo.icatproject.org/site/icat/client/). In the
case of Python, Suds (or preferably the jurko fork of suds) can be used.
 In addition there is the
[python-icat](/user-documentation/python-icat/)
library which s a Python package that provides a collection of modules
for writing programs that access an ICAT service using the SOAP
interface. It is based on Suds and extends it with ICAT specific
features and also provides a level of protection from server version
dependency. The SOAP interface is easy to use but somewhat restricted
and there is a tendency to bring back to the client side information
which is not needed because it brings back whole rows from the database.

The RESTful interface uses the HTTP(S) methods PUT, DELETE, POST and GET
as appropriate. Detailed documentation for each call is generated from
the server code and can be seen by following the link
from [https://repo.icatproject.org/site/icat/server/](https://repo.icatproject.org/site/icat/server/) to
the specific ICAT version your are using and then click on "RESTful
interface". ICAT clients are provided in Java and Python. These client
libraries are very small and mainly look after error handling. The
[client documentation](https://repo.icatproject.org/site/icat/client/) include the
javadoc for the Java API and "pydoc" for the Python.  The Python API is
the more convenient to use because instead of dealing with Json strings
you pass nested Python dicts and arrays.

# Authorization

Authorization is entirely Rule based. Rules can be related to individual
entries in the database however this is not the way they are normally
expected to be used. The intention is that rules can be defined for
example to say that if you are related to an Investigation then you can
see all the data related to that Investigation. You could also define a
rule to say that all Datafiles older than some time are public. The
authorization system is such that if _any_ rule allows the user to
perform the action then it will be allowed. There are no rules
forbidding things. The system is efficient because the rules are used in
a way that allows the database to do most of the work.

# Calls

There are very few calls and none of them are schema dependent. The API
is providing a generic approach to accessing a relational database which
follows a schema with a few special constraints as described earlier.
Some tables stored in the database are however special and can affect
subsequent operations. In particular the Rules table which controls
authorization is populated and queried like any other table but controls
access to all ICAT operations.

RESTful calls support import/export of the contents of the ICAT
database. These operations like all the others are subject to the
authorization rules.

The Lucene indexing is accessible through the RESTful interface.
Currently three calls are provided to return Investigation, Dataset and
Datafile Id values. These have been designed to match the needs of
TopCAT but are not generic as each one only returns Id values for one
specific table type.
