---
title: Meeting 101 – 22 September 2016
date: 2016-09-22
---

Agenda:

  - Actions from meeting 100 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - PollCat (Frazer)
          - SmartClient (Steve)
          - WebDAV (Tom Gowland)
      - TopCAT (Jody)
      - IJP (Brian R)
      - ICAT Dashboard (Tom Gowland)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Face to Face meeting for 2016 and NOBUGS (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Kevin, Frazer, Jody, Jeremy, Tom Griffin, Tom Gowland,
Jianguo, Milan, Peter, Rolf, Andy, Gordon Brown, Brian M

Apologies: Cathy

Action 98.1: Kevin has been looking into the states for STFC production
deployments and is working on producing the report.

Action 99.0: Produce a screencast for the TopCAT demo: Tom Gowland
reported that he has split the screencast into two separate videos, one
aimed at facilities and another, shorter video aimed at users. He also
reported that he is looking for feeback about the screencasts.

Action 100.0: There turned out to be no upgrade path needed and Jody was
able to confirm this.

  - ICAT: Steve reported that he has improved the documentation for the
    ICAT client and server. He also reported that he has released the
    4.8.0 snapshot. This update allows the server to update individual
    attributes for DOIs and it also adds the clone entity operation. The
    client now has a new python class which uses the RESTful API and
    handles error conditions better.
  - IDS: Steve reported that the IDS now supports multiple datafiles
    that have the same location.
  - WebDav: Tom Gowland reported that he has been working on making
    WebDav more responsive as well as allowing it to be more dynamic. He
    has been working on issues related to Windows file path issues where
    certain characters are not allowed. Steve reported that WestLife are
    interested in WebDav.
  - TopCAT: Jody reported that there has been a significance performance
    increase mainly due to the optimization of the loading spinners.
    TopCAT is now also more pluggable and he is currently working on a
    DOI plugin which can be used at Diamond and now thinks it will be
    more sensible to produce a separate DOI plugin for ISIS if the
    Diamond one can’t be used there.
  - Dashboard: Tom Gowland reported that he has been working through the
    various tickets surrounding Dashboard in the hope to get a more
    easily deployable application that works for multiple hierarchies.
    He has also been doing some front-end development to add more graphs
    to the main pages of Dashboard.
  - NOBUGS: Steve reported that the deadline for submitting talks is the
    4 ^(th) of October. Brian Matthews commented that he thinks that
    there should be a reference paper for ICAT and the ICAT family in
    general. Steve also appealed for anyone wishing to do a site report
    as well as anyone happy to do a session about using Docker. Rolf and
    Peter agreed to do a session on Docker.
  - AOB: Rolf reported that if IDS gets an I/O error that it currently
    isn’t logged. Steve said that he would look into it. Andy reported
    problems with Lucene and asked if they could be down to the
    specification of his machine. Kevin reported that this should be
    addressed in the report that he is producing and there was general
    agreement that 500MB was probably not enough RAM for Lucene
    indexing. Brian Matthews reported that the Research Data Alliance
    (RDA) are interested in the interop abilities between ICAT and other
    data catalogues.

|      |                                               |          |
| ---- | --------------------------------------------- | -------- |
| Item | Description                                   | Assigned |
| 98.1 | Publish state for STFC production deployments | Kevin    |
