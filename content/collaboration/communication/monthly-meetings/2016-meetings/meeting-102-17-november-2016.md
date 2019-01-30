---
title: Meeting 102 – 17 November 2016
date: 2016-11-17
---

# Agenda

  - Actions from meeting 101 (Steve)
  - Copenhagen meeting – what did we do wrong and what did we get right
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - PollCat (Frazer)
          - SmartClient (Steve)
          - WebDAV (Tom Gowland)
      - TopCAT (Jody)
      - IJP (Brian R and Thomas)
      - ICAT Dashboard (Tom Gowland)
      - Multi-container support (Steve)
      - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Gordon Brown, Frazer, Kevin, Sylvie, Brian R.,  Shelley,
Milan, Peter, Rolf

Apologies: Cathy. Tom Gowland. Jody, Alex. Jianguo Rao.

Action 98.1: Kevin has  publish state for STFC production deployments
via the google group.

  - Copenhagen meeting – what did we do wrong and what did we get
    right: Rolf and Milan said it was very nice. half a dozen new
    people.  Maybe too fast and too much information for
    newcomers?  Steve didn’t feel he got much feedback,  
    except for the person from ELI/ALPS. Not checked with Brian M. to
    see if any followup with the people he was looking after.
  - ICAT development – Steve has added SOAP call to find out about
    authenticators. Developed a REST authenticator; easy to add more.
    REST mechanism works side by side with old mechanism.  
    It also allows failover – try successive auth servers. Working
    on making lucene access as separate RESTful component,  
    which can then be shared by multiple ICATs. There will be a  
    lightweight security mechanism using known ip addresses.
  - IDS – Locking work by Rolf is waiting for comments from Steve.
  - IJP – Brian reported that Tom Attwood, an ISIS graduate, is on loan
    to us for two months and is working on modifications to the IJP.
    Most of these are specific to Octopus, though some will be more
    generally applicable. He has modified the IJP GUI so that when
    dataset versioning is used, only the most recent version of each
    dataset will be shown in results. He is now working on linking job
    provenance to the IJP’s job details. There are two main changes
    here: a RESTful call that jobscripts can make  
    to pass the ID of any provenance record to the IJP; and modifying
    the IJP GUI to allow users to see provenance details of their
    jobs.  
    Brian has updated the IJP demo project (in light of Tom’s experience
    in installing it). Brian notes that the official releases of IJP
    components are not compatible with the current ICAT/IDS releases,
    and he should produce new releases.
  - ICAT Dashboard – Tom reported that it now works for any hierarchy.
  - Multi-container support – Installation script for Payara
    (supported/maintained version of glassfish 4.1). Steve recommends
    using it once installation scripts have been updated. Will need new
    release of all components.
  - Issues from ICAT production deployments (Any)  
    Rolf: discussed OAI-PMH at HZB, decided nice student project. In the
    next year? If so, deadline early August, prototype August. Steve
    suggested an earlier interaction might be useful.  Project would be
    10 weeks; but will use Github, so can
track.

# Actions

| **Item** | **Description**                                                                                | **Assigned** |
| -------- | ---------------------------------------------------------------------------------------------- | ------------ |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf         |
| 102.2    | Produce new releases of IJP components                                                         | Brian R.     |
