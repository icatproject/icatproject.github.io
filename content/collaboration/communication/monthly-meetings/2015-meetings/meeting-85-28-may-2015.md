---
title: Meeting 85 – 28 May 2015
date: 2015-05-28
---

# Agenda

  - Actions from meeting 84 (Steve)
  - Component development
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
  - Migration to git/github (Steve)
  - RoadMap (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Present : Condie, Steve, Tom G, Wayne, Milan, Kevin P, Brian R, Jianguo,
Andy, Frazer

Apologies: Rolf

  - Action 84.0: Jianguo has been invited to and is currently attending
    the monthly meetings.
  - Action 84.1: Steve has circulated the details of the book to the
    group.
  - Action 84.2: The TopCAT V2 sprint reviews have been scheduled with
    one having taken place.
  - Action 84.3: Steve has created a backup of the SVN repository.
  - Action 84.4: Steve has updated the roadmap (Discussed in agenda).
  - Steve is beginning to finalising ICAT 4.5 with only minor
    outstanding bugs to be fixed before release. Lucene has been removed
    from the 4.5 release.
  - A new version of python-icat has been released. The source
    repository of python-icat has been moved to GitHub.
  - Frazer informed the group that the work on Globus Transfer has
    resumed with PAM authenticators being built to work with ICAT.
  - Kevin reported that the Artemis version of WebDAV is progressing
    well with a pre-production system being launched within the upcoming
    weeks. The current version has been speed tested and is to undergo
    resilience testing before being pushed to pre-production. Kevin also
    mentions that once stable in production on Artemis is should only be
    a further few weeks until a general version is released.
  - TopCAT V2 has just entered Sprint 1 after a Sprint review with the
    product owners and users. Wayne mentioned there was a lot of
    positive feedback and that new requests have emerged from the Sprint
    review. Wayne also mentioned that there is a live working test
    version for people to use. TopCAT V2 is expected to be rolled out
    for all sites by the end of the summer.
  - Brian informed the group that a login dialog created for IJP
    AngularJS GUI. He also mentioned that there has been interface
    changes between the IJP server and the batch connectors. Work is
    ongoing to prepare the installation of the IJP on CLF systems, with
    it currently running on two test VM’s. Brian is also investigating
    the current configurations on the CLF machines and how they interact
    with the IJP changes. Brian mentioned he has also been working on
    converting CLF job scripts to work with the new options passing
    mechanism; this still requires testing.
  - Steve is looking into porting the ICAT installer to work with Mac
    OS. Steve mentioned he now has a machine to begin this development
    but is yet to start.
  - Steve informed the group that the migration of the ICAT source code
    from googlecode to GitHub has begun with most components migrated
    successfully. Steve mentioned that the issues and wiki pages do not
    migrate in the same way and proposed several solutions on how this
    can be achieved. Whether or not the wiki and issue pages should live
    on the repos of each component or in a stand alone repo needs to be
    investigated further before a decision is made.
  - The roadmap has been circulated to the Steering group and group
    members for feedback. A website review is to be added to the roadmap
    at the suggestion of Andy.
  - The ESRF are to continue using ICAT alongside ISPyB and are planning
    to roll out ICAT for use on all beamlines.
  - The ESS are committed to using ICAT and wish to hold talks regarding
    the work they would like to see surrounding ICAT.

This was Condie’s last ICAT meeting. He was thanked for all his
contributions to the
project.

# Actions

|      |                                                                              |            |
| ---- | ---------------------------------------------------------------------------- | ---------- |
| ITEM | DESCRIPTION                                                                  | ASSIGNED   |
| 85.0 | Circulate notes and recording link from TopCAT V2 sprint review              | Tom        |
| 85.1 | Circulate link and instructions for using the live test version of TopCAT V2 | Wayne      |
| 85.2 | Add a list of current sponsors to ICAT website                               | Tom        |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                              | Christophe |
| 85.4 | Add ESS to the steering group                                                | Andy       |
| 85.5 | Ask Mantid for information on how they migrated wikis and issue to GitHub    | Tom        |
| 82.0 | LDAP enhancement to work with a functional ID                                | Steve      |
| 81.0 | Report bug in eclipselink                                                    | Steve      |
| 74.0 | Look into JDBC connector resilience with Wildfly                             | Steve      |
| 61.1 | Put the simple ICAT browser into contrib when ready                          | Condie     |
