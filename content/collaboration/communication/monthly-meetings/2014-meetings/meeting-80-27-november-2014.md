---
title: Meeting 80 – 27 November 2014
date: 2014-11-27
---

# Agenda

  - Actions from meeting 79 (Steve)
  - ICAT development (Steve)
  - ICAT Manager (Christophe)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - IJP development (Brian R)
  - Installation Script (Leonardo)
  - Issues from ICAT production deployments (Any)
  - 2015 F2F Meeting and Steering Group Meeting (Steve and Andy)
  - AOB (Any)

# Notes

Apologies: None  
Present: Matt, Tom, Kevin, Wayne, Steve, Brian R,Christophe, Milan,
Andy, Rolf

  - Actions – No progress
  - ICAT development: Steve reported that “role” had been added to
    InvestigationGroup as agreed last meeting. The icat.server 4.4.0
    would have been ready to go out except for the new idea about
    allowing multiple roles which could be added very quickly if people
    agree. It has been discussed today by e-mail. One more snapshot will
    be produced with this change and in a few days time 4.4.0 will be
    released.  
    The next release (4.5.0) will include extra RESTFul calls for the
    benefit of TopCAT 2 making heavy use of the lucene indexing. Steve
    would like to drop the existing searchText call if nobody is using
    it. Tom will check with the Mantid people.  These three new calls
    are currently very specialised. Maybe a more generic way can be
    found in the future but this is not obvious.  The queries use the
    notion of “my data” which is defined as the existence of an entry in
    the InvestigationUser table (irrespective of role) to define the
    relationship between an Investigation and a User. The meeting was
    happy with this choice. The investigation call is complete and the
    dataset call is almost complete. The datafile code has not yet been
    started. It will be tested on a large scale with a clone of the DLS
    ICAT. Tom asked if DLS were ingesting via the API which will keep
    the indices up to date – they are for the bulk of the data but not
    for the “Investigation”.As the update rules do not work as might be
    expected Steve plans to check against the UPDATE permissions before
    the change and against the CREATE permissions after the change.
     This is to make sure that update cannot get the system into a
    state that could not be achieved by a create call.
  - Christophe said that the ICAT manager’s update feature now worked
    proper;y behind a web proxy. He plans a new feature to allow
    multiple entities to be updated together.
  - IDS 1.3 is about ready to release as well. This will be done after
    ICAT 4.4.0 has been released though there is no dependency. A couple
    of bugs have been fixed since the last meeting and the mechanism to
    use a cryptographic hash to protect the datafile location has been
    added. Rolf told the meeting that he had submitted a bug relating to
    a possible race condition.
  - Wayne reported on his  latest mock-ups of TopCAT 2. He has received
    a number of questions from Rolf which he will address shortly. Wayne
    answered a question from Tom about the technology to be used and was
    told that the plan was to to use AngularJS with (probably) jQWidgets
    as it is preferable to use widgets that are free and support
    angular.
  - Brian reported that development of the IJP was going smoothly. He
    explained that when introducing datafile selection it was actually
    easiest to start be selecting available jobs and then you will be
    offered datafiles or datasets according to the type of job.
  - Steve was the only person present who had tried Leonardo’s latest
    installation scripts. He was a little concerned by the proliferation
    of bash scripts.
  - Kevin reported that the Vulcan laser ICAT and ingestion was now in
    pre-production and that plans were in hand for another ICAT
    installation for Artemis.
  - Rolf told us that a new version of python icat was about to be
    released once it had been tested with the final release of
    icat.server 4.4.0
  - Milan reminded us that a report by PaNData on ICAT experience would
    soon be made available.
  - Andy gave us the good news that the ESS steering committee had
    decided to use ICAT. They are also going to use ISPyB so we should
    consider how best to use them together.
  - A F2F and Steering Group Meeting for early 2015 was discussed. A
    host is needed. ESRF are prepared to do this unless someone else
    comes forward. It was felt that we should not attempt to co-locate
    with PaNDAas as this would delay things unnecessarily. Steve will
    send round an e-mail to see if anybody would like to act as host As
    Andy was not sure who was actually on the steering group, Steve will
    set up a mailing list
  - Finally Tom told us that this would be his last meeting representing
    ISIS as he is starting his new job as group leader in SCD replacing
    Brian Matthews on the 1st
December.

# Actions

| ITEM | DESCRIPTION                                                   | ASSIGNED |
| ---- | ------------------------------------------------------------- | -------- |
| 80.0 | Find out if Mantid is using the searchText call               | Tom      |
| 80.1 | Seek a host for the 2015 F2F and Steering Group Meeting       | Steve    |
| 80.2 | Set up mailing list for steering group                        | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly              | Steve    |
| 61.1 | Put the simple ICAT browser into contrib when it is ready     | Condie   |
| 60.3 | Finalise a release of IJP and send a note to the mailing list | Brian R  |
