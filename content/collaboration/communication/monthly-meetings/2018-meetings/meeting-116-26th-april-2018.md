---
title: Meeting 116 – 26th April 2018
date: 2018-04-26
---

## Attendees

Brian (BR), Chris (CP), Silvie (SR), Stuart (SP), Rolf (RK), Milan (M),
Andy (AG), Maxime (MC)

## Actions from previous

102.2 – BR still working on this.

113.1 – Stuart hasn’t managed to do this. Is having issues with python
script used to test performance of IDS queries.

113.2 – Catherine to organise the topcat development meeting, Stuart
will follow up on this.

115.1 – Stuart didn’t see any pressing issues, i.e. issues that are
causing significant problems and need fixing immediately.

115.2 – Brian has closed many tickets, most of them no were longer
required.

115.3 – Schema changes timetable not done but discussion in this meeting
about two smaller changes.

## ICAT Components

**Server (SP) –** Alex reported timer issue in glassfish which required
redeployment. Brian found configuration setting in Payara that means the
timers would be restarted rather than expunged if they fail. Stuart will
test this configuration change to Payara actually fixes the issue and
will add it to the setup-glassfish.py script. Stuart also notes that the
setup-glassfish script isn’t in version control so he will be adding
this.

**Topcat (BR) –** Brian created 2.4.0 snapshot that he would like
testing. The only change since then is missing lang.json.example items.
Stuart will test on Diamond pre-production and Jamie will test on ISIS
pre-production. Brian notes to be aware of the changes to
topcat.properties  when upgrading.

**IJP (BR) –** Brian reviewed in-progress issues in waffle.io and closed
most of them. Reports that \*\* \*\*IJP job to SCARF no longer works due to
problem with platform LSF.

**IDS (RK) –** Snapshot released and no feedback received yet. Waiting
for Stuart to test the database performance.

## Site Updates

**Diamond (CP)** – Double the volume of diamond user recalls over the
last two weeks has caused problems. Issue with recalls taking too long
to complete, timing out and falling into an expired state. Also because
the IDS’s are under heavy load with CPU and disk usage being very high
the test they run every 20 minutes is failing. Andy Gotz expressed
interest in Diamonds test script so Stuart says he will share it as it
may be useful for others.

**ESRF (AG and MC)** – Only issue has been topcat download/timer issue
already discussed. ESRF have DOI landing pages now but asked about
anonymous downloads. Rolf explains anonymous auth plugin, rules and
topcat config of anonymous plugin is all that’s required. MC has written
up requirements for logbook that will work closely with ICAT and will
share when complete. AG also reports that their cyroEM is fully
integrated into ICAT.

## Waffle.IO tickets

‘Ready’ tickets should be for issues that are ready to be worked on. If
an issue is ‘In progress’ the ticket assignee should be prepared to talk
about it at the next monthly meeting.

Stuart has added two new issues to Ready. Adding setup-glassfish script
into version control and testing the Payara configuration option to stop
timers being expunged.

Silvia reported she made some changes to the IDS specific to Diamond.
Rolf says she can create a PR to be reviewed.

Stuart asked about python 2.7 end of life, Rolf confirms that
python-icat works with python 3. Stuart says he will look at getting the
setup scripts python 3 compatible.

## Schema Changes

Stuart reported he’s going to start with non-controversial additive
changes, their presence shouldn’t affect anyone who doesn’t want to use
them.

No one objected to adding persistent identifiers to Instruments. Stuart
asked if 255 characters are enough, Rolf has never seen a persistent
identifier that is longer than 255. Stuart asked what the update should
be called and it’s agreed to at least be a minor number change since
it’s a schema change.

There’s some discussion regarding the creation of an optional shift to
instrument relation but the meeting is cut short so no firm decision is
made.

## Actions

| Item  | Description                                                  | Assigned         |
| ----- | ------------------------------------------------------------ | ---------------- |
| 102.2 | Produce new releases of IJP components                       | Brian Ritchie    |
| 113.1 | Look at Rolfs IDS Server and IDS Plugin pull request         | Stuart Pullinger |
| 113.2 | Organise a meeting for thediscussion of a Topcat replacement | Catherine Jones  |
| 115.3 | Create a timetable for discussions of schema changes         | Stuart Pullinger |
| 116.1 | Test Topcat 2.4.0 snapshot on ISIS and diamond               | Jamie and Stuart |
| 116.2 | Share diamond download test script.                          | Stuart           |
| 116.3 | Look at converting setup scripts to python 3                 | Stuart           |

Next meeting scheduled for Thursday 24th May, 3pm UK time.
