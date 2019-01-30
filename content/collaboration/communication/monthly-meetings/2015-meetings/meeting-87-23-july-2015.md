---
title: Meeting 87 – 23 July 2015
date: 2015-07-23
---

# Agenda

  - Actions from meeting 86 (Steve)
  - Component development
      - Waffle.io (Steve)
      - ICAT (Steve) – *Should the import/export format also be
        available in other formats such as XML, YAML and JSON.*
      - ICAT Manager
      - Python-icat (Rolf)
      - IDS (Steve)
          - FUSE (Condie)
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Wayne)
      - IJP (Brian R)
      - Installation (Steve) and revised configured SSL cifers for
        Glassfish (Kevin)
  - Googlecode migration (Steve)
      - What to do with contrib
      - Wiki – CSMD and old meeting reports
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Present: Steve, Tom , Wayne, Milan, Kevin P, Kevin M, Brian R, Alex,
Rolf and Jianguo Rao.

Action 86.0: It has been decided that Alex is to continue development of
Fuse.

Action 86.1: Tom met with the Diamond team to discuss the Globus
project. Future plans involve bringing the system on line for initial
usage.

Action 86.2: Notes and recording links from TopCAT V2 sprint review 4
and 5 have been circulated.

Action 86.3: Steve has spoken to Greg about the optimisation of their
Datasets. Greg wishes for a list of the worst offending datasets so they
can be reviewed.

Action 86.4: It has been decided that Alex will put the simple ICAT
browser into contrib.

Action 86.6: The team has explored Waffle.io. Continued usage was
recommended.

General comments:

  - Steve discussed more about the general benefits of waffle.io and how
    it can be applied to the projects that currently use GitHub.
  - On the 23rd of July Steve released ICAT and IDS 4.5.
  - Steve mentioned about the future version of ICAT 4.6. The main focus
    of this update will be extra Lucene searches for TopCat V2. Much of
    the work has been done.
  - Rolf plans to release a new version of python ICAT within the next
    week. He currently needs to test the new ICAT 4.5 before release.
  - Frazer discussed how he is currently building Globus against the
    TopCat V2 API that Wayne has provided.
  - Steve has solved several bugs to do with the Windows version of
    Smart client. Within the upcoming week Steve will have a Beta
    release for the Smart Client.
  - Kevin P talked about how WebDav is moving a long. Currently having
    issues with special characters in files names. It is currently a
    very time consuming issue.
  - Wayne discussed how there have been two sprint reviews, 4 and 5,
    since the last ICAT meeting. The 4th meeting was mainly on how items
    are selected and stored from the browsing area into a local area.
    The 5th meeting focused on the back end logic. How items are saved
    to a database and how in the future Globus  will have access to the
    tables pulled up by the IDS.
  - Brian mentioned that IJP has had a new version release with 3 new
    components: IJP.Server, IJP.Unix Batch and IJP.demo. The development
    of IJP for CLF is still in the pipeline and going well. The issue
    with dangling clients has been solved. The solution also terminates
    inactive sessions.
  - Kevin discussed the issues we are currently having with the SSL
    ciphers we use. RC4 is no longer secure and has been removed from
    the open JDK. There has also been a new release of FireFox 39 which
    has caused compatability issues with the diffie hellman cipher. This
    has stopped certain users from accessing the ICAT installations
    website.
  - Possible replacements to RC4 were discussed including one of the AES
    ciphers however issues with speed were brought up and the point
    requires further research.
  - The google code migration is nearly complete. There are a few more
    parts that need to be moved over including contrib. Different
    solutions as to where put contrib were discussed. The favourite
    option was to push all of remaining code onto a github repository
    and then trim off any code that is not relevant any more.
  - Steve has cleared up the ICAT wiki and has removed out of date
    sections.

# Actions

|      |                                                                      |            |
| ---- | -------------------------------------------------------------------- | ---------- |
| ITEM | DESCRIPTION                                                          | ASSIGNED   |
| 87.0 | Run DOI script for all recent releases.                              | Steve      |
| 87.1 | Test installation on OS X                                            | Steve      |
| 87.2 | Look into different symmetric encryption solutions.                  | Everyone   |
| 87.3 | Move contrib from google code to a suitable replacement location.    | Steve      |
| 87.4 | Collect a list of datasets that caused issues with ICAT from Diamond | Steve      |
| 87.5 | Give permission to Rolf to allow write access to ICAT repositry      | Steve      |
| 85.2 | Add a list of current sponsors to the ICAT website                   | Tom        |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                      | Christophe |
| 81.0 | Report bug in eclipselink                                            | Steve      |
| 74.0 | Look into JDBC connector resilience with Wildfly                     | Steve      |
