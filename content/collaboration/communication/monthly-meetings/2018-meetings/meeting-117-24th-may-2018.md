---
title: Meeting 117 – 24th May 2018
date: 2018-05-24
---

Attendees:  Brian (BR), Silvie (SR), Stuart (SP), Rolf (RK), Jamie (JS)

Apologies: Chris (CP), Catherine

Actions from previous:

102.2 – Decided to drop this action but BR will still work on it.

113.1 – Stuart tried out testing script but it froze, hasn’t
investigated further. It’s decided to release IDS anyway.

113.2 – New starter who was going to work on Topcat no longer starting
in July. ~~STFC are applying internally for graduate effort to work on
Topcat and ICAT. If the application is successful, they will start
between September and December this year.~~ **\[Update: STFC have been
successful in their application for 1 graduate to work across TopCat and
Icat. They will start in November.\]**

STFC would like to get all the stakeholders together who currently use
the different interfaces to TopCat – possibly in person – to discuss the
future and the requirements

115.3 – Schema changes are in ticketing system, timetable not required.

116.1 – ISIS tested Topcat 2.4.0 snapshot with no issues. Not tested for
diamond yet due to some other system related issues.

116.2 – Diamond download test script was shared.

116.3 – Issue created for conversion of setup scripts to Python 3.

ICAT Components:

**Topcat (BR) –** Brian released a few new snapshots since last meeting.
Latest snapshot should be final release; it just needs testing by
diamond.

**IJP (BR) –** Brian reports that scarf are dropping Platform LSF in
favour of Slurm. Brian’s hoping this will be a simple change for the IJP
but is unsure yet.

**IDS (RK) –** Fixed JMS session bug in notification transmitter. The
snapshot is considered ready for release.

Site Updates

**Diamond (SR)** – Diamond production has been updated to use Payara.

**ISIS (JS)**  – ICAT server updated to from 4.7 to 4.9.1 to fix slow
lucene on update calls, which has worked.

**HZB (RK)** – Rolf reports he’s working on using Docker to deploy the
whole ICAT stack. As a first step it seemed too complicated to get each
component deployed on multiple machines, so going to start by deploying
on one machine with multiple containers.

Waffle.IO tickets

All ‘in progress’ tickets are IDS issues that are in the Snapshot which
it has been agreed to be released soon.

Stuart’s going to work on the schema change tickets that were agreed
last meeting (\#198 and \#199), he will make pull request for review
once done.

The JMS issue (\#202) will be fixed in ICAT server too, Stuart’s going
to implement a similar fix as Rolf did for the IDS.

Stuart has had problems testing icat.utils expunged timer issue (\#8).

There’s discussion about icat.server issue \#201, adding familyName,
givenName and affiliation to User. Jamie raises issue of keeping the
redundant fullName attribute but it’s agreed this is fine. Schema change
is agreed on and ticket is placed into the ‘Ready’ list.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Item</td>
<td>Description</td>
<td>Assigned</td>
</tr>
<tr class="even">
<td>113.1</td>
<td>Look at Rolfs IDS Server and IDS Plugin pull request</td>
<td>Stuart Pullinger</td>
</tr>
<tr class="odd">
<td>113.2</td>
<td>Organise a meeting for the
<p>discussion of a Topcat</p>
<p>replacement</p></td>
<td>Catherine Jones</td>
</tr>
<tr class="even">
<td>116.1</td>
<td>Test Topcat 2.4.0 snapshot for diamond</td>
<td>Brain</td>
</tr>
</tbody>
</table>

Next meeting scheduled for Thursday 28th June, 3pm UK time.
