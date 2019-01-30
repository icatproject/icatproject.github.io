---
title: Meeting 95 – 17 March 2016
date: 2016-03-17
---

# Agenda

  - Actions from meeting 94 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager
      - Python-icat (Rolf)
      - IDS (Steve)
          - FUSE (Alex)
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Jody)
      - IJP (Brian R)
      - ICAT Dashboard (Alex)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
      - Face to Face meeting for 2016 (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Kevin, Steve, Jody, Brian R, Becky, Frazer, Rolf, Milan

Apologizes: Tom, Andy, Jianguo

Action 85.3 Steve reported that Alex has migrated the whole of ICAT
Manager to github and that the version on github is more up to date the
the package hosted on the ESRF website.

  - Becky introduced herself to the team. She is a graduate on a 6 month
    placement within the Research Data Group who will be working on a
    new GUI for the ICAT Job Portal.
  - Steve talked about Alex and Andy’s visit to RAL being very
    informative and useful for both teams.
  - ICAT 4.7 is moving along with many of the new features complete.
    Steve is currently working on getting multiple ICATs to work with an
    Apache front end.  Currently there are a few issues with the Apache
    front end.
  - There was a discussion about the Update Semantics. There were
    worries about the complexity of the problem and further research is
    required.
  - There was a discussion about the request to add an Orchid Id field
    to the user table. There was also a discussion about adding more
    fields which brought up concerns about security and possibly
    accessing data directly from the User office. This was another point
    that would require more thought.
  - Steve talked about adding a Boolean flag to the IDS properties file
    to ask the user if they would like the IDS to write as fast as it
    can or as slowly as you can to tape systems.
  - Steve talked about the changes to the IDS-plugin where the plugin
    used to depend on the ICAT-utils which would then depend on the
    ICAT. This would cause the plugin to be unnecessarily large. This
    has now been changed.
  - Frazer talked about a new node being set-up for SCARF that will
    allow users to download data from TopCat which would then be staged
    in a home directory in SCARF.
  - TopCats major tickets are now complete apart from one which is now
    being worked on for the upcoming release.
  - Brian discussed about how there new work is starting on the IJP. LSF
    have presented Brian R with some new requirements that have been
    collected over the past year. Becky will now start working on the
    new user interface. There have been meetings with LSF to discuss
    what they would like to see in the UI and mocks up are now starting
    to be created.
  - Alex talked about how the Dashboard now collects and presents data
    on current downloads and failed downloads. There will be a snapshot
    produced soon which will then require further user testing.
  - There was further discussion on the upcoming ICAT meet up and how we
    should try to invite more people from outside the teams to spread
    the word of
ICAT.

|          |                                                                               |              |
| -------- | ----------------------------------------------------------------------------- | ------------ |
| **Item** | **Description**                                                               | **Assigned** |
| 95.0     | Tom to circulate current Dashboard Requirements                               | Tom          |
| 94.0     | Create a formal release of TopCat 2.0                                         | Jody         |
| 94.1     | Provide any requirements for the Dashboard                                    | All          |
| 93.0     | Make screencast of TopCAT demo                                                | Jody         |
| 92.2     | Provide information on LSF’s use and potential future use of ICAT components. | Jianguo      |
| 74.0     | Look into JDBC connector resilience with Wildfly                              | Steve        |
