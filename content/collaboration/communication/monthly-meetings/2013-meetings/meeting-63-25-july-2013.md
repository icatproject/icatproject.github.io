---
title: Meeting 63 – 25 July 2013
date: 2013-07-25
---

  - Actions from the meeting 62 (Chair)
  - Status of ICAT 4.3 (Steve)
  - Feedback on new components (authn\_simple, topcat 1.9, ice and
    icat-setup (All)
  - Feedback on changes to query language, authz rules etc (All)
  - Feedback on guidelines for developers (All)
  - Issues from ICAT production deployments (All)
  - AOB (All)

### Notes 63

Present: Juergen, Milan, George, Shelley, Tom, Brian, Kevin and Steve
(Chair)

There was no progress on any of the actions.

Steve: ICAT 4.3 is still progressing well. There is a problem in the
MySQL migration script. It is hoped that when this is converted to
Oracle the error may become apparent. It currently looks like a MySQL
bug. Besides this the only work left to do is the new query language and
related authz changes. Old style queries are being parsed and converted
into the new JPQL style. They will then be subject to the new
authorization code. This means that because the authz code is changing
the data that comes back from INCLUDE may change in 4.3. Some
modifications to authz rules may be needed to restore the old behaviour
if so desired.

Tom: A couple of feature requests for TopCAT have been submitted, ice
and icat-setup seem to work as advertised.

Steve: Feedback on the query language changes had been received saying
that we should keep the old language for an extended period. This is to
avoid forcing people to change and because its simplicity is
appreciated. There seems to be no problem with this. Following a
question from Tom, it was explained that authz rules would be applied to
included entities but that a mechanism would be provided to say that it
was always allowed to go from one specific entity type to another: for
example from Dataset to Datafile.

The developer guidelines were discussed briefly. Antony had requested by
e-mail the inclusion of something about logging. Tom questioned the need
to provide a python install script for the trivial installations, but
agreed that, if it were provided, then it should be in python and follow
the guidelines. Tom would also like to see some documentation on what
the scripts were doing. He was happy to have a verbose option to provide
this.

AOB: Earlier in the meeting Shelley had asked about the IDS – Steve
emphasised that though it had been made available to parts of PanData it
was not yet a supported ICAT component. Juergen expressed an interest in
using OpenId with ICAT however he has no spare effort at the moment to
do anything about it. Brian asked what was being done about organising
the ICAT part of the Barcelona meeting. Steve suggested that it should
have two parts: one relating to PanData and a more general part. An
action has been added for Steve and
Alistair.

### Actions 63

 

|       |                                                                     |                |                                                                                        |
| ----- | ------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| Item  | Description                                                         | Res            | Status                                                                                 |
| 63.00 | Document the meeting and update the actions                         | Steve          | Done                                                                                   |
| 61.01 | Put the simple ICAT browser into contrib when it is ready           | Tom            | .                                                                                      |
| 61.02 | Write a note about glassfish configuration to reduce https overhead | Steve          | Done                                                                                   |
| 61.03 | Write a note about GF 4 and AJP                                     | Alistair       | ApacheAndGlassfish[?](https://code.google.com/p/icatproject/w/edit/ApacheAndGlassfish) |
| 60.03 | Finalise a release of IJP and send a note to the mailing list       | Steve          | .                                                                                      |
| 63.01 | Plan the ICAT meeting in Barcelona                                  | Steve/Alistair | Done                                                                                   |
