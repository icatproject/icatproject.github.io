---
title: Meeting 105 – 23 March 2017
date: 2017-03-23
---

# Agenda:

  - Actions from meeting 104 (Steve)
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
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Jianguo, Tom Gowland, Rolf, Jody, Peter, Frazer, Milan

Apologies: Alex, Andy, Kevin, Tom Griffin, Alastair

Actions from
104

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |

Action 102.1: Rolf reported that this is ongoing and is dependent on the
work being done on the internal logging in the IDS.

Action 102.2: Brian was not present to discuss this action.

Component Development

**ICAT** – Steve reported that 8 snapshots have been released as part of
4.9. The Lucene release requires Payara and all of the other releases
support Payara as well as GlassFish 4.0. Steve also reported that the
same installation scripts from Glassfish installations can still be used
and that Payara is externally almost identical to Glassfish. Steve has
also made changes to the RESTful authenticators and notes  that if you
specify a JNDI  it will be preferred to a RESTful url. Therefore, any
configuration of the authenticators should be done with care at this
point. Rolf has messaged the group to further explore the issues that
he’s been having with installing the new releases on GlassFish 4.0.
Steve said he would look further into Rolf’s issues and try to reproduce
the errors by installing the new releases on GlassFish 4.0.

**IDS** – Steve is still awaiting a reply from Rolf regarding IDS
locking issues. Steve also suggested that Java’s own reentrantlock class
might be useful in the development of IDS. Rolf said he would look into
this. Steve reported that he has recently been looking into issues that
Diamond have been having with the IDS. The isPrepared call might take a
long time at the moment. A fix has been coded and will be available in
the next release along with  a more efficient getSize. This next release
will also use the new style property configuration files.

**PollCat** – Frazer reported that there has recently been more movement
in the staging of data onto the Scarf cluster at STFC. There will also
be further developments so that PollCat can make use of the isPrepared
call which is being introduced into the IDS.

**IDAV** – Tom Gowland reported that recent developments have been
focussed on adding a MyData view to the top level structure of IDAV.
When IDAV was given to users at ISIS to test, they reported that they
would like an easier way to get to the data that belongs to them.
Although a MyData view had been attempted before, the code needed a
general refactor to make progress possible. Tom also reported that he
has been working on trying to speed up the listing of datafiles which
takes a long time for any more than 100 files.

**TopCAT** – Jody reported that version 2.3 of TopCAt is very close to
being released. 2.3 will include a file uploader and also improvements
to pluggability and documentation. Jody has also been developing a
plugin in order to facilitate a single sign on option for ISIS. He has
also spent two days with Damien and Alex from the ESRF to introduce them
to developing their own TopCAT plugins.

**ICAT Dashboard** – Tom Gowland reported that he has recently been
helping the ESRF team to redeploy Dashboard for their facility. The
issues were initially solved by getting around the proxy at ESRF so that
Dashboard could communicate with the APIs that it needs. Tom also
reported he had been working on adding more configurability to the
Dashboard such that users can change their default home page and default
time periods that data is shown for as well amongst other options. He is
also working on making the frequency with which Dashboard talks to ICAT
configurable as well which is something the team at ESRF have suggested.

**IJP** – Alastair had sent in a report saying that what he has done
with the IJP has been on things that will enable the Octopus use of IJP
rather than central IJP functionality. Enhancements include: emptying of
cart when job is completed and improvements to the configure job
dialog. Bug fixes include enabling the detection of jobs with status
unknown, handling of orphaned jobs correctly , better failure messages
for submission failures and optional options for job provenance.

**Review of ICAT Project website** – Although unable to attend the
meeting, Andy had reported that he has started work on the review of the
website and hopes to distribute it at the start of next week.

AOB & Issues from ICAT Production Deployments

**Package Nomenclature** – Rolf has sent a mail which outlines his
proposal for defining a specific nomenclature for code packages. He
suggests that they should all be of the following initial structure:
org.icatproject.site.\<FacilityName\>. There was general agreement for
this proposal.

**Config files on GitHub** – Rolf reported that he had set up a GitHub
repository containing configuration files from different ICAT
components. He suggested that other facilities might find more examples
useful and Steve asked him to move the repository to the ICAT/contrib
repository for people to have a look and see if they find it useful.

**File uploading query** – Jianguo asked Jody whether the new file
uploader would allow a user to upload a whole folder or just individual
files. Jody replied that multiple files could be selected and added at
once but adding a folder itself would not
work.

# Actions

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |
