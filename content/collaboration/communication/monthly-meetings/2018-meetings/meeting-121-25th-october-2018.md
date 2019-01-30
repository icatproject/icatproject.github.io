---
title: Meeting 121 - 25th October 2018
date: 2018-10-25
---

#### Attendees:

Maxime, Brian Ritchie (BR), Stuart Pullinger (SP), Rolf Krahl (RK),
George Christian (GC), Chris Prosser (CP), Bruno Canning (BC), Julimar
Romero (JC), Milan

#### Apologies:

Silvie Da Graca Ramos, Catherine Jones, Alex de Maria

#### ICAT Components:

##### ICAT Server (SP & RK):

- SP working on making Datafile search configurable
- RK: ICAT Schema changes done. Pull request is in. Expected to
  release in icat.server 4.10.

##### IDS(RK)

- Bug fix for DfRestorer bug ready for next release.
- Filesystem locking change pull request is ready. Enables concurrent
  access to the filesystem.
  - requires plugins to be recompiled (if they inherit from
    mainstorage.
  - or make a new call if they just implement the interface.
  - ACTION (All): plugin authors to read and comment on RK’s email
    to icatgroup.

##### Python-ICAT (RK)

- Made new release with small change for own needs.

##### Topcat (BR)

- New snapshot release for Topcat 2.4.1
  - getSize() call rewritten to improve performance.
  - slight change to address issue where new user in same browser
    can see previous user’s cart and browse path.

##### **IJP (BR)**

- Nothing to report.

#### Site Updates

**STFC (SP)**

- New starter in November: Louise Davies joins as a developer.
- SP increasing hours from 70% to 90% of full time in November.

**ISIS (GC)**

- On installing new certificates, found that the root certificate was
  not in the trusted key store in Payara. Had to manually install the
  root CA certificate in Payara on all the ICAT stack machines. The
  missing root certificate was issued by Quo Vardis Root CA 2 G3.

**HZB (RK)**

- Had a student working; done good work; pull requests on the way.

**ESRF (Max)**

- Continuing development of the new data portal.
- Have one early adopter who is providing helpful feedback.

#### AOB

**Vulnerability in Apache HttpClient used in ICAT Server**

- Github are now scanning our code for security vulnerabilities in our
  dependencies. This is only visible to project administrators.

- An alert was posted for the Apache HttpClient version 4.3.4 which is
  used by all versions of ICAT Server since
  4.4.0.

- Details:

  ##### CVE-2015-5262 [More information](https://nvd.nist.gov/vuln/detail/CVE-2015-5262)

  moderate severity

  **Vulnerable versions:** \< 4.3.6

  **Patched version:** 4.3.6

  http/conn/ssl/SSLConnectionSocketFactory.java in Apache
  HttpComponents HttpClient before 4.3.6 ignores the
  http.socket.timeout configuration setting during an SSL handshake,
  which allows remote attackers to cause a denial of service (HTTPS
  call hang) via unspecified vectors.

- RK and SP think that it is unlikely to present a danger to ICAT
  systems provided they have the ‘ip’ property configured to restrict
  access to ICAT to whitelisted ip address ranges.

- SP will include a fix (by upgrading the dependency to 4.3.6) in the
  next bug fix release of ICAT server (4.9.2)

**INFRAEOSC-5 ExPaNDS H2020 proposal (SP)**

- SP attending meeting at Heathrow next week.
- Work will establish a standard ontology for metadata in the
  catalogues used at facilities such as ISIS and DLS.
- Implements and adapts some of the output of PaNOSC (including ESRF)
  for other facilities.
- SP interested in possible changes to ICAT API.
- PSI (who are creating the SciCat metadata catalogue for ESS and
  presented at the last face to face meeting) are involved.

**Google Dataset search (GC)**

- GC has made ISIS data available through Google’s Dataset search
  facility.
- Many expressed interest in how this was achieved.
- ACTION: GC to post to the email group an explanation of how it was
  done.

#### Actions

|       |                                                                                  |                 |
| ----- | -------------------------------------------------------------------------------- | --------------- |
| 113.2 | Organise a meeting for the discussion of a Topcat replacement                    | Catherine Jones |
| 119.1 | Review and update instructions for Apache proxy configuration.                   | SP and RK       |
| 120.1 | Alex to demonstrate ESRF’s replacement for TopCat.                               | Alex de Maria   |
| 121.1 | Plugin authors to read and comment on RK’s email to icatgroup.                   | All             |
| 121.2 | Post to the email group an explanation of how Google Dataset search was enabled. | GC              |

Next meeting scheduled for Thursday 22nd November at 3pm UK time.
