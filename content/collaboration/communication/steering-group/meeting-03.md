---
title: Meeting 03
---

# ICAT Steering Group Meeting #3

9th December 2015 15:00GMT\
Video/Phone meeting (Bluejeans)

Attendance

- Steve Fisher (SF), STFC, Scientific Computing
- Tom Griffin (TG), STFC, Scientific Computing
- Andy Goetz (AG), ESRF
- Milan Prica (MP), ELETTRA
- Shelly Ren (SR), SNS
- Alun Ashton (AA), Diamond

Apologies

- Rolf Krahl, HZB
- Brian Matthews, STFC, Scientific Computing

1\. Welcome
AG welcomed those present. Apologies were received from Rolf Krahl and
Brian Matthews.

2\. Actions of the previous meeting

| No.   | Detail                                                                                       | Resp. | Status                                                       |
| ----- | -------------------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------ |
| 2.1   | Add the steering committee terms of reference to the icatproject website                     |  TG   |  Done                                                        |
| 2.2   | Update the ToR to include a section on voting                                                | TG    | Not Done                                                     |
| 2.3   | Ask ELETTRA if they wish to continue on the Steering committee                               | AG    | Done- Milan is ELETTRA's representive                        |
| 2.4   | Check with CLF/LSF that they are correctly represented                                       | BM    | TG to discuss with BM and CLF                                |
| 2.5   | Invite HZB to join the steering committee                                                    | AG    | Complete – Rolf is HZB's representative                      |
| 2.6   | Contact PSI, DESY, ALBA, MAXLab and ESS about their involvement in the project and committee | AG    | Done.                                                        |
| 2.7   | Write a general note on criteria for membership of the steering committee                    | TG    | Not done                                                     |
| 2.8   | Move all ICAT projects to Apache v2 licence and GitHub                                       | SF    | Done                                                         |
| 2.9   | Update the roadmap and dates, and circulate                                                  | SF    | Done                                                         |
| 2.10  | Write a specification of external authorization service                                      | SR    | Not done                                                     |
| 2.11  | Ask communications for help to review web site                                               | TG    | SCD has recruited an impact manager. TG to discuss with them |
| 2.12  | Arrange the next meeting for 6 months time (tele/video-conference)                           | TG    | Done                                                         |

3\. Review of membership\
No business

4\. Status of Components\
See Steve's slides\
Shelly asked about Dashboard – management information\
Shelly asked about Glassfish and Wildfly – answer – both will be
supported.

5\. Roadmap\
See slides\
Move to Wildfly/hibernate testing revealed issues in the existing code.

**Facility requests/comments**

Shelly: SNS is working on automatic roll-out via Puppet to help ease
rollout. Will be shared via GitHub.\
Tom – We should consider the role of Docker in releasing and running
ICAT.\
Andy – data policy will be rolled out at ESRF; Request to embed DOI
issuing in ICAT/TopCAT.\
Shelly – documentation is a major issue;\
Andy – suggested a  workshop could spend 1/2 day fixing documentation;

Globus: Tom explained Globus; Andy reported that CERN move all data with
FTS3 and it could be integrated in ICAT, it is percieved to be even
easier to use than Globus.

Cloud/Docker – it is possible to build whole VM, but fairly
uninteresting. It is better to package individual components – could
lead to a more scalable system.\
Shelly – install has been too fragile and unclear errors in the past.

7\. Website\
ICATProject.org had been 'hacked' The root cause was probably simply a
weak password. Steve has since hardened  security significantly.

8\. Review of ICAT resources

No business

9\. AOB.

No business

10\. Next meeting/Developer meeting\
It was agreed that the next SC meeting should be face-to-face and
 Colocated with NoBUGS2016 in Copenhagen.

A developer meeting will be held at the same time.

New Actions

| No.  | Detail                                                                    | Resp.   |
| ---- | ------------------------------------------------------------------------- | ------- |
| 2.2  | Update the ToR to include a section on voting                             | TG      |
| 2.4  | Check with CLF/LSF that they are correctly represented                    | TG & BM |
| 2.7  | Write a general note on criteria for membership of the steering committee | TG      |
| 2.10 | Write a specification of external authorization service                   | SR      |
| 2.11 | Ask communications for help to review web site                            | TG      |
