---
title: Road Map – April 2014
---

# Road Map for the ICAT family

# _April 2014_

The purpose of this document is to indicate the planned ICAT family
developments. It tries to look one year ahead and will be updated
quarterly. For each component the order gives an impression of the
relative priority.

There are currently no plans to make any changes to the ICAT schema nor
API nor to change or remove the speculative features. There are also no
planned changes to icat-setup. ICE (ICAT Editor) is being used currently
to prototype a GWT replacement -- if it looks suitable it may be kept to
provide a product with a more modern looking interface.

## ICAT Server

September 2014

- the provision of a JSON based RESTful web service -- this should
  include the ability to migrate metadata/data between ICAT/IDS
  instances. This will allow a file to be prepared of data to be fed
  into ICAT. Functionality of the old XMLIngest will be included. The
  new mechanism will be more general as it will be able to deal with
  any ICAT data and not just a hierarchical projection of that data.
  It will also allow a new ICAT to be configured very rapidly.

January 2015

- the use of a non-relational database to give better performance at
  large scale. Some kind of hybrid between relational and
  non-relational might be optimal.

## IDS

May 2014

- Change the plugin interface to provide more information to the
  plugin (e.g. Dataset.location)
- Add an extra call which the plugin must implement to compute the
  full file name of a zip file entry.
  - Could provide the existing algorithm as a default
  - Facility may choose to base the zip file entry on its own
    storage structure to trivially guarantees unique names
- The IDS computes checksums where data files are uploaded so can use
  this information to provide background checking that all data can be
  correctly read to provide the expected checksum

August 2014

- Add the ability to work well when deployed on a shared file system
- Extend to provide FUSE file system authorized by ICAT

##  TopCAT

May 2014

- Datafile upload via the IDS

July 2014

- Include adding, updating and deleting dataset and datafile
  parameters

Oct 2014

- Enhanced support for multiple facilities
- Reduce code dependencies
- Avoid facility dependent code

Jan 2015

- Replace GWT
- Possibly include graphic displays

## IJP

June 2014

- To make IJP available to others  will provide a very simple demo
  configuration with jobs such as concatenating copying and deleting
  datafiles.

Sep 2014

- Currently only works on a single platform . Users want it to run on
  at least three very different platforms (different OS, different
  batch system etc.) -- but to present a single GUI. This requires (at
  least):
  - abstracting the batch system
  - providing a very simple "meta-scheduler"
