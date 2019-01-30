---
title: Meeting 106 – 27 April 2017
date: 2017-04-27
---

# Agenda:

  - Actions from meeting 105 (Steve)
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
      - Multi-container support (Steve)
      - ~~Installation (Steve)~~
      - Review of website (Andy)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Jody, Sylvie, Frazer, Kevin, Brian, Tom Gowland, Alex,
Rolf, Milan

Apologies: Andy

Actions from
105

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |

Action 102.1: Rolf reported that he was awaiting advice from Steve on
running Steve’s test suite. The proposed modification is pending on
that.

Component Development

**ICAT** – Steve reported that Rolf has now successfully installed the
new ICAT components for Payara and that he will now be happy to release
4.9.0.  Steve went on to report that he has developed a solution to
‘location views’ whereby it is possible to ask any node what is
beneath it. This should make WebDav a lot more efficient. Steve is
investigating an issue that Diamond have discovered whereby ICAT 4.8.0
appears to be slower than 4.6.1 and that he is also writing some tests
to avoid this in the future. With regards to the possible schema change
that Steve has mentioned on the ICAT Group, there is going to be a
document which will outline all of the changes. This will ensure that
any elements that are unused in the schema (be it relationships,
entities etc…) are removed. There is also a new idea that would be
useful to Kevin whereby datafiles could be put directly into the
investigation level through the use of nested datasets.

**Python-ICAT** – Rolf reported that he was still awaiting ICAT 4.9.0
and that he may soon release 0.13. Steve asked if Rolf was planning a
1.0 release and Rolf replied that the only thing that he wanted to add
before that stage would be more thorough documentation.

**IDS** – Steve reported that he wants to implement the new locking and
this is awaiting communication between Rolf and Steve about the
test-suite. Steve also mentioned that 1.7.1 should be releasing shortly.
Brian reported that part of the work he is doing for Octopus might make
use of CEPH storage. This will mean developing an IDS storage plugin for
use with Amazon.

**IDAV** – Tom Gowland reported that he has completed the work that he
mentioned in the last meeting. This involved adding a MyData view at the
top level to allow for easier browsing to datafiles that you are
associated with. Tom also reported that he has managed to implement
changes that will warrant a slight speed increase in folders with large
amounts of datafiles. However, he believes that Steve’s implementation
of the location views will make this redundant in time. Tom also said
that there is now more work to be done on making a more universal system
that can be used at any facility with an ICAT.

**TopCAT** – Jody reported that he has been working on a prototype for
Data Analysis as a Service which makes use of TopCAT. The prototype
allows users who are logged into TopCAT to see a ‘My Machines’ page
where they can create and share their virtual machines with other users.
As well as this, Jody reported that he will soon be releasing TopCAT 2.3
where he has still to implement DOI features and remove ISIS and Diamond
specific elements.

**IJP** – Brian reported that he has made a change to the IJP servers
such that they keep sessions alive when jobs are queued. This is mainly
to help users of the command line client (as the GUI will keep your
session alive anyway). Brian is also going to be revisiting the problem
of having a platform LSF connector for STFC’s SCARF cluster.

**Dashboard** – Tom Gowland reported that he has been working on adding
more configurability to Dashboard. He also mentioned that he had talked
to Steve about a potential release although they have not discussed it
since.

**Multi-Container Support** – Steve had an email from Andy who was
wondering if ICAT was moving away from supporting GlassFish. Steve
reported that he wants ICAT to be able to run on both WildFly and
GlassFish (soon to be Payara). Steve went on to say that now setup
scripts aren’t reliant on being in a certain folder, WildFly support
should be made easier. Kevin asked whether we should be supporting both
containers if no one wanted to user WildFly. Steve replied that he
thought Alex would prefer to use WildFly and that the overhead of
testing both containers was not large. Steve also thought that testing
for two containers would add more robustness to the code.

**Review of Website** – Andy has produced a detailed report. Steve
reported that there will soon be a new employee starting work at RAL
(Stuart). The plan is for Stuart to install ICAT from scratch only using
the documentation available to see which parts of the process can be
most difficult to deal with. This should give a good idea of the
consistencies between Andy’s report and a real world scenario.

AOB & Issues from ICAT Production Deployments

**Diamond ICAT failure** – Steve reported that on the previous day, the
Diamond ICAT had stopped working with some EJB exceptions. The solution
in the end was to redeploy ICAT. The cause is still unknown.

**High Swap Space Usage** – Kevin reported that many of his machines
which hosted parts of the ICAT family were running a lot of swap space.
He has had the memory increased on these machines and yet they still run
a high amount of swap. Steve hopes that a move to Payara will fix these
kinds of
problems.

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |
| 106.1    | Produce a report detailing the suggested schema changes                                        | Steve         |
| 106.2    | Produce response to Andy’s review and an action plan to address the problems.                  | Steve         |
