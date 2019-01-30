---
title: Meeting 94 – 25 February 2016
date: 2016-02-25
---

# AGENDA

  - Actions from meeting 93 (Steve)
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

Present: Frazer, Jody, Steve, Brian R, Kevin, Tom, Milan, Andy, Kevin,
Peter, Alex dM and Shelley

Apologies: Rolf

Action 93.1 Demo of the dashboard was carried out.

  - Steve reported that a bug was found in the ICAT 4.6 release. The bug
    only affects the call to update. Advice was to move to 4.6.1.
  - Logging in ICAT 4.7 has been transferred from the Log table to JMS
    messaging. The logging data will now be captured and processed by
    the Dashboard. The format of the ICAT JMS messages will be the same
    as the IDS ones.
  - Tom reported that the Globus server is moving from development to
    production in the coming month.
  - Jody reported that TopCat has had many small improvements. Mainly
    aimed towards ISIS requirements. It was also reported that TopCat in
    the coming month will be pushed into production for both Diamond and
    ISIS.
  - Alex commented on how the TopCat installation is straightforward and
    very similar to how other ICAT family components are installed.
  - Alex demonstrated the Dashboard with it’s current features. Feedback
    was generally
positive.

|          |                                                                               |              |
| -------- | ----------------------------------------------------------------------------- | ------------ |
| **Item** | **Description**                                                               | **Assigned** |
| 94.0     | Create a formal release of TopCat 2.0                                         | Jody         |
| 94.1     | Provide any requirements for the Dashboard                                    | All          |
| 93.0     | Make screencast of TopCAT demo                                                | Jody         |
| 92.2     | Provide information on LSF’s use and potential future use of ICAT components. | Jianguo      |
| 85.3     | Migrate ICAT Manager to the ICAT project GitHub                               | Alex dM      |
| 74.0     | Look into JDBC connector resilience with Wildfly                              | Steve        |
