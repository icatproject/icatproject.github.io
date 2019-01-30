---
title: Meeting 76 – 24 July 2014
date: 2014-07-24
---

# Agenda

  - Actions from meeting 75 (Steve)
  - DOIs – next steps (Tom)
  - ICAT development (Steve)
  - InvestigationGroup (Rolf/Tom)
  - IDS development – and linking proposal (Steve)
  - TopCAT development (Wayne)
  - Roadmap (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

**Present** : Alastair, Steve, Kevin, Wayne, Brian R, Milan, Kunal, Tom,
Condie and Shelly  
**Apologies** : Rolf

This was the first meeting for Brian Ritchie who has started work on the
IJP and for Condie Mckenzie-Smith who is working  with Tom for a year.

  - Action 75.0 to produce a diagram and description of the schema has
    been done.
  - Tom is awaiting a reply on the balsamiq license for open source
    development (75.2). Meanwhile he has provided a license that can be
    used to get started with the web (rather than desktop) version.
  - Wayne (75.3) has moved the TopCAT mockup to the web version of
    balsamiq but wants to make more changes before sharing it. Tom
    expressed an interest in making available what had been done so far.
  - Steve has contacted Christian Felder concerning the future of
    py-icat (75.5). Christian is still interested but acknowledges that
    the current version needs updating to make it work with ICAT 4.3.
  - IDS 1.1.0 has been released (75.7)
  - The action to put the simple ICAT browser into contrib (60.1) has
    been transferred to Condie.

Tom spoke on next steps for DOIs. As we have agreement on what to do,
Steve will look at the scripts which are used by mantid to see if they
can easily be integrated into the release process – new Action 76.0

Steve spoke on the ICAT development and mentioned that ICAT 4.3.3 had
been released and that the restful interface for 4.4.0 was well
underway. The import/export and session management were complete and
search and create are now being worked on. The client calls are as far
as possible like the SOAP ones however the interfaces are quite
independent and a generator of entity objects for a Java and Python
client will be needed.

The discussion on InvestigationGroup was postponed to the next meeting
when we hope Rolf and Tom will coincide.

Steve spoke briefly about the IDS linking proposal. Tom thought it might
be useful to ISIS  in the future.

Wayne spoke about TopCAT development. 1.12.0-SNAPSHOT has been made
available. Christophe had tried it and only had a few minor criticisms.

Steve suggested that the interval between roadmap updates should be
increased from three to four months. It was suggested that he send out
an email to request suggestions which will then be discussed at the next
monthly meeting.

Tom reported a couple of issues from ISIS with TopCAT’s use of the IDS.
One problem is that TopCAT can generate URLs that are too
long.

# Actions

| Item | Description                                                                                                 | Assigned |
| ---- | ----------------------------------------------------------------------------------------------------------- | -------- |
| 76.0 | Look into using variant of mantid scripts to publish DOIs for ICAT software.                                | Steve    |
| 75.1 | Consider using a config file rather than topcatadmin                                                        | Wayne    |
| 75.2 | Convert balsamiq desktop licences to web and consider suitable license for open source software development | Tom      |
| 75.3 | Publish improved TopCAT mockup                                                                              | Wayne    |
| 75.4 | Submit TopCAT requirements                                                                                  | Andy     |
| 75.6 | Check that existing release of IDS includes facility name in the ZIP path                                   | Alistair |
| 74.0 | Look into JDBC connector resilience with Wildfly                                                            | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when it is ready                                                   | Condie   |
| 60.3 | Finalise a release of IJP and send a note to the mailing list                                               | Steve    |
