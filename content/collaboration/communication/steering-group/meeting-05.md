---
title: Meeting 05
---

# ICAT Steering Group Meeting #5

21st November 2017, 3pm  Rutherford Appleton Lab, STFC

Attendance

- Andy Gotz (AG), ESRF (Chair)
- Suart Pullinger (SP), STFC, Scientific Computing
- Tom Griffin (TG), STFC, ISIS
- Shelly Ren (SR), SNS
- Rolf Krahl (RK), HZB
- Brian Matthews (BM), STFC, Scientific Computing
- Alun Ashton  (AA), Diamond
- Gordon Brown (GB), STFC, Scientific Computing
- Catherine Jones (CJ), STFC, Scientific Computing (Secretary)

Apologies

- Milan Prica (MP), ELETTRA

1\. **Welcome & Agree agenda**

AG welcomed those present. The proposed agenda was agreed.

2\. **Minutes of the previous meeting**

These were agreed. They are available from
[/collaboration/communication/steering-group/meeting-04](/collaboration/communication/steering-group/meeting-04)

**2.1 Review of actions**

| No. | Detail                                                                                        | Resp.            | Status                                                                                      | Notes                                                              |
| --- | --------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 2.4 | Check with CLF/LSF that they are correctly represented                                        | BM               | Completed They were happy for representation through STFC Facilities Programme Manager (GB) |
| 4.1 | Let the steering group know if he is going to remain a member.                                | BM               | Completed BM stays as a non-voting member to represent corporate memory                     |
| 4.2 | Update the TOR to make it explicit that the steering group secretary does not have a vote     | CMJ              | Ongoing CMJ taken this action and will amend ToRs                                           |
| 4.3 | Provide a summary page for the icatproject website preferably containing a link to TopCAT     | AG, SDGR, SR, MT | Superseded and thus closed                                                                  | Work on new website/documentation means this is no longer relevant |
| 4.4 | Provide a link to the TopCAT videos from icatproject                                          | SP               | Ongoing Action                                                                              | transferred to SP and will be done as part of new website          |
| 4.5 | Provide feedback to SF on how to improve the website                                          | AG, SR           | Completed                                                                                   | Feedback being incorporated in new website work                    |
| 4.6 | Provide some examples of metadata that can be stored in ICAT to make available on the website | AG               | Ongoing                                                                                     | Will be done as part of new website                                |

3.  **SC Membership review**

No new members planned.

4.  **GitHub Repositories review**

The move to GitHub was considered a success and was working well.  There
was a discussion about how to distinguish projects in contrib and core.
It was agreed that projects in core should be used by more than one
site and are actively maintained. Moves from contrib to core shall be
recommended by the developer(s) and approved by the Steering Committee.

Active maintenance includes working on high priority bugs and formal
developer workflows.

**ACTION 5.1:** Produce contrib rules/guidelines (SP)

**ACTION 5.2** Review the settings for projects currently in
Contrib/Official and propose changes (SP & CJ)

5.  **Component Review**

It was agreed that it is in the interests of the community to have an
active developers collaboration.  For components which are only used &
developed at one site, then they make decisions based on listening to
the community (collaboration meetings). For components that have more
than one contributor, then there needs to be a more formal process with
the SC responsible for any resolution of disagreements.

**ACTION 5.3** Document the process for collaboration (SP & CJ)

| Component                                                                 | Comment                                                                                                                                                                    | Steward                              |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Authentication                                                            | All sites need to implement this for their own needs. <br />There are example/reference ones in the ICAT project. These are considered to be part of the core ICAT project | STFC – SP                            |
| ICAT Server <br /> Including <ul><li>ICAT-Client</li><li>Lucene</li></ul> | STFC is currently the sole site developing this                                                                                                                            | STFC – SP                            |
| IDS client, plug-in & server                                              | Noted concerns from Rolf’s boss regarding liability but agreed covered by Apache licence                                                                                   | HZB – RK <br /> Secondary STFC – SP  |
| IJP                                                                       | Noted that this should probably move to contrib following review                                                                                                           | n/a                                  |
| TopCat                                                                    | ESRF keen to collaborate here                                                                                                                                              | STFC – BR<br />Secondary ESRF – Alex |

There was then a discussion about eLog notebooks and the links to ICAT.

**ACTION 5.4** Report back to SC on investigations into possible tools &
approaches (AG)

6.  **Website review**

The SC noted the plans SP had put forward for refreshing the website.
Noted that using Markdown means it would be possible to port the revised
website to another provider.

Agreed that other sites would have the opportunity to comment once the
site is ready & content moved

**ACTION 5.5** STFC to ask for feedback once website is ready for launch
(SP)

7.  **Documentation review**

The SC noted the good start with the Documentathon running
simultaneously with the SC meeting. It was suggested that the monthly
collaboration meeting would be a good place to review progress.

It was acknowledged that this is a significant piece of work.

It was suggested that there should be more time in the next face to face
meeting for a documentation sprint

**ACTION 5.6** Consider further documentation sprints on the agenda of
the next meeting (RK & SP)

8.  **Review of ICAT resources**

AG started the discussion on this topic with a reminder that to survive
we need to grow.

**ACTION 5.7** Contact the CSNS to re-engage with them (GB)

ESRF are able to contribute 1.5 FTE to the development.

DLS 1.2 (more operational than development)

ISIS 1 FTE (split 50-50 operation/development

HRZ 1 FTE

STFC 3-4 FTE (although currently there are vacancies following staff
movements)

SR noted that there is a steep learning curve for using ICAT and
suggested using Docker for deployment. The issue with the metadata being
collected changing causes issues with using ICAT.

There was a discussion about EC requirements to hold data for at least
10 years and to comply with the FAIR principles. AG noted that EOSC is
mainly about data.

9.  **Roadmap**

Points discussed in the meeting included:

- the observation that the ICAT approach to parameters is not flexible
  enough
- The schema might benefit from a review, especially around datafiles
  in the RDBMS and consideration of scaling issues and new technology
- Further investigation of ONCat (see section x) and SCICat
- Need to signal high priority of blocking issues that need to be
  addressed

It was agreed that SP would consolidate the suggestions made by Steve
Fisher and the general tickets into a new roadmap.

**ACTION 5.8** Share access to ONCat with the collaboration (SR)

**ACTION 5.9** Share high priority or blocking issues (via tickets) (All
sites)

**ACTION 5.10** Establish a new roadmap (SP)

10. **New projects**

SR updated the SC on a new project ORNL are working on called ONCat.
They have been working on data management/reduction with the HFIR
(<https://neutrons.ornl.gov/hfir> ). This has 12 instruments and 30
years of data. There is a challenge to use ICAT for the metadata as the
approach to parameters is too flat a structure and there is not enough
consistency in parameters between instruments.  The metadata parameters
change between run cycles as well as instruments. It is difficult to get
metadata out of ICAT. They are looking at MongoDB & elasticsearch  and
gained flexibility and performance using this approach & technology and
they have developed ONCAT (Oakridge Neutron Catalogue).  This has an API
and there are several different clients. They have ingested all
experimental data. This enables google-like searches and thumbnail
displays.

AG asked if it was going to replace ICAT. SR responded that they are
both running and ONCat is not in production.

SR reported that there was also US based work on materials data facility
(U Chicago) and Argonne National Lab ran a hackathon on commonality in
data management.

PSI are using similar technology in SCICat for the ESS and Max IV
(scicatproject.org)

DLS have additional resource through the INSTRUCT project for
prototyping, for similar requirements as the ICR discussion in the main
meeting.  They have also submitted to SRI and Mark Basham will be
attending the conference/meeting in Japan.

11. **AOB**.

RK noted that the next RDA meeting is in Berlin in March.

12. **Next meeting**

The next steering group meeting will be in Berlin, colocated with the
RDA meeting and the workshop on Scientific Data Management for Photon
and Neutron Facilities. The workshop will be on 19 and 20 March at HZB,
see \[1\] for details. RK has scheduled the SC meeting for Tuesday
afternoon after the workshop. (The workshop is planned to end on 20
March 15:00, a room for the SC from 14:00 -- 17:00.)

\[1\]:
<https://www.helmholtz-berlin.de/events/scientific-data-management/>

Noted that the next NoBugs meeting is in the autumn in the US

There is an expectation that sites will send deputies if main
representative not able to attend. AA apologised in advance for not
being able to attend the next meeting

**ACTION 5.11** Ensure there is remote participation available for the
Berlin SC meeting (RK)

**New Actions**

| **No** | **Description**                                                                     | **Resp**  |
| ------ | ----------------------------------------------------------------------------------- | --------- |
| 5.1    | Produce contrib rules/guidelines                                                    | SP        |
| 5.2    | Review the settings for projects currently in Contrib/Official and propose changes  | SP & CJ   |
| 5.3    | Document the process for collaboration                                              | SP & CJ   |
| 5.4    | Report back to SC on investigations into possible tools & approaches for eLog books | AG        |
| 5.5    | STFC to ask for feedback once website is ready for launch                           | SP        |
| 5.6    | Consider further documentation sprints on the agenda of the next meeting            | RK & SP   |
| 5.7    | Contact the CSNS to re-engage with them                                             | GB        |
| 5.8    | Share access to ONCat with the collaboration                                        | SR        |
| 5.9    | Share high priority or blocking issues (via tickets)                                | All sites |
| 5.10   | Establish a new roadmap                                                             | SP        |
| 5.11   | Ensure there is remote participation available for the Berlin SC meeting            | RK        |
