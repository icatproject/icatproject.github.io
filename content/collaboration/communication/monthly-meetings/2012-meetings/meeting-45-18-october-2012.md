---
title: Meeting 45 – 18 October 2012
date: 2012-10-18
---

### Agenda 45

  - Actions from the meetings 44 (Alistair/Steve)
  - Plans for ICAT 4.3 (Tom)
  - Update from PaN-data (Milan/George)
  - Deployment of ICAT 4.3 for DLS (Ghita)
  - Deployment of ICAT 4.3 for ISIS (Tom)
  - Deployment of ICAT 4.2 for CLF (Alistair)
  - AOB (Any)

### Attendance 45

 

|      |                   |           |         |           |
| ---- | ----------------- | --------- | ------- | --------- |
| Init | Name              | Institute | Present | Apologies |
| AM   | Alistair Mills    | STFC eSc  | \+      |           |
| SF   | Steve Fisher      | STFC eSc  | \+      |           |
| KP   | Kevin Phipps      | STFC eSc  | \+      |           |
| MP   | Milan Prica       | ELETTRA   | \+      |           |
| GK   | George Kourousias | ELETTRA   | \+      |           |
| NB   | Nicola Bessone    | ESRF      | \+      |           |
| JS   | Julian Savoyet    | ESRF      | \+      |           |
| JH   | Jamie Hall        | ILL       | \+      |           |
| JD   | Juergen Stark     | DESY      | \+      |           |

 

 

|      |                          |                    |         |           |
| ---- | ------------------------ | ------------------ | ------- | --------- |
| Init | Name                     | Institute          | Present | Apologies |
| TG   | Tom Griffin              | STFC ISIS Facility |         | \+        |
| AW   | Antony Wilson            | STFC eSc           |         | \+        |
| GKM  | Ghita Kouadri Mostefaoui | Diamond            |         | \+        |
| SR   | Shelly Ren               | ORNL SNS           |         | \+        |

 

### Notes 45

There was was an excellent attendance at the meeting with Juergen, Jamie
and Julian attending for the first time.

The CRISP project has written a deliverable comparing meta data catalogs
and selected ICAT as the preferred catalog.

Tom was absent, so discussion of icat 4.3 was deferred.

Pandata is planning a series of monthly service verifications, with sv-0
planned for 9 November 2012.

ESRF proposes the following changes for icat 4.3:

  - Add a property to icat.properties to deploy to http rather than
    http;

<!-- end list -->

  - Add additional properties to auth\_ldap.properties to support
    deployment at ESRF;

<!-- end list -->

  - Change the installation scripts such as create.sh and
    glassfish.props to enhance support for domains other than domain1;

<!-- end list -->

  - Eliminate the need for the user to supply the authentication
    mechanism (ie db or ldap).

The DLS deployment of 4.2 is making good progress and full deployment is
planned for the close-down period in January 2013.

The ISIS deployment of 4.2 is making good progress and full deployment
is planned for the close-down period in December 2012.

The CLF deployment of 4.2 is making good progress and full deployment is
planned for November 2012.

It was noted that the 1st of November is a public holiday in both France
and Italy so attendance will be reduced for the meeting on that
day.

### Actions 45

 

|       |                                                                             |            |        |         |
| ----- | --------------------------------------------------------------------------- | ---------- | ------ | ------- |
| Item  | Description                                                                 | Res**(1)** | Status | Comment |
| 45.00 | Document the meeting                                                        | AM         | Done   | –       |
| 45.01 | Add a page to the wiki with an index to contrib                             | AM         | Done   | –       |
| 45.02 | Publish the ER diagrams for icat 4.1 and 4.2 to contrib                     | NB         | Done   | –       |
| 45.03 | Send an email to Christian about his web service web site                   | AM         | .      | –       |
| 45.04 | Put a link into the wiki to the site of Christian                           | AM         | Done   | –       |
| 45.05 | Discuss the changes proposed by ESRF                                        | SF/AM      | Done   | –       |
| 45.06 | Arrange next meeting on 1 November, but it is a holiday in France and Italy | AM         | Done   | –       |
