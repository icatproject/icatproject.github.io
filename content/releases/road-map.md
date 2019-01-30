---
title: Road Map
---

# Road Map for the ICAT family – October 2016

The purpose of this document is to indicate the planned ICAT family
developments. It tries to look one year ahead and will be updated as
necessary.

## General

#### Container Compatibility

_December 2016_

Ensure that all components work on Glassfish 4.1 and current Wildfly as
well as the old Glassfish 4.0 that we are currently using.\
If security updates were abandoned on Glassfish 4.0 we would currently
have a problem.

#### Plan migration to Angular 2

_December 2016_

Angular 1 will lose support at some point. We need a plan to migrate
components with some timescale.

#### Plan improvements to the icatproject.org website

_June 2017_

Depending upon the results from the reviewers the web site development
may be evolutionary or revolutionary.

## ICAT Server

_Dec 2016 (probably 4.9.0)_

- Support multiple load-balanced ICAT servers
- Provide SOAP interface to authenticator information

_June 2017 (probably 5.0.0)_

- Consider design of a new major version with schema changes to give:
  - a more file system like view of the data which should also
    address the problem that different tree structures are overlayed
    on the schema graph
  - better handling of data collections

## OAI-PMH Interface

_June 2017 (probably 1.0.0)_

- This will be a service which offers OAI-PMH metadata which it will
  get from an icat.server. _There is some code in contrib which might
  help._

## IDS

- Simplify the locking
- Implement option of late writing -- i.e. normal cache behaviour
- Think again about multiple IDS servers. The new locking mechanism
  might benefit this.

## Pollcat

- Formalise the release process.
- Provide an example plugin.
- Provide guidance on how and when to use.

## smartclient

- Beautify the GUI
- Consider moving a group of small files together. *Note that this
  does complicate the current very simple design so will only be done
  if there are real performance benefits.*

## idav

- Make idav more configurable so that it can be easily deployed by
  facilities with different ICAT hierarchies

## TopCAT

- Provide the ability to upload datafiles
- Fix bugs and provide enhancements as more people use it

## IJP plugin for TopCAT

- Improve batch system brokering
- Support job types with specific batch requirements (e.g. GPU
  support)
- Support versioning of datasets (as an application of custom search
  results filtering) *This is needed by Octopus but may be developed
  into something of more general applicability.*

## DOI plugin for TopCAT

_March 2017_

- This is currently too tailored to one facility. It will be
  refactored and probably a new service introduced so that other
  facilities can use the mechanism.

## Dashboard

- Improve reliability and testability with better error handling and
  by writing more unit tests.
- Improve compatibility with different hierarchies.
- Add more functionality that will be useful to the facilities by
  opening it up to the ICAT group for ideas.

## Python-icat

- Improve documentation.
- Keep compatibility with upcoming ICAT and IDS versions.

## ICATManager

- Fix existing bugs
- Improve look and feel
- Add ability to execute a JPQL query
