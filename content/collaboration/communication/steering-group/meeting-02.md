---
title: Meeting 02
---

# ICAT Steering Committee Meeting

Minutes – 1st April 2015 – 14:00 – DLS – UK

0\. Attendance

- Brian Matthews (BM), STFC, Scientific Computing
- Tom Griffin (TG), STFC, Scientific Computing
- Andy Goetz (AG), ESRF
- Shelly Ren (SR), SNS
- Alun Ashton (AA), DLS
- Kevin Knowles (KK), STFC, ISIS
- Alistair Mills (AM), STFC, Scientific Computing
- Steve Fisher (SF), STFC, Scientific Computing

1\. Review of actions from meeting in May 2014

- Write minutes – Alistair.
- September meeting – did not happen.
- Mailing list – a list has been created.
- Discuss chairmanship with Andy – Done (By JFP).
- Survey of requirements for TopCAT – Wayne – Done.
- Roadmap feedback – Received.

It was agreed that the minutes of the Steering Committee meeting should
be open to all. They will be posted on the icatproject.org website and a
note sent to the ICAT mailing list.

2\. Election of new SC secretary

- Alistair Mills is retiring from STFC and hence the secretary role.
- Tom was proposed as the new secretary (Andy, seconded by Brian) and
  carried nem con.

3\. Review of SC terms of reference

- The terms of reference document will be added to the icatproject.org
  website (Action 2.1)
- Andy raised that the voting criteria are not stated. It was agreed
  this should be simple majority, with the chair having the casting
  vote in the event of a tie. (Action 2.2)
- Alun asked when/if should members be removed for the Steering
  committee e.g. ELETTRA. It was agreed that active involvement is
  key, but this was not clearly defined. Any partner not active for 1
  year will be reviewed by the steering committee.
- Andy to talk to Milan/ELETTRA to see if they wish to continue.
  (Action 2.3)

4\. Review of membership

- The status of CLF vs LSF (a division in an STFC department) was
  discussed. Brian is to check with CLF/LSF that they are represented
  by Rob Clarke. (Action 2.4)
- HZB – data collection will continue at the neutron source until 2019.
  Rolf is now permanent. Andy to invite HZB to join the steering committee (Action 2.5)
- PSI – The committee received a request from Leonardo Sala PSI
  requesting to join the SC with Jan Solca as representative. PSI have
  not attended monthly meetings
- Andy to email Jan/PSI welcoming them in principle – when they
  become active, including monthly meetings. This should be extended
  to all interested parties (Action 2.6)
- A general note to be written on membership of this committee (Action
  2.7)

5\. Googlecode is shutting down – where should ICAT move to?

- It was unanimously agreed to move to GitHub.
- There was a short discussion of push vs pull requests.
- The licence's ICAT is released under was queried. It is currently
  Apache v2 and BSD. There was as short discussion on whether or not
  all files have the licence in them.
- Action on Steve – move all projects to Apache v2 licence. (2.8)

6\. Roadmap update and endorsement

- as presented by Steve at the developer meeting.
- Steve to update the roadmap and dates, and circulate (Action 2.9)
- GlobusOnline was discussed and confirmed as a key requirement for
  large data transfer by Diamond and ORNL.
- Shelly queried using external authorisation mechanisms (LDAP).
  Shelly to write a specification (Action 2.10)

7\. Website future contributions

- Andy reported that things are missing or difficult to find on the
  website. He described TANGO's positive experience of getting a
  communications person involved
- Tom to ask for help from STFC comms staff (Action 2.11)

8\. Review of ICAT resources

- STFC/SCD provides the core development effort and supports STFC
  facilities : total of \~3FTEs working on ICAT related projects,
  though this includes projects to meet internal requirements for the
  facilities such as most CLF work.
- ISIS: Condie is split 50% on the ISIS pipeline , 50% on TopCATv2.
- ESRF: Christophe has provided the ICATManager and Nexus explorer. A
  permanent post would have some time to contribute to 'core' ICAT.
  ICATManager is to be moved to GitHub (under icatproject).
- HZB: Rolf has contributed PythonICAT.
- The status of Mantid was queried. It was confirmed to be continuing
  using ICAT.
- Dawn – ICAT component unsupported and not continuing.

9\. Boundaries of ICAT

- The definition of the official ICAT was discussed – where does
  contrib begin, when does a component become 'official'. (e.g.
  PythonICAT, ICATManager)
- Shelly queried if anyone used PythonICAT in production.

10\. AOB

- Brian queried the status of Wildfly support. Answer: ICAT will
  support WildFly and GlassFish later this year. Development and
  testing will focus on WildFly as the default platform.
- Brian thanked to Alistair Mill for setting up the steering committee
  and all his efforts on ICAT.
- Alistair reiterated the issues people have with the website and
  documentation, and getting started when it is installed – in his
  view this is the main issue ICAT needs to solve. Andy said this not
  the only problem. The gap between what they have and what ICAT does
  is too big – no metadata and no usecase.
- Shelly said it would help people getting started to provide a
  generic Nexus ingestor.

Actions:

| No.  | Sec. | Detail                                                                                       | Resp. |
| ---- | ---- | -------------------------------------------------------------------------------------------- | ----- |
| 2.1  | 3    | Add the steering committee terms of reference to the icatproject website                     | TG    |
| 2.2  | 3    | Update the ToR to include a section on voting                                                | TG    |
| 2.3  | 4    | Ask ELETTRA if they wish to continue on the Steering committee                               | AG    |
| 2.4  | 4    | Check with CLF/LSF that they are correctly represented                                       | BM    |
| 2.5  | 4    | Invite HZB to join the steering committee                                                    | AG    |
| 2.6  | 4    | Contact PSI, DESY, ALBA, MAXLab and ESS about their involvement in the project and committee | AG    |
| 2.7  | 4    | Write a general note on criteria for membership of the steering committee                    | TG    |
| 2.8  | 5    | Move all ICAT projects to Apache v2 licence and GitHub                                       | SF    |
| 2.9  | 6    | Update the roadmap and dates, and circulate                                                  | SF    |
| 2.10 | 6    | Write a specification of external authorization service                                      | SR    |
| 2.11 | 7    | Ask communications for help to review web site                                               | TG    |
| 2.12 | 7.   | Arrange the next meeting for 6 months time (tele/video-conference)                           | TG    |

Next meeting: 6 months – TC/VC

AG: ICAT at the next NOBUGS: Autumn 2016 at ESS
