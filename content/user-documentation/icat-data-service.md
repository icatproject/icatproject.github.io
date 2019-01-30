---
title: ICAT Data Service
---

# Introduction to the IDS

This component provides an "ICAT friendly" interface to data storage.
The IDS stores the data file itself and catalogues it as a Datafile
object in ICAT. Calls are provided to store an individual data file and
calls to get, query the status of, and delete groups of data files as
specified by the IDs of Investigations, Datasets and Datafiles. TopCAT
makes use of the IDS to download data.

It is also possible to configure the IDS to be used in "Read Only" mode
where data files are stored by some preexisting facility mechanism and
the Datafile objects must then created in ICAT to reference these files.
This does make the IDS less convenient for storage of derived data but
may be a good way to get started with the IDS.

# Two Level Storage

The IDS can be configured to use a single level of storage where data
are all available with very low latency (e.g. disk) or it may be
configured to use two levels of storage known as main and archive. The
main storage should have low latency and the archive storage will have
higher latency (e.g. tape). If the volume of data makes it not practical
to hold all data on low latency storage then two level storage must be
used. All of the calls to the IDS may be used irrespective of whether
single or two level storage is used however the archive and restore
calls are ignored for single level storage and the prepareData call
(which ensures that data is brought back from archive to main storage)
has no value.

The archive data may be stored in units corresponding to the ICAT
Datafile or multiple files may be stored together as a zip file
corresponding to an ICAT Dataset. This is a configuration option. If the
archive storage has its own aggregator to merge small files then you may
choose to store by Datafile but otherwise storing by Dataset is
recommended.

When a file is written to the IDS it is first stored on main storage.
Later it may be copied to archive storage if a two level storage model
has been adopted.

The server provides explicit archive and restore calls however normally
the movement of data between main and archive storage is handled
automatically. The server configuration includes high and low watermark
levels for the size of main storage. A background process notices if the
high watermark is exceeded and requests the archiving of sufficient
files to bring the main data storage size down to the low water mark. A
restore operation will be queued if an attempt is made to access data
that is not in main storage.  Restoration, which runs in the background,
may fail. If it does then flags are set so that an error will be
generated if any calls attempt to access that data. There is a "reset"
call to clear these flags.

# Plugin architecture

Different facilities have different needs for external file structures.
To cope with this interfaces have been defined which must be implemented
by a plugin written for your facility. Follow the link from
[https://repo.icatproject.org/site/ids/plugin](https://repo.icatproject.org/site/ids/plugin)
to the specific ids.plugin version you are using and follow the link
"Writing an IDS plugin" which in turn has a link to the Javadoc.
There are interfaces for:

- MainStorageInterface
- ArchiveStorageInterface
- ZipMapperInterface which define the entry names in a zip file when a
  group of files are downloaded in one call to the IDS.

Included with the interface are some partial implementations such
as MainStorageReadOnly which is a partial implementation of a
MainStorageInterface providing dummy implementations of those operations
not needed when the readOnly flag has been set in the server
configuration.

An example plugin is provided to support two level storage. The example
uses a simple file system for archive storage which is not going to be
useful to most people -- but is easy to get started with.

# ICAT Coupling

ICAT session ids are passed as an argument to most calls. The
server checks for READ access to the referenced data by a suitable call
to ICAT. For put and delete operations the server checks for CREATE and
DELETE access to the referenced data and makes the corresponding changes
to ICAT to catalogue (create a Datafile entry in ICAT) or uncatalogue
the file. The server is  coded to maintain consistency with ICAT. In the
case of a failure of software or hardware  an orphan file may exist but
there should never be an entry in ICAT for which no file exists.

# Accessing the service

The server exposes a REST interface using the HTTP(S) methods PUT,
DELETE, POST and GET as appropriate. Detailed documentation for each
call is generated from the server code and comments in that code and can
be seen by following the link from
[https://repo.icatproject.org/site/ids/server/](https://repo.icatproject.org/site/ids/server/)
to the specific IDS
version your are using and then click on "RESTful interface". It should
be noted that the IDS does not follow pure REST principles with PUT,
GET, POST etc calls to a resource as it did not prove practical to
identify suitable resources. Rather, in place of the name of a resource
the name of the call is used and consequently only one HTTP method is
generally applicable.

IDS clients are provided in Java and Python (follow link
from [https://repo.icatproject.org/site/ids/client/](https://repo.icatproject.org/site/ids/client/) to the specific
client version you are using and see the "IDS Client User Manual" which
has pointers to the language specific documentation; the javadoc for the
Java API and "pydoc ids" for the Python. In addition the 
[Python ICAT](https://icatproject.org/user-documentation/python-icat/) client
supports the IDS.

# Calls

This is not a complete list of calls but just an overview to get
started. The exact name depends on whether you are invoking the REST
calls directly of are using one of the client APIs. The names listed
here are the names of the resource in the REST call. Many calls accept
lists of IDs of investigation, datasets and datafiles.

## put -- store a file

This operation needs an existing Dataset in ICAT to link it to. From a
server perspective the data is streamed in the body of the message. Only
one file may be stored with one call. After the call the data stream
will have been stored as a file and will be catalogued as a Datafile.

## get -- get a file or files

This operation requires either lists of IDs of investigations, datasets
and datafiles or a preparedId (from a prepareData call) which identifies
lists of IDs of investigation, datasets and datafiles. If multiple files
may be returned a zip file will be used to wrap the files. As soon as
the server has checked that the data are all available streaming the
result will start.

## prepareData

This operation requires lists of IDs of investigations, datasets and
datafiles and returns a preparedId. It may be used with one level
storage though, as there is no preparatory work to be done, the only
benefit is that the preparedId may be shared with other people to permit
a "get" call to be made without having to login to ICAT and thereby make
data available to those who would not normally have permission to read
it.

## getLink

This is a call to provide efficient access to a data file. It is only of
use if the file system hosting main storage is accessible to the user.
 It returns an absolute path which is hard link to the file which has a
server defined lifetime. It is expected to be used from a program which
calls getLink and then immediately opens the file. Even if the hard link
is deleted by the server the file remains accessible because of the open
file handle.  ACLs are set on the link to only allow read access to the
 user specified in the getLink call. In the case of the Java API this is
obtained by  looking up the system property "user.name" and the Python
uses getuser() from the getpass package.
