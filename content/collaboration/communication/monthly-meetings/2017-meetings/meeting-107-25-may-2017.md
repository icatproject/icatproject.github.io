---
title: Meeting 107 – 25 May 2017
date: 2017-05-25
---

#### Agenda:

  - Actions from meeting 106 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE~~
          - PollCat (Frazer)
          - ~~SmartClient (Steve)~~
          - IDAV (Tom Gowland)
      - TopCAT (Jody)
      - IJP (Brian R/Alastair)
      - ICAT Dashboard (Tom Gowland)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Review of website (Andy)
  - Next F2F Meeting
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Brian, Frazer, Kevin, Stuart Pullinger, Milan and Peter

Apologies: Rolf, Alex, Andy, Sylvie, Tom Gowland and Jody

#### **Actions from 106**

None have been addressed

#### Component Development

**ICAT** – Steve reported that he has started work on releasing those
components that have been tested on Payara; but he will not announce
until all are complete. Some problems were encountered as some
components had not been updated since the move to repo.icatproject.org.

Having tested the ICAT performance (using the DLS ingest code) on ICAT
4.6, 4.8 and 4.8, Steve found that they are all roughly the same;
however 4.9.0 is significantly slower with icat.lucene enabled and
deployed on the same machine. He will continue the investigation but
will not delay releases, though 4.9.0 will carry a warning.

**ICAT Manager** – Stuart reported that the link on icatproject.org
is broken. It will be reported.

**IDS** – Steve has not yet had time to sort out whatever is stopping
Rolf carrying out IDS development, and suggests that an independent
attempt at deployment may be informative. A number of bug fixes have
been prepared, mostly to improve performance. The behaviour of the
Oracle query planner seems to suggest that LIMIT clauses should be
avoided when dealing with large tables. The new properties regime for
the IDS requires revised versions of the plugins.

**IJP** – Brian reported that he has been trying a different IJP
configuration with the server and batch connector on different systems.
This works, but has led to small changes to ijp.demo. He has also
revised the documentation for ijp.server (though this has still to be
released).

#### **Review of Website**

Stuart reported that he has been following the instructions on
icatproject.org to install the ICAT components, and estimates he is
about half-way through. He has made copious notes on his experiences,
and will share them in due course.

#### Next F2F Meeting

Steve mentioned that we should start thinking about the next F2F
meeting; where it should be (co-located with xxx???) and what form it
should take . Steve said that he would ask Andy to take this to the
steering group.

#### AOB and Issues from production deployments

None reported. Milan and Peter may be absent for the next meeting, due
to an adjacent meeting in
Grenoble.

#### Actions

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |
| 106.1    | Produce a report detailing the suggested schema changes                                        | Steve         |
| 106.2    | Produce response to Andy’s review and an action plan to address the problems.                  | Steve         |
| 107.1    | Ask Andy to consider next F2F meeting                                                          | Steve         |
