---
title: Meeting 04
---

# ICAT Steering Group Meeting #4

20th October 2016 17:30CET\
The Avenue Hotel, Copenhagen

Attendance

- Steve Fisher (SF), STFC, Scientific Computing
- Tom Griffin (TG), STFC, ISIS
- Andy Gotz (AG), ESRF (Chair)
- Milan Prica (MP), ELETTRA
- Shelly Ren (SR), SNS
- Silvia Da Graca Ramos (SDGR), Diamond
- Rolf Krahl (RK), HZB
- Brian Matthews (BM), STFC, Scientific Computing
- Ming Tang (MT), CSNS
- Kevin Phipps (KP), STFC, Scientific Computing (Secretary)

Apologies

- Catherine Jones, STFC, Scientific Computing

1\. Welcome

AG welcomed those present, including a new member Ming Tang from CSNS,
the China Spallation Neutron Source.

2\. Election of new SC secretary

Catherine Jones will be the new secretary. Kevin Phipps is standing in
for this meeting in Catherine's absence. No election was necessary as
STFC provides the secretary.

3\. Actions of the previous meeting

| No.  | Detail                                                                    | Resp. | Status   | Notes                                                                                                                                                                                                |
| ---- | ------------------------------------------------------------------------- | ----- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2  | Update the ToR to include a section on voting                             | TG    | Done     | TG has added something corresponding to what was discussed                                                                                                                                           |
| 2.4  | Check with CLF/LSF that they are correctly represented                    | BM    | Not done | BM will resolve this                                                                                                                                                                                 |
| 2.7  | Write a general note on criteria for membership of the steering committee | TG    | Done     |                                                                                                                                                                                                      |
| 2.10 | Write a specification of external authorization service                   | SR    | Done     | SR believes she now has a way to do this using the new rules system                                                                                                                                  |
| 2.11 | Ask communications for help to review web site                            | TG    | Done     | TG got feedback along the lines of the site needs a major redesign. The photo of ICAT people on the front page should be a screenshot of an application with the photo moved to under Communication. |

4\. Review of membership and potential new members to invite

AG has contacted Jean-Francois at ILL and believes that he still wants
to remain on the steering group for now.\
BM has changed roles and will let the steering group know if he is going
to remain a member. (ACTION)\
It was clarified that the secretary should not have a vote and thought
that this should be explicit in the TOR. (ACTION)\
AG raised the issue that it may be necessary to limit the membership of
the steering group if more facilities start using ICAT.

5\. Review of move of ICAT code to GitHub and workflow

Steve has completed the move to Github. This has been a success.\
TG asked how components move from Contrib to Core. AG suggested that the
steering group makes this decision. It was also suggested that it should
be a standard agenda item for the steering group to review Contrib and
Core.\
SR asked why the TopCAT DOI component is not in Core and SF said that it
is too STFC specific at the moment.\
It was suggested that the criteria for moving a component into Core
should be that it is written to be usable by multiple sites and is
actively being maintained.\
BM suggested moving some of the Contribs to a documentation area.

6\. Review website + documentation

There was a lot of discussion about this. The following is a summary of
the main discussion points:\
All of the facilities should provide a summary page of how they are
using ICAT. A link to their TopCAT page would be good as well. (ACTION)\
AG would like documentation to be more obvious from a higher level
rather than having to drill down into components.\
The TopCAT videos produced by Tom Gowland should be linked from the
website. (ACTION)\
The current release link should go straight to the current release
rather than displaying a long list of releases with the most recent at
the bottom.\
There was a suggestion to group related components together eg. IJP,
authenticators.\
MP suggested that a short description should be displayed next to each
component.\
It was felt that the list of current releases is too long and
potentially off-putting/daunting to new users. Maybe a smaller subset of
essential components should be presented by default.\
AG and SR offered to give feedback to SF on the website (ACTION).\
AG and RK suggested using something like Sphinx for generating
documentation and AG showed the Django website as an example of a good
website.\
It was recognised that there is potentially a lot of work involved to
redo the icatproject website. SF will wait for comments before doing
anything.

7\. Review of ICAT resources

RK said he might look into writing an OAI-PMH interface for ICAT.\
RK will put in a pull request to solve the IDS locking problem which he
discussed separately with SF.\
CSNS would like to add some data analysis capabilities to TopCAT. This
should be able to be done via plugins and MT said that they should be
able to share this.\
ELETTRA are hoping to move their code to open source but cannot commit
to anything yet. Their IT department wants to move everything (Tango
devices, GUIs, acquisition frameworks etc.) to GitHub with an open
source license but it is not official yet and will require management
approval.\
ISIS have a sandwich student (Tom Gowland) working roughly half time on
core ISIS work and half time on general ICAT components.\
SR hopes that Peter Parker is able to contribute to general ICAT
components once he completes what he is currently working on.\
AG offered to provide some examples of metadata that can be stored in
ICAT to make available on the website (ACTION).

8\. Roadmap

SF presented the roadmap which will be published on the website.

Steve has ideas for possible changes that could be made ICAT 5 such as
replacing the concept of Dataset with something else. This would all
need to be discussed and agreed because of the potential implications
for facilities already using ICAT.

RK pointed out that dropping the SOAP interface to ICAT would mean
dropping python-icat. SF said that maintaining the SOAP interface is not
much of an overhead and where possible ICAT 4 will provide both SOAP and
REST interfaces.

RK asked to have the ability to translate/map parameter names added to
TopCAT in a way that is more convenient. TG wants to see more general
improvements to parameter searching in TopCAT.

There was discussion as to whether UTF-8 is sufficient to support
Chinese and Japanese characters. The outcome was unclear.

9\. AOB.

No business

10\. Next meeting/Developer meeting

The next steering group meeting will be a virtual meeting in 6 months
time.

New Actions

| No. | Detail                                                                                        | Resp.            |
| --- | --------------------------------------------------------------------------------------------- | ---------------- |
| 2.4 | Check with CLF/LSF that they are correctly represented                                        | BM               |
| 4.1 | Let the steering group know if he is going to remain a member.                                | BM               |
| 4.2 | Update the TOR to make it explicit that the steering group secretary does not have a vote     | ??               |
| 4.3 | Provide a summary page for the icatproject website preferably containing a link to TopCAT     | AG, SDGR, SR, MT |
| 4.4 | Provide a link to the TopCAT videos from icatproject                                          | SF               |
| 4.5 | Provide feedback to SF on how to improve the website                                          | AG, SR           |
| 4.6 | Provide some examples of metadata that can be stored in ICAT to make available on the website | AG               |
