---
title: Meeting 120 – 27th September 2018
date: 2018-09-27
---

#### Attendees:

Sylvie (SR), Stuart (SP), Alex (AdM), Maxime (Max), Rolf (RK)

#### Apologies:

George Christian, Catherine Jones, Brian Ritchie, Chris Prosser

#### ICAT Components:

##### ICAT Server (SP & RK):

- SP working on search replacement component
  - first job to document API nearly done
  - next job: write tests

**AdM**: Why index on Datafiles at all?

**SR**: Users need to be able to find files by name.

- RK: ICAT Schema changes nearly done. Only need to add tests.
- RK: ICAT test suite does not run -- hard-coded to Steve Fisher's
  computer. See
  [\#205](https://github.com/icatproject/icat.server/issues/205) and
  [\#206.](https://github.com/icatproject/icat.server/pull/206)

##### Topcat (BR)

Released 2.3.2.2 in August: bugfix release for DLS. Adds configuration
to show/hide the Search tab.  As indexing is disabled in DLS, Search
doesn't work, so DLS asked for the Search tab to be removed. In this
release, Search is removed by default; this meant that it could be
installed (and Search removed) without having to change topcat.json.

Whether a similar change is required to the topcat master (2.4.x)
depends on whether or not a solution is found to the DLS indexing
problem before DLS is ready to upgrade topcat to 2.4.x.

##### **IJP (BR)**

Nothing (interesting) to report. Octopus work is being re-planned; may
be more interested in DAaaS than in the IJP.  Current Octopus
development VMs are due to be retired in October, I am working on
creating replacements in the new Cloud service -- assuming they will
still be wanted!

The Scarf team plan to take over the HTCondor-Slurm work; I'm more than
happy, provided that the IJP can use whatever they do!

**IDS (RK) and Python ICAT (RK)** -- Nothing to report.

#### Site Updates

**STFC (SP)**

- New staff starting
  - October: Service managers
  - November: Developer
- No one from STFC is attending NoBugs 2018
- Consultants will start to look at the DLS infrastructure (including
  their use of ICAT) from October.

**Diamond (SR)**

- Archive has now reached 15 Petabytes!
- A new directory structure -- by village -- has been implemented.
  - (SP: this had no real impact on ICAT)
- Now using ActiveMQ in the ingest workflow.

**ESRF (AdM)**

- The replacement for TopCat (eDataPortal -- built using React) is
  waiting to be put into production.
- It includes an eLogBook tab which receives notifications from
  beamlines. Built using MongoDB.
- Action: AdM to demo it at the next meeting.

**HZB (RK)** -- Nothing to report

#### AOB

**INFRAEOSC-5 ExPanDS (RK)**

Interesting proposal. Work package 3 is on metadata catalogues.

Action: SP to discuss STFC's involvement with Brian Matthews.

**AdM: What do other sites do when an investigation wants to have 2
datasets with the same name, eg. 'Test'?**

SR: DLS users cannot choose a dataset name -- but they can create a
folder which becomes the dataset name.

RK: HZB has 2 instruments connected to ICAT. For each scan/run, a new
scan/run number is created which becomes the dataset name.

(Note from SP: the conclusion was that other sites did not have this
problem as either a) users could not choose a dataset name (HZB) or b)
users were forced to create a unique dataset name (DLS)).

**AdM: Could we store the file count and size in the Dataset and
Investigation?**

AdM: At ESRF, all files in a Dataset are ingested at the same time and
not updated so the calculation is easy.

SR: suggested this to Steve Fisher but he was against the idea.

RK: we may have to think about who/what has write access to
investigation parameters. At HZB, the ingester does not have this
permission. Retrieving the file count and size of a Dataset are
implemented in the IDS.

#### Actions

|       |                                                                |                  |
| ----- | -------------------------------------------------------------- | ---------------- |
| 113.2 | Organise a meeting for the discussion of a Topcat replacement  | Catherine Jones  |
| 119.1 | Review and update instructions for Apache proxy configuration. | SP and RK        |
| 120.1 | Alex to demonstrate ESRF's replacement for TopCat.             | Alex de Maria    |
| 120.2 | Stuart to speak to Brian Matthews about ExPanDS                | Stuart Pullinger |

Next meeting scheduled for Thursday 25th October 3pm UK time.
