---
title: Meeting 96 – 28 April 2016
date: 2016-04-28
---

# Agenda

  - Actions from meeting 95 (Steve)
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
      - ICAT Dashboard (Alex)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Face to Face meeting for 2016 (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Peter , Steve, Jody, Brian R, Brian M, Rolf, Tom, Shelly and
Andrew

Apologies: Andy and Milan

Action 95.0 The requirements were successfully circulated to the ICAT
group.

Action 94.0 Jody created a formal release of TopCat V2.0.0. This was
successfully released onto Diamond and out to the community.

Action 94.1 All the requirements for the Dashboard have been now been
gathered and uploaded onto GitHub.

  - Steve reported that there are currently two things that are
    preventing the release of ICAT 4.7. Firstly, the possible addition
    of an extra call to see if a user is still currently logged in.
    Secondly, the load balancing with multiple ICATs which is
    potentially being caused by Apache timeouts.
  - The release of IDS 4.6 is very close to release however there is one
    small issue that is holding it up. This issue is to do with the
    current getSize call now taking minutes. Steve has been given access
    to the machines that are presenting this behaviour so the problem
    can be explored further.
  - Brian reported that he and Becky are working on changes towards the
    IJP. Becky has presented some new mock ups to Octopus which have
    been accepted. Brian has also been thinking about how to support the
    Octopus requirement for versions on dataset collections.
  - Alex reported that the Dashboard is nearly completion from its
    initial requirements. The next stage is releasing a snapshot  so
    that people can have a go with it.
  - Steve spoke about the upcoming ICAT face to face. There was a
    discussion on the schedule and how it could possibly play out over
    the two days.
  - Rolf reported that he has been playing around with Docker and
    explained what he might do with it going forward.
  - Peter and Shelly explored an idea about having a more abstract layer
    onto of the ICAT API to shield the consumers of their ICAT from any
    schema/API changes. There was a following short discussion on
    possible alternatives and the use case for an extra
layer.

|          |                                                                                   |              |
| -------- | --------------------------------------------------------------------------------- | ------------ |
| **Item** | **Description**                                                                   | **Assigned** |
| 96.0     | Assign screencast role for the TopCAT demo                                        | Tom          |
| 96.1     | Release a snapshot of the Dashboard                                               | Alex/Steve   |
| 92.2     | Provide information on Octopus’s use and potential future use of ICAT components. | Jianguo      |
| 74.0     | Look into JDBC connector resilience with Wildfly                                  | Steve        |
