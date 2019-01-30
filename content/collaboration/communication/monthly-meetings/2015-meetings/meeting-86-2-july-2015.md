---
title: Meeting 86 – 2 July 2015
date: 2015-07-02
---

# Agenda

  - Actions from meeting 85 (Steve)
  - Component development
      - Waffle.io (Steve)
      - ICAT (Steve)
      - ICAT Manager
      - Python-icat (Rolf)
      - IDS (Steve)
          - FUSE (Condie)
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Wayne)
      - IJP (Brian R)
      - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Present : Steve, Wayne, Kevin P, Brian R, Alex PD, Frazer, Chris, Jens
 and Paulina Karp.

Apologies: Rolf and Tom G

  - Action 85.0: Notes have been circulated and recording. and links
     from the TopCAT V2 sprint review.
  - Action 85.1:  Links and instructions for using the live test version
    of TopCAT V2 has been circulated.
  - Action 85.5: Asking the Mantid group on how they migrated their
    wikis is no longer relevant.
  - Action 61.1: Steve will speak to Tom about transferring Fuse to
    Alex.

**General Comments:**

  - Steve discussed about Waffle IO. Mentioned about its benefits of
    being used along multiple repositories and suggested that it should
    be exploited. Steve has also posted the details of Waffle IO and
    added a link for the web site.
  - Steve has put up a new 4.5.0 ICAT SNAPSHOT. There are two new
    features to be found. Firstly old lucene calls have been removed and
    secondly the way ID’s have been allocated have also been changed.
  - Steve mentioned that there have been several small updates to the
    IDS to allow it to work with the new ICAT 4.5.0 snapshot.
  - Frazer discussed how Globus Transfer is going very well and is
    moving along at a sufficient pace. Jens asked if Frazer would be
    able to have part of Globus Transfer working so that it can either
    be discussed in length or presented to the meeting with Diamond on
    July the 13th.
  - Steve’s smart client project is going very well. Steve has tested
    the smart client over the past few days. From these tests it appears
    to behave as planned.
  - Kevin informed the group that webdav has edged forward in its
    development. Test servers are currently being set up for this and he
    hasn’t encountered any particular problems.
  - Wayne discussed how TopCAT V2 is moving along. There have been 2
    sprint review meetings since the last ICAT collaboration meeting.
    Sprint review 3 was poorly attended.
  - Brian told the team that the ICAT job portal has been deployed on
    the CLF system. It is currently working without too many issues.
    There are currently a few interactive jobs working on the system
    however there was an issue if a customer doesn’t close the session
    correctly. This causes the interactive jobs to not be correctly
    cleared up.
  - Steve mentioned that there has been an issue with ICAT at Diamond.
    ICAT cannot cope with a dataset that had over 1.3 million datafiles.
    The limit has been pushed up to 250,000 but Steve has said he will
    need to discuss with Diamond about allocation of datafiles to
    datasets.

# Actions

|      |                                                                                                  |              |
| ---- | ------------------------------------------------------------------------------------------------ | ------------ |
| ITEM | DESCRIPTION                                                                                      | ASSIGNED     |
| 86.0 | Discuss with Tom about what should happen with Fuse. If it should be handed over to Alex or not. | Steve        |
| 86.1 | Meet with Jens to discuss the meeting with Diamond about Globus Transfer.                        | Kevin/Frazer |
| 86.2 | Send out sprint review 3 recordings and notes to the participants that were unable to attend.    | Wayne        |
| 86.3 | Steve to meet with Greg from Diamond about optimizing their datasets.                            | Steve        |
| 86.4 | Tom to decide who needs to put the simple ICAT browser into contrib.                             | Tom          |
| 86.6 | Use waffle.io                                                                                    | Everyone     |
| 85.2 | Add a list of current sponsors to the ICAT website                                               | Tom          |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                                                  | Christophe   |
| 81.0 | Report bug in eclipselink                                                                        | Steve        |
| 74.0 | Look into JDBC connector resilience with Wildfly                                                 | Steve        |
