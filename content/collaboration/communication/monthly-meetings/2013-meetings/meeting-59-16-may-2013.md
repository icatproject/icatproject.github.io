---
title: Meeting 59 – 16 May 2013
date: 2013-05-16
---

  - Actions from the meetings 58 (Alistair)
  - Status of ICAT 4.3 (Steve)
  - Status of anonymous authenticator (Steve)
  - Status of IDS (Antony)
  - AOB (Any)

### Notes 59

Steve reported that Antony has now left the collaboration as he has a
new job within STFC SCD. Alistair was asked to make an announcement
about the availability of the technology preview of the IDS. Alistair
reported that the downloader part of the IDS had performed well during
the service verification on 10 May 2013.

(Steve and Alistair reviewed the status of the materials for the IDS on
22 May 2013 and decided that the IDS is not ready for a technology
preview. There will be a student working on this from July, and we
expect to have it ready for preview by September).

Steve reported that the anonymous authenticator is now available.
Alistair reported that he has successfully deployed it on one of the
test icats for Pandata.

Kevin reported that he has deployed ICAT 4.2.5 in production for CLF at
RAL. This appears to have cured the problem of memory leak and improved
the reliability of ICAT.

Kevin and Tom both reported that adding additional indexes to some of
the tables in the database has made a large difference to the time
required for queries. The response time is much lower, and it is much
more consistent.

There was discussion of how to implement index generation in ICAT 4.3.
There is not a standard way in SQL to tell a database to create indexes.
Furthermore, the tables which requires the indexes can vary from one
installation to another. There is a way to tell
EclipseLink[?](https://code.google.com/p/icatproject/w/edit/EclipseLink) to
generate indexes in tables, but this does not work if a different
persistence provider is used. It was agreed to provide documentation on
index generation.

Steve reported that adding the extensions to the query language for ICAT
to support the changes to the schema to be introduced in icat 4.3 is
rather complicated and would delay the availability of ICAT 4.3. It was
agreed that Steve should take the time to get it correct, and if it
delays ICAT 4.3 until after the summer recess, this would be
satisfactory. (There is a requirement of Pandata that the changes to the
schema of ICAT are required by October 2013 –
Ed).

### Actions 59

 

|       |                                                              |     |                  |                      |
| ----- | ------------------------------------------------------------ | --- | ---------------- | -------------------- |
| Item  | Description                                                  | Res | Status           | Comment              |
| 59.00 | Document the meeting and update the actions                  | AM  | Done             | –                    |
| 58.01 | Make an announcement about the technology preview of the IDS | AM  | Will not be done | The IDS is not ready |

 

### Attendance 59

 

|      |                          |                    |         |           |
| ---- | ------------------------ | ------------------ | ------- | --------- |
| Init | Name                     | Institute          | Present | Apologies |
| AM   | Alistair Mills           | STFC SCD           | \+      |           |
| SMF  | Steve Fisher             | STFC SCD           | \+      |           |
| DG   | David Garcia             | Alba               | \+      |           |
| DG   | Pablo                    | Alba               | \+      |           |
| KP   | Kevin Phipps             | STFC SCD           | \+      |           |
| GKM  | Ghita Kouadri Mostefaoui | Diamond            | \+      |           |
| TG   | Tom Griffin              | STFC ISIS Facility | \+      |           |
| NB   | Nicola Bessone           | ESRF               | \+      |           |
| IC   | Idrissou Chado           | Soleil             | \+      |           |
| JH   | Jamie Hall               | IIL                | \+      |           |
