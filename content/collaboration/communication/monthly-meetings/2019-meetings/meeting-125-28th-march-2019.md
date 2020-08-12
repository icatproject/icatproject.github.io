---
title: Meeting 125 – 28th March 2019
date: 2019-03-28
---

## Attendees:

Alex de Maria (AM), Brian Ritchie (BR), Stuart Pullinger (SP), Rolf
Krahl (RK), Chris Prosser (CP), Silvie Da Graca Ramos (SR), Louise
Davies (LD), George Christian (GC), Andy, Maxime

## **Component Updates**

### ICAT server (SP):

  - Released 4.10.0 \`icat-server\` and \`icat-client\`
  - Schema changes:
      - Added pid and enddate to Study
      - Rofl’s schema changes
      - Need to run schema upgrade scripts to upgrade
      - Only additions to schema, minor changes needed
  - Issues:
      - Steve used MireDot to generate REST API docs
      - Licence has experied – awaiting a new licence
      - Proprietry software but free for open source
      - Will generate docs for previous releases once this has happened
      - Waffle.io (used for kanban board) is closing
      - Move issues across to Github Projects

### IDS (RK):

  - Snapshot releases for \`ids-server\`, \`ids-plugin\`,
    \`ids-plugin-file\`
      - main change: support for file system locking
          - if plugin decides to implement, allows for concurrent access
            to storage

### Python-ICAT (RK):

  - Released \`python-icat\` 0.15.0
      - Supports icat-server schema changes
      - Fixes some compatibility issues
      - Last version to support Python 2.6

Q: Andy: python 2.6 support dropped – will 2.7 still be supported?

RK: When python-icat v1 is released, likely will drop support for Python
2 then, following on discussions on the mailing list

SP: scripts in icat-server are Python 2 only, so work needed to convert
to python 3  
Should we convert to support both or just support python 3?  
RH6 only has python 2 as default, so sensible to make them support both

RK: shouldn’t be too hard to support both for small scripts

SP: aim to support both

### Topcat (BR):

  - Released topcat 2.4.3
      - contains schema changes from icat-server 4.10.0
      - Minor change from last snapshots: remove spinners for cells that
        are blank
      - component updates in vagrant/travis build
      - Travis still sporiadically fails, some attempts have been made
        but no definitive fix

## **Site Updates**

### DLS (CP):

  - 2 mechanisms for user recall: standard HTTPS and Globus/PollCAT –
    lots of user recalls on both
      - HTTPS: 2 user recalls had issues to do with tape, IDS timed out,
        script normally restarts recall but the scripts didn’t have
        enough storage to retrieve the files – resolved by restarting
        IDS
    
      - 
      - GLOBUS: millions of files requested/several TB of data, swamped
        IDS, made us reconsider PollCAT design
  - Everything else seems fine

SR:

  - changing ingest – putting into pre-prod soon

Q: Andy – how many times do you copy data when moved in the Globus
system?

SR – Diamond uses datafile and not dataset level storage

SP – Scans table in TopCAT directly for downloads marked as Globus, and
ignores HTTPS. Files are copied from tape to StorageD, then copied to
IDS main storage, then copied into seperate Globus download area

SR – google group mailing issue about copying data might seem similar,
but believe Diamond issue is seperate

Andy – tape storage managers want to reduce copies to only 1 copy rather
than 3

RK – IDS has intermediate step if you have dataset where archive is
copied to cache, and then it is extracted to main, datafile does not
have this step. This extra step has been an issue from 2016, but it is
difficult. Would like to refactor some code in IDS before tackling this
issue, so no promises of when a fix will happen. You will still have 2
copies – 1 in archive and 1 in main, this is hard to avoid.

Q: AM – can we restore data automatically into main area?

RK – no

Andy – “restore to original place” – aka main storage

RK – IDS doesn’t know about tape storage, so it must request from tape
first, it is built with archive and main. Client request comes in, IDS
triggers restore, reads ZIP from archive and restores to main.

SP – can storage system unzip to main behind IDS’s back? IDS checks if
it is on disk first, before it goes to archive and if it’s available it
can use it. If ids-plugin isn’t responsible for restoring, and a
seperate system unzips?

RK – would need to talk directly to tape storage, but then would need to
code all backends. No direct communication between IDS-server and
storage backend. IDS talks to main storage plugin and then archive
storage plugin. No direct way to avoid this.

### HZB (RK):

  - Nothing to report

## **AOB**

### Diamond recall bug

SP – Diamond problems with restarting recall where IDS needs to be
restarted – seems similar to bug (issue \#87) where IDS locked files
when recalling, but if thread crashed then the files would remain locked
until IDS restarted. Check Diamond has a version of IDS which includes
this bugfix and if it doesn’t then upgrade.

RK – fixed in IDS 1.9.1

### Plugin Logging

SP – Diamond StorageD plugin, most ids-plugins don’t have much logging.
RK’s student has solution to get logging in plugins?

RK – You can use logging in the plugins, using log4j, one caveat: you
need to provide a logfile config that shadows logfile from IDS-server.
Inconvinient because logging for IDS-server is in plugin, but it works.

SP – where is this fix recorded?

RK – issue \#76, some documentation in this issue

SP – next version of IDS may require recompilation for plugins, so might
be a good idea to look at logging now to save multiple recompilations

RK – away for next 2 weeks, but after may provide information on how to
modify plugins delete should not throw exception then file to delete
does not exist additonal call lock. Suggest adding these things to
archive storage, otherwise need to add dummy method

### Moving instead of copying in Diamond

CP – Manually deleting data from IDS, response from RK that this isn’t a
good idea. Want to move data from IDS cache

SP – on globus IDS files are restored from archive to main like normal
IDS, these files are then copied to seperate Globus area. Can we just
move them instead of copying? Problem: 2 requests fo same file, IDS
thinks it’s there for second file but file has been moved by request for
first file

RK – clarify: you want to move files from main storage to transfer area?
This is a problem as IDS doesn’t know file is not there. IDS might
restore things twice. Can you not make a hard link?

Silvia – Is it possible to change permissions in main storage area so
users can access?

SP – Globus has it’s own user, don’t know how this will work with
permissions, but hard link might work

RK – hard link will only work if both areas are on same file system

Silvia – IDS has functionality to remove files when we want, different
process to perform

CP – user1/user2 causing double recall from archive is fine, this is
rare case and offset by increase in move efficiency

RK – should be fine, deleting files from datafile level storage is fine

CP – so move works, but less efficient in multiple users requesting same
file

Silvia – hard link might be useful for multiple users case

RK – you can make hardlinks for file to users area, when IDS removes
file from main storage this will also remove hard links. Still have to
check that permissions are seperate between hardlinks and not shared.

### Dataset level issue

SP: RK is proposing change when zip requested from archive, when files
don’t exist in zip or there are unexpected files, throw exceptions.
Concern this is not suitable for ESRF where it ma be better to continue
working and log errors instead. Is there a comprimise – e.g. config
option?

AM: Understand RK’s POV, but this is the best we can do. Sometimes
people rename files and it’s impossible to find files. So we’d like to
make best effort to restore what we can.

RK: you should make it consistent

AM: you are imposing this constraint

RK: IDS fundamentally relies that the data in ICAT is correct. If data
is not correct you don’t get reliable. If the files in the ZIP don’t
match then the data is not correct. IDS ignores files with null
location.

AM: we like that the location has a record of where it was

RK: location is controlled by IDS, if it’s not then IDS is unstable

SP: is it true that to accomodate RK’s change, you need to scan all
files to check that they match what IDS expects – this is a big job

AM: this isn’t too much of a worry, the worry is removing location that
is useful to the user

RK: location isn’t supposed to e useful for user, meant to be
administrative field for IDs to use

AM: would prefer not to delete location – our IDS is working well

RK: you will run into strange errors: restore will get stuck with an
error. IDS relies on location, if it’s not correct then IDS is not
correct

SP: could IDS be written that if file is missing you throw the error, in
the catch you check config option and skip this file, otherwise rethrow
exception

RK: you could do this, but doesn’t remove problem that IDS assumes
location is correct and exists

SP: ICAT/Diamond doesn’t have this problem because datafile level
storage

RK: IDS will still file if it doesn’t exist

SP: But if it fails for 1 file it will continue to next file, unlike
dataset storage.

AM: might be possible to use own field/parameter to record the previous
location, then location can be nulled

SP: look at how ingest works and look for inconsitency, look for skips
