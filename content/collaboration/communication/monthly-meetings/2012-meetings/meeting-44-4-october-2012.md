---
title: Meeting 44 – 4 October 2012
date: 2012-10-04
---

### Agenda 44

  - Actions from the meetings 42 and 43 (Alistair/Steve)
  - Report on the ICAT meeting at Nobugs2012 (Kevin)
  - ICAT 4.2.1 – Status (Steve)
  - Plans for ICAT 4.3 (Tom)
  - Update from PaN-data (Milan/George)
  - Deployment of ICAT 4.3 for DLS (Ghita)
  - Deployment of ICAT 4.3 for ISIS (Tom)
  - Deployment of ICAT 4.2 for CLF (Alistair)
  - Report on visit to Australia Synchrotron (Alistair)
  - AOB – Nicola and Shelly

### Attendance 44

 

|      |                          |           |         |           |
| ---- | ------------------------ | --------- | ------- | --------- |
| Init | Name                     | Institute | Present | Apologies |
| AM   | Alistair Mills           | STFC eSc  | \+      |           |
| AW   | Antony Wilson            | STFC eSc  | \+      |           |
| GKM  | Ghita Kouadri Mostefaoui | Diamond   | \+      |           |
| KP   | Kevin Phipps             | STFC eSc  | \+      |           |
| MP   | Milan Prica              | ELETTRA   | \+      |           |
| NB   | Nicola Bessone           | ESRF      | \+      |           |
| SF   | Steve Fisher             | STFC eSc  | \+      |           |
| SR   | Shelly Ren               | ORNL SNS  | \+      |           |

 

 

 

### Notes 44

|      |             |                    |         |           |
| ---- | ----------- | ------------------ | ------- | --------- |
| Init | Name        | Institute          | Present | Apologies |
| MG   | Mark Green  | Tech-X             |         | \+        |
| TG   | Tom Griffin | STFC ISIS Facility |         | \+        |

Kevin reported that the meeting at NOBUGS2012 had gone well and that the
materials from the presentations are on the wiki for download.

Steve reported that ICAT 4.2.1 has been available for two weeks, and
that it has been installed on pre-production service for CLF at RAL.

As Tom was not present, discussion of ICAT 4.3 is deferred to the next
meeting.

Milan reported that the
PanData[?](https://code.google.com/p/icatproject/w/edit/PanData) review
is in Brussels on 26-27/11. He would like to report that the Service
Verifications have started and that there are six organisations
participating. He also reported that there is a deliverable due in
December on the progress of the deployments. Alistair reported that we
would visit ILL/ESRF on 18-19/10 and that the first Service Verification
should take place around 3 November 2012.

Ghita reported that there is a meeting scheduled for 11/10/12 about the
migration to ICAT 4.3. There is now a test server in DLS running 4.2,
but there is no data available. DLS is planning to migrate to ICAT 4.3
during the next shutdown period at the beginning of December 2012.

As Tom was not present, there was no discussion about the deployment for
ISIS.

Alistair reported that a pre-production server is running ICAT 4.2 for
CLF and that migration to ICAT 4.3 will happen in December 2012.

Alistair reported that he had visited the Australian Synchrotron in
Melbourne. the data catalog uses Tardis and the development work is done
by a group in Monash University. They are interested in integrating
Tardis with Pandata using Topcat. During 2013, the lead software
engineer for this work will visit RAL to work on a prototype
implementation.

Nicola reported that work on installing ICAT 4.2.1 was in progress at
ILL and ESRF.

Shelly reported that she added the following two modules to the icat
project contrib repository:

1\. icat-rest-ws is a java based restful web service that retrieves
certain metadata with open access such as runs proposals for a given
instruments, runs for a given proposal, and file locations of a given
run etc.. Tom documented a use case note
at:<http://code.google.com/p/icatproject/wiki/AnonAccessToMetadata>

2\. ingestNexus python script would read a Nexus file, parse metadata,
create ICAT client objects, and calling ICAT server for cataloging. I
plan to add more comments to the readme file of this module to explain
what it does and how it works.

### Actions 44
