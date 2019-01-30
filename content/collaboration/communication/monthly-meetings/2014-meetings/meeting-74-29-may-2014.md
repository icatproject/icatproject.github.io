---
title: Meeting 74 – 29 May 2014
date: 2014-05-29
---

Agenda

  - Actions from meeting 73 (Steve)
  - Steering Group (Tom or any other member)
  - ICAT development (Steve)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

### Notes

Present: Kunal, Alistair, Wayne, Kevin, Tom, Milan, Steve

Apologies: Anton, Rolf, Shelly

Action 73.0 – Tom has sent a note around about DOIs and has already
received one reply.

Action 73.1 – Kunal reported his Wildfly findings – primarily the need
for a java:/ in front of a field in the persistence.xml. Steve then
reported that he had managed to install an ICAT with one authenticator
but that testicat would not run properly because the published wsdl was
a little different and meant that it was not possible to use SUDS to
create a credential object – so logging in was not possible. Steve
commented that in may respects Wildfly is more regular than Glassfish
and that the support on the forum is excellent. Having demonstrated that
there appear to be no major problems he will take this work further at
some later date with the intention of updating the setup script to
modify the glassfish version of the .war file and to deploy it on
wildfly. Kunal has done some work preparing scripts but does not have
the time currently. Steve has also tried TomEE+ but found that this was
harder to get started with. Probably work on TomEE+ will be delayed for
much longer as Wildfly appears to be a viable alternative to Glassfish.
Tom asked for JDBC connector resilience with Wildfly to be checked.

Action 73.2 – Tom has sent around details of Balsamiq.

Action 72.5 – Tom is tidying up the rules and will then share them

Action 71.3 – Alistair said that he did not intend to carry out this
action. Milan suggested that a round table at the forthcoming
PanData[?](https://code.google.com/p/icatproject/w/edit/PanData)workshop
could address this. The workshop is before the next meeting so the
action will be removed.

Tom reported on the ICAT Steering Group which had its first meeting last
week.The main items of discussion were the ToR and the choice of
chairman. The meeting has not yet chosen a chairman. TopCAT was also
discussed. The consensus was that TopCAT would be needed but that two
labs still needed to have their own bespoke interface as well.The work
of the group will be public and the ToR (once finalised) and the minutes
of the meetings will appear on icatproject.org.

Steve reported on ICAT development. The 4.3.3-SNAPSHOT was made
available around the end of April for both server and client. Note that
the updated documentation for the client is with the client as the
server and client are now released separately. No feedback has been
received yet. Work on producing a RESTful interface covering at least
import and export has started. As a consequence of a chnage made to
facilitiate deployment on Wildlfy icat will now be packaged as a .war
file instead of a .ear file. This has fixed the problem reported earlier
on deploying a RESTful interface side by side with a SOAP interface.

Steve also reported on the IDS development for which a snapshot is also
available. Rolf has deployed in but found that had disabled the
background data checking. Steve hopes that this can be restored but at a
level where it does not have too big an impact. A change is being made
to support file uploads from TopCAT using POST.

Wayne then reported on TopCAT. The remaining work preventing the next
release is the file upload. The file can be uploaded but he is not able
to see whether or not the operation was successful because of the
same-origin policy enforced by the browser. He is lookign for a
work-around. Next week he plans to use Balsamiq to mock up a new TopCAT
interface with the hope that it can be shown at the forthcoming
PanData[?](https://code.google.com/p/icatproject/w/edit/PanData) workshop
to attract feedback.

Tom reported that he had been working with Kevin to fix a problem when
the Oracle RAC nodes go down and no failover takes place. The solution
should appear in the installation scripts or at least be documented. Tom
also reported that as a test he had tried deleting all the
investigations for an instrument and that it took about a second for
each investigation (which is the top of a tree of course) so he resorted
to a direct operation on the database.

There were no AOB
items.

### Actions

 

|      |                                                                                   |                |
| ---- | --------------------------------------------------------------------------------- | -------------- |
| Item | Description                                                                       | Assigned       |
| 74.0 | Look into JDBC connector resilience with Wildfly                                  | Steve          |
| 74.1 | Document or implement in setup script the JDBC connector fix for Glassfish/Oracle | Kevin or Steve |
| 72.5 | Add authz rules to contrib directory                                              | Tom            |
| 61.1 | Put the simple ICAT browser into contrib when it is ready                         | Tom            |
| 60.3 | Finalise a release of IJP and send a note to the mailing list                     | Steve          |
