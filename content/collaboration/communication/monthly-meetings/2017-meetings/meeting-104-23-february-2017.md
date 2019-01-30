---
title: Meeting 104 – 23 February 2017
date: 2017-02-23
---

# Agenda:

  - Actions from meeting 103 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE~~
          - PollCat (Frazer)
          - SmartClient (Steve)
          - WebDAV (Tom Gowland)
      - TopCAT (Jody)
      - IJP (Brian R)
      - ICAT Dashboard (Tom Gowland)
      - Multi-container support (Steve)
      - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Jody, Sylvie, Tom Gowland, Frazer, Kevin, Gordon, Brian
Ritchie, Jianguo, Andy, Milan, Alex, Shelley, Tom Griffin, Rolf, Peter

Action 102.1: Rolf has not yet completed this action because the
suggestion is first dependent on another change to the IDS regarding
internal logging.

Action 102.2: Brian R. has not done this yet due to there being too many
changes before the new releases

  - ICAT Development – Steve reported ICAT 4.9 is near to release. He
    reported that there is one more change that he’d like to make to
    separate the Lucene indexing such that two ICATs can rely on one
    Lucene index. There is still testing that needs to be done to
    overcome a bug that has been preventing this until now. Steve also
    reported that there has been a request from Diamon to allow the
    browsing of data in TopCAT by the data structure. Tom Griffin raised
    a concern about how to handle permissions on the nodes in this
    separate structure. Steve agreed to look into how rules would be
    enforced at this level. Steve made a final point about making ICAT
    more portable. A recent foray into ICAT by ELI-ALPS has shown up the
    problems with deploying on WildFly. Steve thinks this is due to
    WildFly not being able to find the properties files relatively. A
    possible solution will be to use a similar principal as with the
    logback XML files where the properties files are packaged up into
    the War file. Further to this point, Tom Griffin asked about
    Glassfish 4.1 support and Steve responded by saying new releases
    will gear towards supporting Payara instead.
  - Python-ICAT – Rolf reported that he is waiting for ICAT 4.9 to be
    released before making any further changes to Python-ICAT.
  - IDS – Steve reported that he has looked into Rolf’s pull-request
    which contains his work on locking. Steve sent a couple of
    suggestions back to Rolf and Rolf asked for some clarification on
    one of the points.
  - PollCat – Frazer reported that Sylvie has started to look into using
    PollCat for Diamond. Once there is a more formal plan in place,
    Frazer said he will look into providing a better installation path
    for PollCat.
  - WebDav – Tom Gowland reported that there is an upcoming deployment
    for ISIS. He also reported that there have been issues with datasets
    which contain many datafiles which is mainly due to the way in which
    Windows handles the files. When you mouse over a directory in
    Windows, it will attempt to load all of the information beyond that
    directory even though you might never have wanted that data in the
    first place. The best way to see if this will affect users of WebDav
    will be to see what comments come out of the deployment.
  - TopCAT – Jody reported that TopCAT 2.2.1 is now out. He is still
    doing some tinkering for Diamond and hopes that this will resolve
    any issues they are still having. He also reported that 2.3.0 is now
    nearly ready but before release it will need some more documentation
    of the plugin API. There was also some general discussion about
    Jody’s idea of simplifying the TopCAT configuration from the
    user’s perspective. This would involve extending the admin section
    of TopCAT to include a section where users can edit their TopCAT
    settings with explanations alongside. There was also an idea from
    Frazer which was to split the JSON file up into multiple smaller
    files to make TopCAT more easily configurable.
  - IJP – The graduate student (Thomas Attwood) did some work on
    supporting the versioning of datasets. He also worked on provenance
    linking betweek jobs. IJP now also checks that there is a
    corresponding application for each job type rather than making up
    its own. Brian has also been working on some changes to the
    appearance of the TopCAT plugin, introducing interactive sessions
    into the IJP and expanding the configure job dialogue.
  - Dashboard – Tom Gowland reported that he had been helping Alex at
    the ESRF to complete his Dashboard installation. The ESRF reported
    that they were using the Dashboard daily and they would love to see
    some more configurability. Tom Gowland suggested that if they had
    any specific wishes that they should add them to the GitHub issues
    for Dashboard. Tom also said that he had been working on the bugs
    that had been reported by the ESRF team and also adding a contacts
    page so that users with queries or issues could raise them by
    contacting the right people.
  - Multi-Container Support – As previously reported, this should be
    made more practical with the addition of properties files to the War
    file.
  - Installation – There was some general discussion about the
    documentation of ICAT as a whole. Steve mentioned that one outcome
    of the ICAT steering group was for Andy and Shelley to provide some
    feedback about how to improve the ICAT website. Tom Griffin
    mentioned that he had recently installed a piece of software which
    only required a Vagrant install in order to get a test copy up and
    running to see if it was fit for purpose. Tom said that this could
    be useful for those trying to get started with ICAT.
  - Issues from ICAT production deployments – Andy and Alex reported
    their performance issues which seem to have been fixed by the newest
    TopCAT release. They intend to closely monitor the situation to see
    if anything changes.
  - AOB – Andy submitted a proposal to E-Infra 12 which was declined.
    Rolf will be travelling to the ESRF to have discussions about the
    IDS. Andy reported that Alex and Damien will visit STFC to learn
    about TopCAT plugins. Kevin reported that he has just started work
    alongside the European Space Agency who want to use ICAT for their
    new Mars Rover
project.

## Actions

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |
