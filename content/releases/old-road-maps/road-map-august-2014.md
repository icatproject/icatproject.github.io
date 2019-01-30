---
title: Road Map – April 2014
---

# Road Map for the ICAT family

# _August 2014_

The purpose of this document is to indicate the planned ICAT family
developments. It tries to look one year ahead and will be updated three
times a year.

There are currently no plans to make any changes to the ICAT schema nor
API nor to change or remove the speculative features.

## ICAT Server

October 2014

- Provide a JSON based RESTful web service  to migrate metadata/data
  between ICAT/IDS instances. This will allow a file to be prepared of
  data to be fed into ICAT. Functionality of the old XMLIngest will be
  included. The new mechanism will be more general as it will be able
  to deal with any ICAT data and not just a hierarchical projection of
  that data. It will also allow a new ICAT to be configured very
  rapidly.
- Fix the "DISTINCT" bug which affects aggregate functions
- Allow authz rules to support projections
- Configurable limit on the total number of objects returned by a
  query -- exception if exceeded.
- Include the InvestigationGroup and explain how it should be used.

March 2015

- Complete RESTful interface to parallel the SOAP one
- Provide client object generation for Java and Python
- Support Wildfly

May 2015

- Investigate the use of a non-relational database to give better
  performance at large scale. Some kind of hybrid between relational
  and non-relational might be optimal.

## IDS

October 2014

- Provide FUSE file system authorized by ICAT

December 2014

- Support option for secondary level storage to be by datafile (as
  well as data set as at present).
- Ensure that multiple IDS deployments can share the same archive
  storage.

##  TopCAT

September 2014

- Include adding, updating and deleting dataset and datafile
  parameters

September 2014

- Agreement on new look.

Jan 2015

- Implementation of new look based on bootstrap and AngularJS and the
  elimination of GWT
- Simple multi-facility searching
- Tabbed facilities

## IJP

October 2014

- Refactor IJP to separate out the batch work which is very platform
  dependent.
- Provide an easy to deploy IJP with one batch system (basic Unix
  batch). The configuration will support simple jobs such
  as concatenating copying and deleting data files.

November 2014

- Provide more sensible routing of jobs when more than one batch
  system is configured
- Support IBM platform LSF
