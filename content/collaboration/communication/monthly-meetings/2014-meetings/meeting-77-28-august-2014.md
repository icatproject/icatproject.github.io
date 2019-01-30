---
title: Meeting 77 – 28 August 2014
date: 2014-08-28
---

# Agenda

  - Actions from meeting 76 (Steve)
  - ICAT development (Steve)
  - InvestigationGroup (Rolf/Tom)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - IJP development (Brian R)
  - Roadmap (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

**Present** : Kunal, Condie, Tom, Kevin, Brian R, Steve, Milan, Rolf,
Shelly and Brian M.

  - There were no comments on the minutes
  - Action 76.0 – Steve has modified Mantid scripts to generate DOIs and
    store metadata for the ICAT components.
  - Action 75.2 – Tom has obtained balsamiq licences for web use for
    open source software development.
  - Action 75.3 – Wayne has made balsamiq mockups of the proposed new
    TopCAT available.
  - Action 75.6 – This can be taken as done.
  - Action 61.1 – One of Alistair’s students has been working on the
    “Simple ICAT Browser”
  - Action 60.3 – The current IJP development makes a release much more
    practical.
  - Steve reported that there had been no progress with the ICAT server
    this month.
  - There was a good discussion on introducing the InvestigationGroup to
    the schema. Tom was concerned that it could cause confusion by
    offering two ways to do the same thing and that it might have a
    negative impact upon performance. The agreement was to try the
    InvestigationGroup in the 4.4.0-SNAPSHOT to ensure that there were
    no practical problems. and to document that InvestigationGroup
    should be used for authz and that  InvestigationUser entries should
    be used only to indicate specific roles such as PI. The role
    attribute might be made non-optional.
  - Steve described what was in the latest IDS SNAPSHOT.  Plugin
    developers may need to update their plugins to suit. A new getLink
    call has been added. Rolf confirmed that he had no objection to the
    implementation of getLink.
  - Wayne had released the balsamiq mockups of the new TopCAT. These we
    only made available very recently and it would seem that nobody had
    examined them yet.
  - Steve explained that the batch side of the IJP had been factored out
    into a different service. Different implementaions could be written
    and the IJP would be able to make use of multiple batch services. He
    has written one for the simple unix batch/atq/atrm system. Brian R
    is working on a more serious one for IBM Platform LSF.
  - Steve having received no input on the roadmap, froze the existing
    one as the April version and produced a new draft with those things
    which had been released (even if only as SNAPSHOTs) being removed, a
    few new bits added and dates made more realistic. Tom said his
    priority was for rules controlling access to projections of the
    tables (i.e. only some attributes being available), Shelly expressed
    an interest in the import/export and Tom also said that FUSE access
    would be very useful. Some work on this has already been carried out
    by a student working for Alistair. The roadmap will be adjusted to
    address these requests, discussed by e-mail and, if agreed, the word
    “draft” removed next meeting.
  - Shelly said that she was going to NOBUGS and asked if anyone else
    was going. Steve said that he had submitted an IDS abstract and
    would be going. Brian M pointed out that it clashed with an RDA
    meeting.

# Actions

| ITEM | DESCRIPTION                                                                    | ASSIGNED |
| ---- | ------------------------------------------------------------------------------ | -------- |
| 77.0 | Check the icatgroup list to ensure that people who should be present are added | Steve    |
| 77.1 | Update the roadmap                                                             | Steve    |
| 75.1 | Consider using a config file rather than topcatadmin                           | Wayne    |
| 75.4 | Submit TopCAT requirements                                                     | Andy     |
| 74.0 | Look into JDBC connector resilience with Wildfly                               | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when it is ready                      | Condie   |
| 60.3 | Finalise a release of IJP and send a note to the mailing list                  | Steve    |
