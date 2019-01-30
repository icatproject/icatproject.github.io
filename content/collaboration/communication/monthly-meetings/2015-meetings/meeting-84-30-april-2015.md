---
title: Meeting 84 – 30 April 2015
date: 2015-04-30
---

# Agenda

  - Actions from meeting 83 (Steve)
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

Present: Condie, Steve, Tom, Wayne, Kevin P, Brian R, Fazer, Rolf, Milan

Apologies: Andy

  - Action 83.0: The IDS alternate download protocol diagram was
    replaced by a presentation shown at the F2F meeting.
  - Action 83.1: Customer representatives from facilities invited to
    TopCAT v2 sprint review meetings with overall positive feedback.
  - Action 83.2: TopCAT v2 layout mockups finalised and circulated.
  - Action 82.2: Not being kept as a specific action and is being
    replacement by on going discussions for each related component in
    the agenda.
  - Action 81.1: Response to PaNdata document has been circulated.
  - Since the previous meeting Steve informed the group that a few bugs
    have been brought to light in the latest release of ICAT. The first
    being that the export call of the ICAT RESTful interface does not
    always produce properly formatted output. Issues surrounding the
    installation of ICAT with recent versions of Java were also reported
    by Rolf and Tom.
  - Rolf informed the group that a new release of Python-ICAT is
    imminent, given that no new bugs or feature requests emerge. The
    release will include example scipts for using the ICAT import and
    export with REST.
  - ICAT-FUSE is still being developed with work still required to find
    a fix to how Fuse handles ‘move to recycle bin’ in nautilus.
  - Kevin mentioned that a functioning version of WebDAV will be put
    into production by Artemis over the next month or so. A full version
    that can be used by different ICAT implementations will be looked at
    after the Artimus implementation is deployed.
  - Wayne mentioned that TopCAT v2 development is underway with the
    login/authentication, meta data panel engine being complete.
  - An AngularJs version of IJP is currently being developed by Brian.
  - Shelley has requested the Mac Os compatibility be included in the
    ICAT Installer. Steve to look into the complexity of this before
    deciding whether or not to proceed with adding this functionality.
  - Steve spoke about some of the current work he is undergoing to
    migrate the ICAT codebase away from google code to Git. The existing
    SVN repositories need to be split into multiple repositories in
    order to match the definition of a repository in Git. This will also
    require some manual cleanup of branches and tags. The wikis and
    issues to also be manually moved to Git/Github, however issues will
    not retain its history to simplify this process. Total migration is
    still a few months away from
completion.

# Actions

|      |                                                     |          |
| ---- | --------------------------------------------------- | -------- |
| ITEM | DESCRIPTION                                         | ASSIGNED |
| 84.0 | Invite Jianguo to the monthly ICAT meetings         | Steve    |
| 84.1 | Circulate Git book details                          | Steve    |
| 84.2 | Schedule TopCAT v2 sprint review meetings           | Tom      |
| 84.3 | Create backup of SVN                                | Steve    |
| 84.4 | Update RoadMap                                      | Steve    |
| 82.0 | LDAP enhancement to work with a functional ID       | Steve    |
| 81.0 | Report bug in eclipselink                           | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly    | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when ready | Condie   |

[Edit](https://icatproject.org/wp-admin/post.php?post=522&action=edit)
