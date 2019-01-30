---
title: Road Map – January 2014
---

# Road Map for the ICAT family

# _January 2014_

The purpose of this document is to indicate the planned ICAT family
developments. It tries to look one year ahead and will be updated
quarterly. For each component the order gives an impression of the
relative priority.

## ICAT Core

There are currently no plans to make any changes to the schema or API
nor to change or remove the speculative features. There are also no
planned changes to icat-setup. ICE (ICAT Editor) is being used currently
to prototype a GWT replacement -- if it looks suitable it may be kept to
provide a product with a more modern looking interface. A number of
areas, some of which may be dead ends, will be investigated including:

- clustered deployment (single lucene index etc.) to provide better
  performance and to allow a machine to be dedicated to ingestion
- improved API documentation -- in particular how to do queries and a
  fuller explanation of the authorization and how to write rules that
  are efficient.
- the provision of a JSON based RESTful web service -- this should be
  a rather easy add-on
- ability to migrate metadata/data between ICAT/IDS instances. This
  will allow a file to be prepared of data to be fed into ICAT.
  Functionality of the old XMLIngest will be included. The new
  mechanism will be more general as it will be able to deal with any
  ICAT data and not just a hierarchical projection of that data. It
  will also allow a new ICAT to be configured very rapidly.
- the use of a non-relational database to give better performance at
  large scale. Some kind of hybrid between relational and
  non-relational might be optimal.

##  TopCAT

- Provide data file upload facilities via the IDS
- Rationalize and simplify the code and reduce dependencies -- this
  will result in more maintainable software. If plugins are needed
  they should not be compiled into the distribution.
- It would be desirable to separate off code for doing the
  confederation, possibly into a small independent service.
- Add visualisation features (simple analysis of one and two
  dimensional data) by packaging such functionality already developed
  by the ICAT team at STFC for one of their facilities code
- Find a replacement for GWT which is now rather old and with a
  shrinking community and produce a more modern interface
- ICE might be included in TopCAT

## IDS

- The IDS computes checksums where data files are uploaded so can use
  this information to provide background checking that all data can be
  correctly read to provide the expected checksum
- Add the ability to work well when deployed on a shared file system
- Extend to provide FUSE file system authorized by ICAT

## IJP

This is the most immature member of the ICAT family -- but probably with
the most potential for further development. It allows submission of jobs
where data selection is based on ICAT information and the data are
handled by IDS.  Both batch and interactive jobs are supported.

- many small changes to meet evolving requirements
