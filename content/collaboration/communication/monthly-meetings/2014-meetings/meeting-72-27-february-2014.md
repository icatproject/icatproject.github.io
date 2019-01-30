---
title: Meeting 72 – 27 February 2014
date: 2014-02-27
---

Agenda

  - Actions from meeting 71 (Steve)
  - Meeting technology (Kunal)
  - Meeting in Dublin in March (Alistair)
  - ICAT roadmap (Steve)
  - ICAT development (Steve)
  - TopCAT development (Wayne)
  - Coordination of IDS plugins (Andy/Christophe)
  - Release and SV for Pandata (Alistair)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

### Notes 72

Present: Milan, Shelly, Ivan, Alistair, Christophe, Anton, Kunal, Tom,
Wayne and Steve

Apologies: Rolf

Action 71.0 – there has not been much progress yet with the preparation
of the Dublin meeting besides essentials such as a room to meet in. This
will be rectified over the next few weeks. It will not appear on the
actions list as there will be no further meeting before Dublin. Tom
volunteered Jay to talk about integration of ICAT and Mantid and also to
talk about his experience (as someone new to ICAT) with the ICAT API.

Action 71.1 – this has now been completed and the first version
finalised. Steve will circulate a note with probable time scales for the
items on the road map. The time scales may become part of the map when
it is next revised.

Action 71.2 – a request has been sent in to the icat-support list Wayne
is in discussion with Milan about it. This will be closed.

Action 70.6 –
PanData[?](https://code.google.com/p/icatproject/w/edit/PanData) release
003 has exhibited no problems. This action will be closed.

Action 70.9 – Kunal has been investigation alternative meeting
technologies. He has tried a meeting using Google Hangouts with Shelley
and Milan and all were favourably impressed. It was noted that it did
take a little while to get used to but the functionality was excellent.
Kunal will register people as required and will set up a test meeting
for anyone who wants to familiarise themselves with the technology so
that the next ICAT collaboration meeting progresses smoothly. This will
be in a around two weeks time.

Agenda items except where covered by actions:

Steve reported on ICAT progress and the problems he has been having
trying to add a servlet to the icat ear file. He will work around the
problem for now with a SOAP interface for the lucene communication.

Wayne reported that he had been discussing the behaviour of TopCAT with
Milan. The next release of TopCAT will include data upload.

Christophe explained that the IDS plugin mechanism did not give him the
flexibility he needed. He will send a note to Steve explaining what he
needs.

The PanData[?](https://code.google.com/p/icatproject/w/edit/PanData) SV
has shown up a problem accessing the ISIS ICAT. This may be a firewall
problem somewhere as it used to work. Alistair will follow up on any
possible firewall issues. In about 3 week’s time the SV will concentrate
on Umbrella.

Tom asked if anybody had seen any odd behaviour with case sensitivity of
searches.

Tom will submit his authz rules to the contrib directory.

Alistair has discovered proxyvole to search for and use existing proxy
configurations. This will be used in the next SV.

Christophe asked how to record which instrument a dataset is related to
now that we have a many to many relation between investigation and
instrument. Besides using a
DatasetParameter[?](https://code.google.com/p/icatproject/w/edit/DatasetParameter) no
other suggestion was
offered.

### Actions 72

 

|      |                                                                                |            |         |
| ---- | ------------------------------------------------------------------------------ | ---------- | ------- |
| Item | Description                                                                    | Assigned   | Status  |
| 72.0 | Circulate likely time-scales for the items on the current road map             | Steve      | New     |
| 72.1 | Organise a Hangout familiarisation meeting                                     | Kunal      | New     |
| 72.2 | Send note to Steve about the shortcomings of the IDS plugin interface          | Christophe | New     |
| 72.3 | Understand why SV’s fail when ISIS ICAT is contacted                           | Alistair   | New     |
| 72.4 | Raise an issue on case sensitivity of searches                                 | Tom        | New     |
| 72.5 | Add authz rules to contrib directory                                           | Tom        | New     |
| 71.3 | Invite WP4 of Pandata to provide feedback on their experience of ICAT products | Alistair   | Pending |
| 61.1 | Put the simple ICAT browser into contrib when it is ready                      | Tom        | Pending |
| 60.3 | Finalise a release of IJP and send a note to the mailing list                  | Steve      | Pending |
