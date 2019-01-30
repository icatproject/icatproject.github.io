---
title: Meeting 75 – 26 June 2014
date: 2014-06-26
---

# Agenda

  - Actions from meeting 74 (Steve)
  - DOIs – next steps (Tom)
  - Report from recent PanData meeting (Alistair and others)
  - Actions from the PanData meeting (Steve and others)
  - ICAT development (Steve)
  - InvestigationGroup (Rolf)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Present: Kunal, Alistair, Wayne, Brian M, Rolf, Milan, Steve

Apologies: Tom, Shelly, Kevin

Action 72.5 – Add authz rules to contrib directory has been done by Tom
who has provided some code

Action 74.1 – Document or implement in setup script the JDBC connector
fix for Glassfish/Oracle. Kevin and Steve have discussed this but it has
not yet gone into the setup script. It has not gone into the list of
issues for ICAT for milestone release 4.4 so will be removed from here.

Actions from the PanData meeting. A number of items were raised – these
are recorded below as actions 75.0 to 75.6. In addition, the following
have already been done:

1.  a diagram overview of the system has been added at
    <http://icatproject.org/about/components-of-the-icat-project/>
2.  a bug has been submitted against ICE as it does not work in Safari
3.  a bug has been submitted against authn\_db to allow ldap to bind as
    a user defined in auth\_db.properties

Alistair suggested that the TopCAT mockup should make use of icons to
help identify facilities and make more sensible use of colour (add to
the TopCAT issues list) and that we should use local expertise in
graphic design.

ICAT development – Steve reported that 4.3.3 client had been released
and that a new 4.3.3 snapshot for the server had been made available.
This snapshot addresses bugs found by Tom in his testing with multiple
ICAT servers.

InvestigationGroup – Rolf asked us to go ahead with the addition of the
InvestigationGroup. The only disadvantage raised was that it would make
the system slightly more complex. Steve said he thought that the only
person with reservations about the proposal was Tom. Steve suggested
that unless Tom had a convincing argument for not doing so, then the new
entity type would be added to ICAT 4.4.

TopCAT development – Wayne requested a revised IDS snapshot to allow him
to complete testing of 1.12. The upload is now almost ready.

AOB – Alistair told us that the final PanData service verification was
about to start and that it would use the latest 4.3.3-SNAPSHOT. He also
said that he had been contacted by SSI who had reviewed the ICAT project
a few years ago. He observed that of the 34 recommendations they had
made 26 had been implemented. The meeting agreed that if SSI wish to
repeat the exercise we would agree to
it.

# Actions

|      |                                                                                                             |          |
| ---- | ----------------------------------------------------------------------------------------------------------- | -------- |
| Item | Description                                                                                                 | Assigned |
| 75.0 | Produce a diagram and description of the schema                                                             | Steve    |
| 75.1 | Consider using a config file rather than topcatadmin                                                        | Wayne    |
| 75.2 | Convert balsamiq desktop licences to web and consider suitable license for open source software development | Tom      |
| 75.3 | Publish improved TopCAT mockup                                                                              | Wayne    |
| 75.4 | Submit TopCAT requirements                                                                                  | Andy     |
| 75.5 | Contact Christian Felder concerning future of py-icat                                                       | Steve    |
| 75.6 | Check that existing release of IDS includes facility name in the ZIP path                                   | Alistair |
| 75.7 | Produce new IDS snapshot                                                                                    | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly                                                            | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when it is ready                                                   | Tom      |
| 60.3 | Finalise a release of IJP and send a note to the mailing list                                               | Steve    |
