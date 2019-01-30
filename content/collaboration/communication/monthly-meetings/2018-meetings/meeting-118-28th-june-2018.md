---
title: Meeting 118 – 28th June 2018
date: 2018-06-28
---

Attendees: Rolf (RK), Stuart (SP), Sylvie (SR), Brian (BR), Alex (AD),
Maxime (MC), Jamie (JS), George (GC)

Apologies: Chris (CP)

Actions from previous:

113.1 – IDS has been released so action can be removed.

113.2 – Stuart to speak to Catherine about the status of this.

116.1 – Topcat 2.4.0 GUI tested by Sylvie along with a non-recall
download. Couldn’t test larger download due to storage D issue but since
Topcat 2.4.0 has been released this action can be removed.

Stuart apologies for the lateness of last meetings minutes, this was
because he was waiting to hear status of a graduate working on the ICAT
project, one graduate has been successfully recruited and will be
starting in November.

ICAT Components:

**ICAT Ansible (SP) –** Stuart has been tweaking the Ansible Jack wrote
to get it into a state where it works on Travis, Ubuntu and Redhat 6/7
as a prerequisite to the expunge timer problem in icat.server.

**Topcat (BR) –** 2.4.0 released. One small change since last meeting,
action buttons in plugins can now use the entity parameter in their
‘show’, so buttons can be chosen to be displayed based on the entity
as request by Jamie at ISIS. Any old plugins should not be broken by
this change, the parameter is ignored. However Brian advises testing
this and letting him know if you find that it does break your plugin.

**IJP (BR) –** Brian has experienced setbacks because the Slurm
installation seems to have overwritten condor along with its settings.

**IDS (RK) –** Released IDS server 1.9.0 along with storage file plugin
and the generic ids plugin. Fixes include the JMS session bug in the
notification transmitter that was discussed last time.

**Python ICAT (RK)** – Released 0.14.1 which allows use of the new write
ids API call.

Site Updates

**Diamond (SR)** – Sylvie reports in 9 months between October 2017 and
now there’s been 0.5 PB of downloads, compared to 0.3PB between in the
year between October 2016 and October 2017.

**ESRF (AD)** – Alex and Maxime have been working on something called
“ICAT +” a NodeJS, React and MongoDB application that allows
electronic log book functionality and the managing of complex metadata
to be integrated with ICAT. They hope to release the first version
before the end of the year. It allows people to comment on
investigations, non-key pair value parameters and rich metadata, such as
displaying graphs alongside investigations. Short term will be used
alongside Topcat but in the long run it will replace Topcat at the ESRF.
Stuart asks if Alex would give a demo at the next meeting.

**HZB (RK) –** Rolf reports he is installing the ICAT components to new
machines and hopes to be done by August.

Stuart reports that Diamond is investigating whether ICAT is the correct
tool for them with their ever increasing volume of data, which is
currently over 2B datafiles (compared to ISIS’ 17 million\!). This is
only in the planning stage at the moment.

Waffle.IO tickets

\#377 (pass row entity to action button show) is done and released in
the latest version of Topcat.

The ICAT schema changes are still in the Ready

The timers being expunged issue (\#8 in icat.utils) is still in Ready,
Stuart is still trying to reproduce it by installing the test
application which is why he was working on the Ansible scripts.

JMS session issue \#202 in icat.server is ready to be reviewed, Stuart
will assign Rolf the PR. Stuart says his change is similar to the one in
the IDS but not identical.

ids.server \#87 that is causing locks to not be released when an
exception is thrown in a thread was discovered at Diamond. Rolf says he
has a student starting in October that could fix it; Stuart is going to
ask Diamond if that’s okay or if it’s required to be fixed more
urgently.

The other schema changes will be discussed another time as there are
still schema changes waiting to be
implemented.

|       |                                                               |                 |
| ----- | ------------------------------------------------------------- | --------------- |
| Item  | Description                                                   | Assigned        |
| 113.2 | Organise a meeting for the discussion of a Topcat replacement | Catherine Jones |

Next meeting scheduled for Thursday 26th July 3pm UK time.
