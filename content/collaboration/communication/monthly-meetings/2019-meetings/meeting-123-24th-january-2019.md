---
title: Meeting 123 – 24th January 2019
date: 2019-01-24
---

## Attendees:

Alex de Maria (AM), Maxime, Brian Ritchie (BR), Stuart Pullinger (SP),
Rolf Krahl (RK), Chris Prosser (CP), Silvie Da Graca Ramos (SR), Louise
Davies (LD), George Christian (GC)

## Apologies:

Andy Gotz

## ICAT Components:

### ICAT Server (SP):

  - 4.9.2 released allowing entities to be excluded from Lucene search
    for the purpose of limiting index size. Resolves a Diamond issue
    where the maximum index size was reached.
  - 4.9.3 snapshot release: bugfix for Diamond
  - 4.10 release in progress to provide schema changes: DOI for study,
    fields for given name, surname and a few other additive changes.

Rolf – Add uniqueness constraints to parameters to be included in future
release.

Rolf – Question around status of Travis build for icat.server. SP:
Travis builds are a work in progress. LD still working on making them
reliable.

### Topcat (BR)

  - Version 2.4.2 snapshot release available.
  - Bugfix for 2.4.0 -\> change in API had resulted in internal tools
    breaking.
  - Diamond bugfix where adding too many entities to cart caused
    download failure.
  - Bugfix for investigation size cache -\> new API call that clears
    individual cache entries -\> Time limit on cache -\> Option to not
    cache zero sizes.
  - Browser console cache monitoring
  - Update of Topcat web framework from AngularJS to Angular being
    considered. Substantial rewrite of the Topcat code required.

Since then, some small changes that will become part of 2.4.2:

  - improve DOI redirection failure message (issue \#388)
  - mail configuration properties can be removed if not required (issue
    \#389)

but these are not show-stoppers so no urgency to release them yet.

### IDS(RK)

  - 1.9.1 released
  - New ids.plugin snapshot release – 1.5.0
  - New ids.server snapshot release – 1.9.2
  - IDS plugin API slightly changed so that developers must recompile to
    retain compatibility. Exceptions added to MainStorageInterface.put()
    and MainStorageInterface.exists().

## Site Updates

### **ISIS – George**

  - Adding DOIs to the study table so that a single DOI can cover an
    entire experiment.
  - Taking measures to resolve Topcat cache inconsistencies.

### **ESRF – Alex and Maxime**

  - Would like a way to signal to the user that a dataset is empty and
    therefore not available to download. Particular issue with the
    download button being available next to an empty dataset.

**Decision taken to postpone further discussion due to poor network
connection at
RAL.**

# Meeting 123: continued – 31st January 2019

### ICAT Roadmap Update (SP)

[Slides](https://icatproject.org/wp-content/uploads/2019/02/ICAT-Roadmap-Update.pptx)
(copied below)

#### Outline of the Roadmap

  - Securing Longevity
      - address long-term and near-term technical ideas to ensure ICAT
        has longevity
  - Supporting Open Science
      - adopt standards and interfaces to support open science
  - Sustaining the ICAT Project
      - improve development processes and documentation
      - accept input and effort from more people
  - Extending ICAT functionality

#### Securing longevity

  - Review of user requirements
      - Ongoing work looking at requirements for DLS
      - Will start reviewing user interface needs with STFC facilities
        soon
  - Investigation of technologies: see below
  - Topcat/eCat/ICAT Manager rewrite
      - More activity recently
      - Hope to be able to report progress next month
  - REST API
      - Louise has/will be looking at this (including ICAT+ and SciCat)
  - GraphQL
      - Louise looking at this: GatsbyJS for the website?

#### Supporting Open Science

  - Data publication/DOIs
      - Expecting schema changes for icat.server 4.10.0
  - Interoperability
      - Expecting to follow lead from PANOSC (ESRF)
      - We have a small amount of effort in EXPANDS too (if it is
        funded)
  - DAAS
      - Very active though no activity planned through this project
  - Provenance tracking
      - Expecting schema changes for icat.server 4.10.0

#### Sustaining the ICAT Project

  - Formalisation of development process
      - Some additions to the developer instructions
      - Louise has created automated build and test configurations for
        Travis CI
  - Improved documentation/manual
      - Was not able to secure extra effort for this last year
      - Louise and Stuart need to make a plan for this
  - New Website
      - Louise looking at options including GatsbyJS – as a way to also
        learn React and assess GraphQL.

#### Extending ICAT Functionality

  - Tickets
      - Ongoing
  - Schema review
      - After these slides\!
      - Will return to monthly meetings after 4.10.0 is released.
  - Richer metadata
      - Stuart to look into this. No recent progress to report.

### Schema Discussion (AM)

(Based on Alex’s questions to the list)

#### Development of a common metadata catalogues API

  - **** Related to WP3 in the PANOSC proposal.
  - Work on WP3 has not started yet but will start soon.
  - ICAT is probably one if not the most widespread metadata catalogue
    in Europe for large facilities
  - It might be worth to discuss internally in the ICAT’s collaboration
    and **agree** **what we might expect of a common API for metadata
    catalogues** .
  - I imagine that it is also directly connected to EXPANDS (btw any new
    about the funding?)

###### PANOSC work package description

“Define an API to be used in the Photon and Neutron community that will
allow for FAIR exposure of the data at the individual institutions
through a catalogue service. The API will allow federation, and exposure
of metadata relevant for the area, in a way that will enable search and
facilitate access of researchers across scientific disciplines. Existing
APIs (e.g OAI-PMH) and communities (e.g.
[openarchives.org](http://openarchives.org/) , Dublin Core Metadata
Initiative (DCMI), OpenAIRE) will be taken into account. The API will
enable domain specific search extensions aware of the metadata
definitions and usage at photon and neutron facilities. In order to test
any implementation at facilities for compliance, a set of API tests will
be developed. The test harness will be executable against a given site
catalogue service and result in a report stating the status towards
compliance”

SP: definitely interested in pursuing this and being involved. Suggested
ICAT-Plus and SciCat APIs as a starting point. Concerned that
developments in PANOSC may not be ready in time to influence the new
ICAT Rest API.

**ACTION** : SP to send a link to the SciCat schema to the list.

RK: Need more information from PANOSC on what is the scope and
technology in use.

### Schema Discussion

  - **Status for the modification of the schema to** **include the
    equivalent to visit so there is (1 investigation -\> N visits ) or
    (1 proposal -\> N investigations).**
  - I don’t remember well the status of this or even if this agreed or
    done.

ESRF: Investigation entity does not fit their data model. Would like to
have a separate set of users at the proposal level so a DOI can be
minted with those users in the metadata.

SP: Covered in Steve’s [slide
(no. 5)](https://icatproject.org/wp-content/uploads/2017/12/ICAT_F2F_2017_Ideas_Future_Direction.pdf#5)
from the Face to face – but not yet implemented

George: Study entity in the current schema is mostly interchangable with
proposed concept of proposal.

Rolf: HZB only mints DOIs for publications, not data itself. Believes
that it is not possible to properly attribute credit for a dataset.
Associates a PID with the data rather than a DOI, no metadata needs to
be provided.

**ACTION** : AM to investigate whether Study Entity (with, or without
additional properties) is sufficient to model the relationship he needs.

**Discussion ended as we ran out of time.**

**Next meeting: Thursday 28th February 3pm (UTC)**
