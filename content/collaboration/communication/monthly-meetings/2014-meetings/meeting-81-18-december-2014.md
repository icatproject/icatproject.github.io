---
title: Meeting 81 – 18 December 2014
date: 2014-12-18
---

# Agenda

  - Actions from meeting 80 (Steve)
  - ICAT development (Steve)
  - ICAT Manager (Christophe)
  - IDS development (Steve)
  - TopCAT development – new requirements from DLS (Steve, Matt and
    Alun?)
  - IJP development (Brian R)
  - Installation Script (Leonardo)
  - Issues from ICAT production deployments (Any)
  - Monthly meetings for 2015 (Steve)
  - 2015 F2F Meeting and Steering Group Meeting (Steve, Andy and Alun)
  - AOB (Any)

# Notes

Present: Rolf, Matt, Brian M, Brian R, Kevin, Tom, Andy, Shelley and
Milan Apologies: Christophe

  - The start of the meeting was slightly delayed as the laptop was
    connected to the wrong microphone.
  - Under matters arising from the previous minutes Tom reminded the
    meeting that ESS had not formally decided to adopt ICAT.
  - Action 80.0: Tom confimed that Mantid does not use the searchText
    call
  - Action 80.1 Alun Ashton plans to host the meeting at DLS.
  - Action 80.2 Steve has set up a steering group mailing list.
  - Action 60.3 Brian said that a first release of the IJP was imminent.
  - ICAT 4.4.0 has been released. One interesting problem has been
    reported by Rolf with a search using limits in conjunction with a
    search by id. It would appear that this is not a new problem but is
    a bug in eclipselink. If you replace “id=42” with “id IN (42)” it
    works fine. To fix this would require that the code recognises this
    case to provide a work-around. Steve proposed that it be marked as a
    “wont fix” but the meeting thought that as ICAT was not working as
    advertised it should be fixed. No action will be recorded as it is
    already in the list of issues. Steve will in addition report the
    problem to eclipse. ICAT 4.5.0 is progressing steadily with
    customised lucene searches to match TopCAT2.
  - PaNdata have produced a report on ICAT as one of their deliverables.
    This has been circulated to the steering group. Milan has agreed
    that it can be made available to all those in the ICAT collaboration
    so Steve will send it round after this meeting. It brings up a
    number of interesting issues and exposes some misunderstandings.
    Steve plans to produce a response which will also be sent to the
    icatgroup list.
  - Christophe had informed Steve that he has not yet made the planned
    improvement to his ICAT Manager Steve said that version 1.3 is about
    to be released. Rolf has submitted a bug report – along with a fix
    which has not yet been applied. When this has been applied and
    tested another snapshot will be made available before a release is
    made.
  - Following a presentation to DLS on TopCAT2 a number of
    new requirements were drafted. This document has not yet been
    approved by DLS so will not be circulated yet. Steve went through
    the points and the following issues were brought up:
    1.  Don’t need filters on column values as well as global filters.
    2.  There was a discussion on scroll bars which get the data when it
        comes into view as opposed to regular scroll bars where the HTML
        is fully rendered.
    3.  The need for an API to TopCAT was not understood and DLS should
        be asked to provided Use Cases.
    4.  Nobody other than DLS wanted a Datafile.location view. Steve
        said that he thought it would require an extra database table in
        ICAT which would be slightly larger than the Datafile table. He
        suggested making it an ICAT configuration option.
    5.  Matt also said that DLS would like more information on the
        progress of restores/downloads.
  - Jan has recently checked some new documentation in.
  - Tom reported that the IDS did not seem to recover well from network
    breaks. Steve will submit a “bug”. Matt asked for the IDS to be able
    to provide usage statistics.
  - Brian R reported good progress on the IJP and that he hopes to have
    a release around Christmas time making use of the “unixbatch” batch
    server. T he IJP will now pass datafile Ids to jobs. He has written
    small “jobs” to do things such as copying  a datafile to another
    dataset. Interactive jobs are not currently supported as the
    previous mechanism was too tied to one implementation. This will be
    addressed ASAP.
  - Steve asked if there were any changes needed to the schedule of
    meetings for 2015 – there were none.
  - It is expected that the 2015 F2F Meeting and Steering Group Meeting
     will be hosted by DLS. A doodle poll will be carried out once we
    get possible dates from Alun. This should be done before Christmas
    to give people time to obtain travel
approval.

# Actions

| ITEM | DESCRIPTION                                                   | ASSIGNED |
| ---- | ------------------------------------------------------------- | -------- |
| 81.0 | Report bug in eclipselink                                     | Steve    |
| 81.1 | Circulate response to PaNdata document.                       | Steve    |
| 81.2 | Circulate DLS TopCAT 2 requirements                           | Steve    |
| 81.3 | Request use case for TopCAT API                               | Steve    |
| 81.4 | Demo the IJP to the meeting when it has been released.        | Brian R  |
| 74.0 | Look into JDBC connector resilience with Wildfly              | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when it is ready     | Condie   |
| 60.3 | Finalise a release of IJP and send a note to the mailing list | Brian R  |
