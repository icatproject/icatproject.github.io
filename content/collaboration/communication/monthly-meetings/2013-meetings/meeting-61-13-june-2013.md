---
title: Meeting 61 – 13 June 2013
date: 2013-06-13
---

  - Actions from the meeting 60 (Alistair)
  - Release conditions for products (Alistair)
  - Status of contribs (Alistair)
  - AOB (Any)

### Notes 61

We were pleased to have Milan join us again. He has been away from work
for a month following an operation on his wrist.

Nicola informed us that he is going to leave ESRF in June to work in a
commercial organisation in Zurich. The chairman thanked Nicola for his
work with ICAT and wished him well in his new position.

There was discussion about the appropriateness of the release conditions
which AM had added to the wiki. It was agreed that this would be
discussed again, for example when ICAT 4.3 is close to release.

SF reported that progress with ICAT 4.3 is good; that free text search
is working and is very efficient; that consolidation of code is reducing
the volume of code, and making things simpler in the longer term.

TG reported that he is working on a simple browser for ICAT. He will put
it into contrib when it is ready.

SF reported that he has done some timing tests on the download component
of the IDS. This has led to changes in the implementation which ensures
that the cypher in SSL mode is set dynamically and this generally ensure
less time for the cypher.

AM reported that GF 4 has been released and that he has deployed ICAT,
Authdb and Topcat on a GF 4 and that they appear to work correctly.
There was a problem trying to deploy the download component of IDS; as
this is not yet a supported product, this is a matter for development.

AM reported that he had deployed ICAT with GF4 with an Apache front-end.
This work has been done at ESRF and will be used for the ESRF production
ICAT. The GF4 and the Apache communicate with one another using AJP.
There was a bug in GF 3 which meant that this did not work when using
https, due to an error in the GF which continued to use http, when it
should have used https. The bug has been fixed in GF 4. To verify that
the bug was due to GF3, having got ICAT to work with GF4, AM then tried
changing back to GF3, and the ICAT did not
work.

### Actions 61

 

|       |                                                                     |     |        |         |
| ----- | ------------------------------------------------------------------- | --- | ------ | ------- |
| Item  | Description                                                         | Res | Status | Comment |
| 61.00 | Document the meeting and update the actions                         | AM  | Done   | –       |
| 61.01 | Put the simple ICAT browser into contrib when it is ready           | TG  | .      | –       |
| 61.02 | Write a note about the performance on the download component of IDS | SF  | .      | –       |
| 61.03 | Write a note about GF 4 and AJP                                     | AM  | Done   | –       |

 

### Attendance 61

 

|      |                |                    |         |           |
| ---- | -------------- | ------------------ | ------- | --------- |
| Init | Name           | Institute          | Present | Apologies |
| AM   | Alistair Mills | STFC SCD           | \+      |           |
| SMF  | Steve Fisher   | STFC SCD           | \+      |           |
| NB   | Nicola Bessone | ESRF               | \+      |           |
| MP   | Milan Prica    | ELETTRA            | \+      |           |
| TG   | Tom Griffin    | STFC ISIS Facility | \+      |           |
| JH   | Jamie Hall     | ILL                | \+      |           |
| KP   | Kevin Phipps   | STFC SCD           |         | \+        |
| IC   | Idrissou Chado | Soleil             |         | \+        |
