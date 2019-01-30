---
title: Meeting 82 – 22 January 2015
date: 2015-01-22
---

# Agenda

  - Actions from meeting 81 (Steve)
  - ICAT development (Steve)
  - ICAT Manager (Christophe)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - IJP development (Brian R)
  - Installation (Leonardo, Steve)
  - Issues from ICAT production deployments (Any)
  - 2015 F2F Meeting and Steering Group Meeting at DLS (Steve, Andy and
    Alun)
  - AOB (Any)

# Notes

Present : Condie, Steve, Shelley, Wayne, Kevin P, Brian R, Tom,
Christophe, Matt, Rolf, Milan  
Apologies: Kevin Knowles, Andy

  - Action 81.1: Steve has confirmed that some work has been done in
    response to the PaNdata document. Circulation of response possibly
    deferred to the F2F meeting.
  - Action 81.2: Steve confirmed that the DLS TopCAT 2 requirements have
    been circulated.
  - Action 81.3: DLS have now been asked for a use case for the TopCAT
    API. They did not seem to appreciate that the IDS is an interface.
  - Action 81.4: Deferred to the F2F meeting.
  - Action 60.3: IJP released and the mailing list has been informed.
  - Two ICAT authenticators have been repackaged and released by Steve.
    Replaced the old authenticators and made them easier to use with the
    ICAT installer. Snapshot was not released as the new authenticators
    did not add any new functionality.
  - Steve mentioned that he is looking into making the LDAP
    authenticator work with a functional ID. This feature has been
    requested by multiple sites in the PaNdata report. Steve is waiting
    to receive input from Milan’s colleague. Steve will release a new
    LDAP snapshot when the enhancements are made.
  - Rolf had informed Steve of an authorisation issue when deleting
    items as any cascading items are also deleted regardless of the
    users permissions.
  - Christophe is in the process of developing the next release of the
    ICATManager which is to be released shortly. The new features
    mentioned include editing multiple entities at once, the navigation
    from any entity to any related entities order persistence when
    closing entity tabs.
  - IDS 1.3.0 has been released. It is able to work well with data
    stored on tape by datafile rather than dataset and the prepareData
    mechanism has been rewritten to avoid making a copy of the data to
    download later. Fix for glassfish bug that caused downloads to be
    truncated after 15 minutes has been sent out by Steve and added to
    the ICAT installer. DLS requested alternates to HTTP for downloads
    via the IDS. Steve mentioned that the alternate solutions must be
    robust for large quantities of data.
  - Wayne reported that he is still in this very early stages of
    development for TopCAT2. He is also in the process of answering
    Rolfs comments in regards to the layout design.
  - A snapshot release of the IJP is now available. The IJP components
    have been have been successfully installed on linux VM’s by two
    people so far.
  - The ICAT installer has been developed by Steve in response to a
    complaint by PaNdata. A licence has been obtained to use an
    installer generator from BitRock. The installer currently runs
    successfully on linux but has an issue regarding subprocesses on
    windows. BitRock have been informed and Steve is waiting on a
    resolution.
  - The 2015 F2F meeting and Steering Group Meeting dates have been
    narrowed down to 31st March – 2nd April at DLS. This may be reduced
    to a two day meeting with the exact dates to be confirmed. The
    meetings agenda is to be released
soon.

# Actions

|      |                                                     |          |
| ---- | --------------------------------------------------- | -------- |
| ITEM | DESCRIPTION                                         | ASSIGNED |
| 82.0 | LDAP enhancement to work with a functional ID       | Steve    |
| 82.1 | Cascading deletion authorisation bug                | Steve    |
| 82.2 | Alternate download protocols for IDS                | Steve    |
| 82.3 | Respond to comments on TopCAT 2 layout design       | Wayne    |
| 82.4 | ICAT installer windows subprocess issue             | Steve    |
| 82.5 | Release F2F Meeting agenda                          | Steve    |
| 81.0 | Report bug in eclipselink                           | Steve    |
| 81.1 | Circulate response to PaNdata document              | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly    | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when ready | Condie   |
