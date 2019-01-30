---
title: Meeting 100 – 25 August 2016
date: 2016-08-25
---

Agenda:

  - Actions from meeting 99 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE~~
          - PollCat (Frazer)
          - SmartClient (Steve)
          - WebDAV (Tom Gowland)
      - TopCAT (Jody)
      - IJP (Brian R & Becky)
      - ICAT Dashboard (Tom Gowland)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Face to Face meeting for 2016 and NOBUGS (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Brian R, Tom Griffin, Becky, Steve, Jeremy, Frazer, Sylvie,
Andy, Peter, Alex and Tom Gowland

Apologies: Rolf and Jianguo

Action 98.1: Tom Griffin has now been removed from the action to
“Publish state for STFC production deployments” leaving Kevin
assigned.

Action 99.0: Tom Gowland has produced a draft of the screencast for
TopCAT. He has received very useful feedback and will be producing a new
draft shortly.

  - ICAT: Steve reported on the issue surrounding duplicate datafile
    locations. Rolf wrote in the ICAT group that because if the IDS has
    hash function protection of the location field then datafiles can’t
    be cloned. To circumvent this problem requires that ICAT and the IDS
    must communicate somehow.  Andy asked which facility requires
    duplicate datafiles and why. Steve replied that it is Octopus that
    require the duplication and DLS already have a huge number. Steve
    also reported that he is working on a Restful API client in Python.
    Due to the synergy between python and JSON, this is working well.
    Steve has also been working on the general documentation around
    ICAT.
  - ICAT Manager: Andy reported that there was nothing planned yet
    regarding the issues in GitHub and suggested that perhaps it should
    be something to be talked about at the face to face meeting in
    October.
  - IDS: Steve reported that he wants to allow to manage multiple files
    with the same physical location for both downloaded and deletion.
  - PollCAT: Frazer reported that there has been more development on
    staging to SCARF. Shirley has been writing the code for this but it
    still needs testing.
  - SmartClient: Steve reported that Jody has been integrating
    SmartClient into TopCAT and wasn’t happy about the user having to
    accept a self-signed certificate. Steve has now set the server of
    the SmartClient to run on http as the only requests will come from
    localhost.
  - WebDAV: Tom Gowland reported that he has been working on the WebDAV
    system to allow it to be more dynamic. WebDAV now works for the ISIS
    facility (and hierarchy) and he is planning to allow it to be more
    configurable such that it can work for any facility after setting
    values in configuration files.
  - TopCAT: Steve reported on behalf of Jody. TopCAT is now pluggable
    meaning that the backend can be implemented in any language or
    framework. Jody is also working with Frazer on a TopCAT plugin that
    allows for remote analysis of data with ICAT. The DOI generation has
    bee separated out into another plugin. Becky also reported that she
    had been working on external filters meaning that you can now have
    filters other than the ones at the top of each grid. Andy thought
    that TopCAT seemed to be running slowly when trying to calculate the
    size of many datafiles and that when the page was refreshed it tried
    to calculate these sizes again. Tom Griffin reported that the issue
    had been fixed in TopCAT 2.1 and Andy confirmed he was using version
    2.0.
  - IJP: Becky reported that she has re-implemented the IJP GUI as a
    plugin for TopCAT. This is due to be released at the same time as
    the next version of TopCAT. Brian reported that he had been making
    minor changes to the backend including refreshing job types at
    regular intervals (a requirement from Octopus) and also adding
    miredot document generation to the server.
  - Dashboard: Tom reported that he is working on building and deploying
    the Dashboard as well as being able to configure it properly in
    preparation for the demonstration at the face to face meeting.
  - Face to face meeting: Steve reported that he has uploaded the agenda
    for the meeting and has updated it to give Rolf a slot to present
    Ingestion with Python-ICAT. He has also removed Rolf from the IDS
    talk and Steve may be talking about this in his stead. The steering
    group meeting time has been set to 17:30 and will take place at the
    Avenue Hotel. Steve also welcomed any proposals for site reports.
    Andy also reported that he had uploaded an agenda for the steering
    group meeting and welcomes any feedback people
have.

|       |                                                          |             |
| ----- | -------------------------------------------------------- | ----------- |
| Item  | Description                                              | Assigned    |
| 98.1  | Publish state for STFC production deployments            | Kevin       |
| 99.0  | Produce a screencast for the TopCAT demo                 | Tom Gowland |
| 100.0 | Submit a bug for adding the upgrade path for TopCAT JSON | Steve       |
