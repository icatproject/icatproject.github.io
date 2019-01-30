---
title: Meeting 79 – 30 October 2014
date: 2014-10-30
---

# Agenda

  - Actions from meeting 78 (Steve)
  - ICAT development (Steve)
  - ICAT Manager (Christophe)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - IJP development (Brian R)
  - Installation Script (Leonardo)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Apologies:  Christophe (who tried to join but was unable), Daniel and
Alistair.

Present: Shelly, Rolf, Milan, Brian M, Brian R, Kevin, Wayne, Steve,
Matt and Tom.

  - Action 78:0 – Christophe has now made a number of releases of the
    ICAT Manager.
  - Action 78.1 – Wayne has produced some new Balsamiq mockups
  - Action 78.2 – The glassfish configuration for Oracle RAC servers is
    now part of the setup scripts.
  - Action 75.4 – Andy has submitted Use Cases for TopCAT
  - Action 60.3 – As this concerns the IJP it is being transferred to
    Brian R.
  - Steve reported that the Rolf had tried ICAT 4.4.0 and that it seems
    to work – but he had not tested the new parts (import/export and
    other restful things) .  The code is also being tested for DLS but
    other testers would be appreciated. The main issue to be resolved is
    the presence of a “role” attribute in the InvestigationGroup table.
    Rolf stated that the InvestigationGroup without a role attribute was
    useless so we must add the attribute or abandon the
    InvestigationGroup. The new agreement was to add the role and to
    change the documentation to say that if you want separate the
    authorization rules from who is actually on the proposal then you
    can use both InvestigationUser and InvestigationGroup where
    the InvestigationUser reflects the proposal and
    the InvestigationGroup is used in authorization rules.
    Otherwise InvestigationUser can be used for both purposes.
  - Steve then reported on the IDS. He has added support for archives
    organised by datafile (prompted by DLS needs and which appears to
    work well) in addition to organisation by dataset. He has also added
    a new mechanism for handling prepareData (which just keeps the
    expansion into datafile objects and triggers any restoration from
    archive) and has simplified the interface for communicating which
    datasets or datafiles to archive when main storage is running low.
     There is currently a security problem which has been explained on
    the icatgroup list. The problem is that the location field cannot be
    trusted. There are two suggested ways to address this – passing more
    information to the plugin to permit sanity checks to be made by the
    plugin or adding a cryptographic hash to the location field – or
    both. It has also been proposed to not pass the dataset.location via
    the plugin interface. Tom thought that it was probably best to
    include both solutions and nobody objected to the elimination of
    dataset.location from the plugin interface.
  - Wayne reported that TopCAT 1.12 had been released and that yesterday
    a big update to the balsamiq mock-ups had been announced. Not
    surprisingly people had not yet studied them. Steve emphasised the
    importance of making sure that these mock-ups appear to reflect what
    people really want to see.
  - Brian R reported that he had – refactored lsfbatch to use shared
    classes which ensure that all the IJP batch systems have a common
    interface. He is now considering how to select and pass datafiles
    (as well as datasets) to jobs. Wayne had suggested that it might be
    worth using balsamiq to produce a mock-up of the revised GUI.
  - Tom said that they were trialling an “auto-reduction” system with
     users next
week.

# Actions

| ITEM | DESCRIPTION                                                   | ASSIGNED |
| ---- | ------------------------------------------------------------- | -------- |
| 74.0 | Look into JDBC connector resilience with Wildfly              | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when it is ready     | Condie   |
| 60.3 | Finalise a release of IJP and send a note to the mailing list | Brian R  |
