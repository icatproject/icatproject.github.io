---
title: Meeting 124 – 28th February 2019
date: 2019-02-28
---

## Attendees:

Alex de Maria (AM), Maxime, Brian Ritchie (BR), Stuart Pullinger (SP),
Rolf Krahl (RK), Chris Prosser (CP), Silvie Da Graca Ramos (SR), Louise
Davies (LD), George Christian (GC)

## **Component Updates**

### ICAT server (SP):

  - 4.9.3 released
  - Snapshot released for 4.10.0
  - Bug with JSONising Study to be fixed before final release
  - End date also to be added to study table

### Topcat (BR):

  - 2.4.3 snapshot released
  - Accounts for schema changes in ICAT server 4.10
  - Made study accessible through topcat.json
  - Fixed bug with metatabs display

### ICAT project website (LD):

  - Migration of WordPress site to Github Pages
  - Website being rewritten in the same style using GatsbyJS
  - Allows pages to be written in Markdown
  - Github workflow allows easier modification
  - (RK) Would like to see the inclusion of structured text. ACTION:
    (LD) to look into feasibility.

### IDS (RK):

  - Snapshots for IDS plugin 1.10 coming in March
  - Users will need to recompile plugins for next IDS release

### Python-ICAT (RK):

  - 15 being released adding support for ICAT server 4.10.0
  - Next release will drop support for Python 2.6 and ICAT server 4.2

## **Site Updates**

### ISIS (GC):

  - Continuing to add support for study DOIs
  - Working on a Topcat plugin that can set permissions on investigation
    data for use by data analysis systems.

### DLS (CP) (SR):

  - Globus increasingly being used
  - Working on making data ingestion more reliable
  - Feedback from Globus workshop: More universities establishing
    endpoints that are properly configured for best performance.

### ESRF

  - ICAT+ ready to be pushed to a GitHub repository on icat-contrib
  - Looking into combining ElasticSearch with ICAT. Principal issue is
    transferring permissions from ICAT rules to ElasticSearch.

### HZB (RK):

  - Student working on an OAI-PMH plugin for ICAT server

## **Discussion**

### Schema structure (AM)(Maxime):

  - Study is inadequate because it can only have a single user.
  - Can’t associate samples with a study
  - Can’t associate parameters with a study

### Addition of data volume column to investigation and dataset:

  - (AM) ESRF currently using investigation parameters for this purpose
  - (GC) Raised issue \#211 on icat.server mentioning this
  - (SR) DLS thinking of running a batch SQL query to update volumes

Next meeting: Thursday 28th March 2019
