---
title: Meeting 109 – 24 August 2017
date: 2017-08-24
---

# Agenda

  - Actions from meeting 108 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE~~
          - PollCat (Frazer)
          - ~~SmartClient (Steve)~~
          - IDAV (Jamie)
      - TopCAT (Jody)
      - IJP (Brian R/Alastair)
      - ICAT Dashboard (Jamie)
      - ~~Multi-container support (Steve)~~
      - Installation (Steve)
  - Website (Stuart)
  - Next F2F Meeting – Steve/Andy
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Brian, Jody, Jamie, Steve, Kevin, Rolf, Tom Griffin, Alex,
Peter  
Apologies: Stuart, Frazer

Actions from
108

|          |                                                                                                |                |
| -------- | ---------------------------------------------------------------------------------------------- | -------------- |
| **Item** | **Description**                                                                                | **Assigned**   |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf           |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie  |
| 106.1    | Produce a report detailing the suggested schema changes                                        | Steve          |
| 106.2    | Produce response to Andy’s review and an action plan to address the problems.                  | Steve + Stuart |

**Action 102.2** – Brian reported he hasn’t finished producing new
releases of the IJP components yet but is still working on it.

**Action 106.1** – Steve reported he hasn’t produced report detailing
the suggested schema changes. It’s too large to discuss on a telecom and
would be better suited for the face to face.

Steve reported that he will be reducing his input into the ICAT project
and will be slowly handing over to Stuart.

Component development

**ICAT –** Steve reported ICAT 4.9.1 is not formally released yet but is
ready. It avoids the performance degradation introduced with the
separate lucene component in ICAT 4.9.0. Now update messages are grouped
together. It requires an updated version of the lucense server to accept
the aggregated messages.

**IDS** – Steve reported IDS 1.8 is released but not updated on webpage
yet. This includes the new installation property files, setup.properties
and run.properties.

Work on the next release has now started. Two pull requests from Rolf
have been accepted. Support for Glassfish 4.0 has been removed so will
require Glassfish 4.1+ or Payara; Steve recommends the latter.

**Python ICAT** – Rolf reports minor release in June to fix difficulty
having multiple client instances.

**Topcat** – Jody reported 2.3.0 released in early August. Jody also
reported that all current 2.4.0 tickets are complete and any more
features people want adding to 2.4.0 urgently should be discussed on the
icatgroup.

**IJP** –Brian reports batch connector for HTCondor now working and that
he’s still working on the new IJP component releases.

**Installation** – Steve reports BitRock installer has been updated
using the final set of components for Glassfish before the switch to
Payara. Steve welcomes people to test on Unix and Windows and report any
issues.

F2F

Steve asks if everyone if there are any problems with the proposed date
of 20 ^(th) – 21 ^(st) November, at RAL. There were no objections so
that date is now fixed.  Tom suggests meeting to be held across two half
days rather than a full day to allow people to travel to and from RAL.
Steve will work on the agenda.

109
Actions

|          |                                                                                                |                |
| -------- | ---------------------------------------------------------------------------------------------- | -------------- |
| **Item** | **Description**                                                                                | **Assigned**   |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf           |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie  |
| 106.2    | Produce response to Andy’s review and an action plan to address the problems.                  | Steve + Stuart |
| 109.1    | Produce agenda for F2F                                                                         | Steve          |
