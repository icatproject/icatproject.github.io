---
title: Meeting 97 – 26 May 2016
date: 2016-05-26
---

# AGENDA

  - Actions from meeting 96 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE (Alex)~~
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Jody)
      - IJP (Brian R)
      - ICAT Dashboard (Alex P-D)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Face to Face meeting for 2016 (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Apologies: Brian R, Alex dM, Alex P-D

Present: Rolf, Shelly, Milan, Frazer, Rebecca, Sylvia, Jody, Jianguo,
Tom, Steve, Brian M, Peter

Action 96.0: Tom has now identified someone who would be able to produce
the TopCAT screencast however the action will remain with Tom for the
present.

Action 96.1: The dashboard snapshot has been delayed because of concerns
expressed by an STFC DBA about some potentially expensive queries.

Action 92.2: Jianguo has provided information on Octopus’s use and
potential future use of ICAT components.

Action 74.0: Steve has finally looked into JDBC connector resilience
with Wildfly. He reported that the mechanism is rather different from
the Glassfish one but it would appear to be OK and has been coded into
the setup\_utils.py library.

  - Steve reported that a number of components – in particular
    icat.server and and icat.client 4.7.0 and ids.server 1.6.0 has been
    released.
  - Rolf told the meeting that python-icat 0.11 was almost ready.
  - Frazer explained that the IDS Globus transfer was better called
    PollCat and that it had a number of plugins – one of which was for
    Globus file transfer.  PollCat is currently in a private repository
    but will shortly be moved.
  - Kevin said that the WebDav interface was still not general and so
    will remain in a private repository until it has been made more
    general.
  - Jody reported that a second TopCAT 2.0.1 snapshot has been produced.
    This may be one that can be released. It is currently planned to add
    DOI generation to the next TopCAT – presumably 2.1.0. Rolf said he
    would like to see file upload (which was in TopCAT 1.13.0) to be
    added as well.
  - Rebecca said that Brian was restructuring the Rest API of the IJP
    server to be JSON only and that there were plans to allow TopCAT to
    be able to make calls to this IJP server.

|          |                                            |              |
| -------- | ------------------------------------------ | ------------ |
| **Item** | **Description**                            | **Assigned** |
| 96.0     | Assign screencast role for the TopCAT demo | Tom          |
| 96.1     | Release a snapshot of the Dashboard        | Alex/Steve   |
