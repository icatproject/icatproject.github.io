---
title: Meeting 98 – 23 June 2016
date: 2016-06-23
---

# AGENDA

  - Actions from meeting 97 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE (Alex)~~
          - PollCat (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Jody)
      - IJP (Brian R)
      - ICAT Dashboard (Alex P-D)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Face to Face meeting for 2016 and NOBUGS (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present:Present: Steve, Kevin, Tom, Becky, Jianguo, Brian R,
Sylvie, Peter, Milan, Rolf, Alex dM, Shelley

Action 96.1 Release a snapshot of the Dashboard. This has gone into
production for ISIS but has not been formally released. This will be
addressed when Alex P-D is back.

  - Python-icat: Rolf reported that he had released version 0.11.0 with
    support for icat 4.7
  - IDS: Steve has been thinking about multiple servers and multiple
    caches. This will be discussed at RAL and then the ideas circulated
    unless the ideas turn out not to be useful.
  - PollCat:  Frazer has moved the code to the icatproject github.
  - SmartClient: Steve reported that there had been no changes and that
    he was still waiting for integration into TopCAT by Jody.
  - WebDAV: Kevin reported that Alex was due to make it more generic so
    that it could aslo be used by ISIS.  Octopus/CLF are considering
    using it. He also reported that there is a known vulnerability with
    WebDAV and that he working on a fix.
  - TopCAT: Kevin reported that Jody had deployed a new version for ISIS
    but that this is an ad-hoc snapshot.
  - IJP: Brian R reported that the new AngularJS GUI being developed by
    Becky is taking shape and that he is still  
    working on getting the RESTful API to the point where the GUI can
    use it. Generally this means changing the responses to return JSON
    objects with all the info that the GUI needs.
  - ICAT Dashboard: Kevin reported that  Alex P-D had installed it for
    ISIS. The results are interesting . It will be released properly
    once Alex is back.
  - repo.icatproject.org : Steve reported that this was now ready to  be
    published to by maven. To get to use it you just need
    a username/password to be stored on the server.
  - The NOBUGS abstract deadline is 1st July. Steve suggests paper on
    recent developments in ICAT and Tom suggests a separate publication
    on IJP as talks are limited to 15 minutes plus 5 minutes for
    discussion.
  - Rolf asks does anybody know anything about memory usage of glassfish
    in deployments? HZB are planning to buy hardware, so need estimates.
    Tom replied that STFC  use VMs and could circulate specs for them.
    The IDS is run on a physical box to get the best network
    performance.
  - Rolf told the meeting that HZB were adopting a data policy which was
     due to be published. There was an interst from the meeting in
    seeing this policy.
  - Tom announced that he is leaving Scientific Computing Department to
    become the ISIS computing group leader. He will be less directly
    involved in ICAT, but will appear from time to
time.

|          |                                                             |               |
| -------- | ----------------------------------------------------------- | ------------- |
| **Item** | **Description**                                             | **Assigned**  |
| 96.0     | Assign screencast role for the TopCAT demo                  | Tom           |
| 96.1     | Release a snapshot of the Dashboard                         | Alex/Steve    |
| 98.0     | Get Brian R a miredot licence for the IJP.                  | Steve         |
| 98.1     | Publish stats for STFC production deployments.              | Tom and Kevin |
| 98.2     | Distribute pointer to  HZB data policy when it is published | Rolf          |
