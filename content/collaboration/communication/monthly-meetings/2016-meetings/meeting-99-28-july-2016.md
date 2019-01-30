---
title: Meeting 99 – 28 July 2016
date: 2016-07-28
---

Agenda:

  - Actions from meeting 98 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE (Alex P-D)~~
          - PollCat (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Jody)
      - IJP (Brian R & Becky)
      - ICAT Dashboard (Tom Gowland)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Face to Face meeting for 2016 and NOBUGS (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Jody, Becky, Tom Gowland, Brian R, Rolf, Jianguo,
Shelley, Peter and Milan

Apologies: Cathy and Frazer

Action 96.0: Tom Griffin has asked Tom Gowland to 96.0 produce a
screencast to demo TopCAT.

Action 96.1: A final snapshot of the Dashboard was made by Alex PD.

Action 98.0: A Miredot licence for the IJP has been obtained.

Action 98.2: Rolf has distributed a pointer to the HZB data policy.

  - ICAT: Steve reported that he is working on adding roles for single
    attributes. The purpose of this is to allow investigators to control
    their DOI but not to be able to fiddle with other parts. There has
    also been discussion of removal of the old query language. Steve
    suggests that the main part of the documentation should only discuss
    JPQL and that there should be an appendix added to discuss the old
    query language as some still like it (Rolf included).
  - SmartClient: Steve reported that the SmartClient will be integrated
    into the next TopCAT release.
  - WebDAV: Tom reported that he will be continuing Alex PD’s work on
    WebDAV following a meeting with Kevin to be arranged next week.
  - TopCAT: Jody reported that he has released TopCAT 2.1.0 which added
    a feature which shows a user’s full name next to their login and
    which also fixes some bugs. He also reported that there is now a
    2.2.0 milestone in GitHub with tickets that need completing. The
    largest issue is DOI publishing. Steve mentioned that this is
    dependent on the next ICAT release which will include the ability to
    control update access to individual attributes.
  - IJP: Brian R reported that the main changes to IJP have been to the
    restful interface so that the GUI can access it. Becky reported that
    the IJP GUI is now in development and has reached the point where it
    has all of the features of the old GUI. Becky also reported that
    there has been a test deployment of the IJP GUI in Octopus. The hope
    is that the GUI can be extended to be available to other groups
    outside of Octopus in the future.
  - NOBUGS: Steve reported that all of the NOBUGS abstracts have now
    been sent off and most are still awaiting a response.
  - Rolf asked when there will be an agenda set up for the face to face
    meeting for 2016. Steve replied that he was going to base the agenda
    on who is coming to the meeting as the content should vary dependent
    on how many newcomers there
are.

|      |                                               |                       |
| ---- | --------------------------------------------- | --------------------- |
| Item | Description                                   | Assigned              |
| 98.1 | Publish state for STFC production deployments | Kevin and Tom Griffin |
| 99.0 | Produce a screencast for the TopCAT demo      | Tom Gowland           |
