---
title: Meeting 83 – 26 February 2015
date: 2015-02-26
---

# Agenda

  - Actions from meeting 82 (Steve)
  - ICAT development (Steve)
  - ICAT Manager (Christophe)
  - Python-ICAT (Rolf)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - IJP development (Brian R)
  - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - 2015 F2F Meeting and Steering Group Meeting at DLS (Steve, Andy and
    Alun)
  - AOB (Any)

# Notes

Present: Condie, Steve, Christophe, Brian R, Rolf, Tom, Shelley, Nick

Apologies: Kevin Knowles, Matt, Kevin P, Wayne, Andy, Milan

  - Action 82.0: Steve is planning to proceed with development of the
    enhancement focusing on what suits the needs of ELETTRA then add
    further functionality for other sites at a later date if required.
  - Action 82.1: This issue has been marked as bug 150 and will no
    longer be tracked here.
  - Action 82.2: See under IDS development
  - Action 82.3: Layout mockups currently being updated by Wayne to
    match latest inputs from Diamond. Once the updates have been
    completed the layout mockups will be circulated to all interested
    parties for approval.
  - Action 82.4: After a lot of communication with BitRock Steve has
    established the issue to be caused by the way that Python handles
    subprocesses within Windows. Steve will add calls to the installer
    the are normally handled by the python setup script to overcome this
    issue. Currently the only component affected is the
    ids.storage\_file.
  - Action 82.5: The F2F meeting agenda has been released and the
    mailing list has been informed.
  - Action 81.1: Currently in preparation and will be circulated prior
    to the F2F meeting.
  - Steve has begun development on ICAT 4.5.0 with lucene based
    searching for use by TopCAT.
  - ICAT 4.4.0 has been found to not support selects of the form “SELECT
    a.b FROM…” where b is not a simple attribute. This was never
    documented as a feature and therefore has never been tested, however
    it used to work in versions of ICAT prior to 4.4.0. This has been
    fixed and tested in 4.5.0 and so far appears to be successful.
  - Steve may possibly release ICAT 4.5.0 without the lucene calls to
    address bug fixes in 4.4.0. The TopCAT matching lucene calls would
    then be delayed to version 4.6.0. Everyone was happy with this
    approach.
  - A new version of ICAT Manager is to be released in the upcoming
    month. There will be some small additional features and bug fixes
    but no major changes to functionality.
  - A new version (0.7.0) of Python-ICAT has been released. There is
    mostly only one change: a new module icat.query with a class Query
    have been added.  This class can be used to build ICAT search
    expressions.  Instances of the class may be used in place of search
    expression strings where appropriate.Using the Query class can
    improve readability of your Python code. Currently no plans to add
    new features to Python-ICAT or bug fixes required.
  - Version 1.3.1 of the IDS has been released. This includes a fix to a
    bug causing file handled remaining open for individually downloaded
    files.
  - Version 1.3.1 of the ids.storage\_file has been released. This
    includes a fix to to a bug in the algorithm that chooses which files
    to archive.
  - Steve is to provide a new IDS bug fix soon for an issue related the
    file checking. Currently the file that holds the last ID checked can
    be corrupted.
  - Steve, in conjunction with DLS, are currently investigating various
    methods for alternate download method for the IDS. One option being
    a new component that makes calls to the IDS via the use of the
    getLink call and then pushing the data via a choice of mechanisms.
    This may be one component or several that make use a shared library.
    Another option is a client that can be run by the user that is user
    installable and can run in the background. Steve to circulate
    diagrams outline each of the possibilities.
  - Steve found an issue when attempting to provide logging through the
    IDS plugin as it interferes with the main IDS logging. Steve
    suggested changing logging framework  as Log4J interacts badly with
    Glassfish. Tom stated that the new logging framework would be
    required to provide daily rolling log files as well as the ability
    to set the maximum size of a log file. Steve is going to test the
    use of the Java Util logging framework on the ids.storage\_file and
    this will be discussed further at the F2F meeting.
  - Agile development to be begin soon for TopCAT v2. Tom mentioned
    inviting the interested parties to the sprint reviews to get
    feedback on development.
  - A new release of the ICAT installer that is compatible with Windows
    will soon be released by Steve. Sample data will also be offered by
    the
installer.

# Actions

|      |                                                                                        |          |
| ---- | -------------------------------------------------------------------------------------- | -------- |
| ITEM | DESCRIPTION                                                                            | ASSIGNED |
| 83.0 | Circulate diagrams to showcase solutions to alternate download protocols for IDS       | Steve    |
| 83.1 | Invite customer representatives from interested facilities to TopCAT v2 sprint reviews | Tom      |
| 83.2 | Finalize TopCAT v2 layout mockups and circulate                                        | Wayne    |
| 82.0 | LDAP enhancement to work with a functional ID                                          | Steve    |
| 82.2 | Alternate download protocols for IDS                                                   | Steve    |
| 81.0 | Report bug in eclipselink                                                              | Steve    |
| 81.1 | Circulate response to PaNdata document                                                 | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly                                       | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when ready                                    | Condie   |
