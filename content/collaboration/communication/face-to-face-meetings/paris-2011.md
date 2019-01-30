---
title: Paris 2011
---

# Collaboration meeting in Paris 2011

## Agenda

|       |                                                                                                             |                  |
| ----- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| 09:45 | ILL                                                                                                         | Holger Gebhard   |
| 10:00 | [ISIS and TopCAT](/pdf/collaboration/communication/face-to-face-meetings/paris-2011/ICAT_and_TopCAT_TG.pdf) | Tom Griffin      |
| 10:15 | CLF                                                                                                         | Steve Fisher     |
| 10:40 | ELETTRA                                                                                                     | Fabio Bonaccorso |
| 11:15 | Discussion on parameters                                                                                    |                  |
| 13:30 | Discussion- Reporting in ICAT (usage reporting, scientific stats)                                           |                  |
| 15:30 | [DOIs at STFC](/pdf/collaboration/communication/face-to-face-meetings/paris-2011/DOIs_and_MySQL.pdf)        | Tom Griffin      |
|       | [MySQL Support](/pdf/collaboration/communication/face-to-face-meetings/paris-2011/MySQL_slides.pdf)         | Tom Griffin      |
| 15:45 | I2S2[?](https://code.google.com/p/icatproject/w/edit/I2S2) – Personal ICAT                                  | Brian Matthews   |
| 16:15 | Discussion- DOIs                                                                                            |                  |

## Headline Discussion Points

- ISIS and ILL to joint release their ICATs \~27th Feb 2007
- TopCAT and Mantid as the interface for ISIS. ILL own interface
- Central Laser Facility using ICAT to store laser diagnostic data
  (not metadata + data)
- Parameters – agreement to extend types (string, number,
  DateTime[?](https://code.google.com/p/icatproject/w/edit/DateTime) +
  int + boolean)
- Agreed change to parameter search API (simplification without loss
  of power)
- 'Reporting': ISIS to add system for 'usage tracking'; ILL interested
  in more powerful querying (OLAP cubes?)
- Authorisation model: agreement in principle to add groups and
  limited rules for instrument scientists
- Agreement to remove XMLIngest from main API to (optional) plugin API
- Plans for improvement on documentation and error handling
- STFC/ISIS will be issuing DOIs to all experiment datasets from 1st
  March (ILL interesting in doing the same but longer timescale)
- A basic MySQL version of ICAT is being tested
- Discussion on whether ICAT is an appropriate solution for storing
  some palaeontology datasets at ESRF

## Actions Record

| New   | Description                                                                                                       | Resp  | Status | Comment |
| ----- | ----------------------------------------------------------------------------------------------------------------- | ----- | ------ | ------- |
| 16.00 | Document the meeting                                                                                              | TG/AM | Done   | –       |
| 16.01 | Distribute a discussion paper on authorisation model                                                              | TG    |        | 03/2011 |
| 16.02 | Move xmlingest to a separate package                                                                              | TG    | –      | icat4   |
| 16.03 | Prepare a road map for icat4                                                                                      | TG/SN | –      | 03/2011 |
| 16.04 | Provide a design for 'management' reporting'                                                                      | JR    | i/p    | 03/2011 |
| 16.05 | Provide information on BIRT – Business Intelligence                                                               | HG    | –      | 03/2011 |
| 16.06 | Review the API documentation and lead/co-ordinate efforts to improve                                              | AM/SF | –      | 03/2011 |
| 16.07 | Provide exemplar documentation of one class in the API                                                            | SF    | –      | 03/2011 |
| 16.08 | Provide an exemplar of enhancements to the API (parameter searching)                                              | SF/AM | –      | 03/2011 |
| 16.09 | Provide additional exceptions in the API                                                                          | SF/AM | –      | 03/2011 |
| 16.10 | Provide a discussion paper on the use of DOI with ICAT                                                            | BM/SN | –      | 03/2011 |
| 16.11 | Extend parameter types to match programming language/NeXus[?](https://code.google.com/p/icatproject/w/edit/NeXus) | SF    | –      | 03/2011 |

## Attendees

- SP Stephane Poirier – Soleil
- TG Tom Griffin – STFC
- HG Holger Gebhard – ILL
- SF Steve Fisher – STFC
- AM Alistair Mills – STFC
- HJ Heinz-Joesph Weyer – PSI
- FA Freddy Akeroyd – STFC
- JR Jessica Robinson – STFC
- BM Brian Matthews – STFC
- DH Dietmar Herrendorer – HZB
- CJ Christian Jung – HZB
- JF Jean-François Perin – ILL
- JX Jamie ? – ILL
- AG Andy Gotz – ESRF
- JK Jorg Klora – ALBA
- MX Magid ? – Solei

## Apologies

- SN Sri Nagella – STFC
- RS Richard Sinclair – STFC
- FB Fabio Bonnacorso – ELETTRA
- RD Roger Downing- STFC
- RF Ron Fowler- STFC
- GKM Ghita Kouadri Mostefaoui – Diamond
