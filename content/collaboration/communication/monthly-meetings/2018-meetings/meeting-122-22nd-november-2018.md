---
title: Meeting 122 - 22nd November 2018
date: 2018-11-22
---

## Attendees:

Alex de Maria (AM), Maxime, Brian Ritchie (BR), Stuart Pullinger (SP), Rolf Krahl (RK), Chris Prosser (CP), Silvie Da Graca Ramos (SR), Louise Davies (LD), Lukas Masaitis, Nick Cook

## Apologies:

Bruno Canning, Catherine Jones, Milan

## ICAT Components:

### ICAT Server (SP):

- New release now available: 4.9.2
- Includes a minor upgrade to a dependency to fix a security issue
- New configuration option to choose which entities are included in the lucene index. Allows Diamond to remove Datafiles from the lucene index.
- In preparing the release, I found a problem with the fix for issue 202 (JMS Session not closed if an exception is thrown) so it was not included in this release. A future release will address this.
- Basic Travis CI configurations are being included for ICAT components to automate running unit tests. They will be extended to run integration tests eventually.

### IDS(RK)

- Bug fix for issue 202 above will be released as 1.9.1 soon

### Python-ICAT (RK):

Nothing to report

### Topcat (BR)

- 2.4.1 released on 2nd November.
- getSize calculations now use the IdsClient API (issue #386), which should improve performance.
- fix issue #379 : restore copying topcat.css into styles/ in setup [this clears an error message that was appearing in the FF console]
- fix issue #381 : IcatClient.getFullName returns UserName if no FullName is found [was causing problems for the DAaaS plugin]
- fix issue #384 : Cart no longer inherited by different user on same browser; also, if a different user logs in, the browse path is reset.
- added optional “disabled” flag to site.search configuration in topcat.json.
- If present and true, the Search tab will not be added. [required for Diamond]

Since then, some small changes that will become part of 2.4.2:

- improve DOI redirection failure message (issue #388)
- mail configuration properties can be removed if not required (issue #389)

but these are not show-stoppers so no urgency to release them yet.

### IJP (BR)

Nothing to report.

## Site Updates

### DLS (SP)

- Upgraded icat.server from 4.8.0 to 4.9.2
  - now using separate Lucene component
  - and rest authenticators
  - configured to prevent lucene from indexing Datafiles on ingest.
- IDS is still on 1.8.0. Awaiting fix for bug

### HZB (RK)

- Upgraded to icat.server 4.9.2 and TopCat 2.4.1

### AOB

- INFRAEOSC-5 ExPaNDS H2020 proposal has now been submitted. (SP)
- ALBA will be installing the ICAT Stack. (AM)

## Demo

Alex demonstrated the new web interface to ICAT being developed at ESRF. Slides of the presentation are available here:
[Datahub Demo](/pdf/collaboration/communication/monthly-meetings/2018-meetings/Datahub-Demo.pdf).

## Actions

|       |                                                                |                 |
| ----- | -------------------------------------------------------------- | --------------- |
| 113.2 | Organise a meeting for the discussion of a Topcat replacement  | Catherine Jones |
| 119.1 | Review and update instructions for Apache proxy configuration. | SP and RK       |

Next meeting proposed for Thursday 20th December at 3pm UK time. SP to email icatgroup earlier that week to see if there is interest in having a meeting.
