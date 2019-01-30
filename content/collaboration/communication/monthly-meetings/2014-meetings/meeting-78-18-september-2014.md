---
title: Meeting 78 – 18 September 2014
date: 2014-09-18
---

# Agenda

  - Actions from meeting 77 (Steve)
  - ICAT development (Steve)
  - An eclipse based ICAT editor  (Christophe)
  - IDS development (Steve)
  - TopCAT development (Wayne)
  - IJP development (Brian R)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Apologies: Milan and Alistair

Present: Wayne, Steve, David, Rolf, Andy, Kevin, Christophe, Brian M and
Brian R

Unfortunately Anton Telechev and Matt Viljoen were both unable to attend
because of problems with hangouts. I hope to understand what went wrong
so that we get it right next time.

  - Action 77.0 – Steve has added a couple of people to the icatgroup
    list – including Andy.
  - Action 77.1 – Steve updated the road map as agreed at the last
    meeting. The main change was to include less in icat.server 4.4.0.
    so that it could be released sooner. This had been advertised. One
    person said he was happy and nobody opposed it so the word “Draft”
    has been removed.
  - Action 75.1 – This action relating to topcatadmin is no longer
    relevant as we are now thinking about TopCAT 2
  - Action 75.4 – Andy has prepared a set of Use Cases relevant to
    TopCAT these should be publicised very soon.
  - Steve reported that progress with icat.server 4.4.0 is good. He has
    two major things to solve – “the DISTINCT problem” which was a hack
    introduced  to avoid multiple copies of the same entity being
    returned when someone was authorized by more than one route and
    authz to include projections. As the former is a bug rather than an
    enhancement it will be tackled first. A release is expected in about
    a month.
  - Christophe presented an Eclipse based ICAT editor. This has
    functionality conceptually similar to that of ICE but is much more
    pleasant to use and requires no installation. He had a problem with
    an earlier version with huge combo box menus but has been able to
    introduce a filtering mechanism to avoid this problem. It will be
    made generally available very shortly.
  - Steve reported that updates to the various IDS components had been
    made he referred to the release notes such as [those for the
    server](http://icatproject.org/mvn/site/ids/server/1.2.0/release-notes.html)
    and for the
    [client](http://icatproject.org/mvn/site/ids/client/1.1.0/release-notes.html)
    . There was a brief discussion on the limit imposed by the IDS
    client on the size of URLs that it will send as GET calls. This may
    result in a bug report.
  - Wayne stated that TopCAT 1.12.0 had been released. The alternative
    layout proposals from Anton were discussed however as mentioned
    above he was unfortunately not connected in. Anton’s diagrams seem
    to show support of only one ICAT rather than multiple ICATs. Wayne
    liked the generally simpler views that Anton presented and will
    incorporate what he considers to be improvements from Anton. Ideas
    which are not accepted will be discussed. Wayne will also make sure
    that the use cases from Andy are accommodated by the design. There
    was a brief discussion about the “shopping cart”. Wayne explained
    that for single data files, datasets or investigations they could be
    downloaded immediately without using the cart. Andy was interested
    in having some visualization features if practical and also being
    able to see more of the information that is available in ICAT.
  - Brian R described the work he had been doing on the IJP writing a
    batch interface to talk to Platform LSF. The IJP has been modified
    to talk to a standardised batch interface of which we now have
    three. Andy said that they had potential users but they would need
    to have support for [OAR](http://oar.imag.fr/dokuwiki/doku.php)
  - Under AOB, Andy asked how to produce a robust ICAT deployment. Steve
    said that since icat.server 4.3.3 multiple servers could communicate
    with one database but they must be correctly configured. There is
    also the issue of configuring glassfish to make good use of an
    Oracle RAC
system.

# Actions

| ITEM | DESCRIPTION                                                                                                   | ASSIGNED   |
| ---- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| 78.0 | Release Eclipse based ICAT editor                                                                             | Christophe |
| 78.1 | Merge Anton’s material and try to satisfy TopCAT uses cases from Andy.                                        | Wayne      |
| 78.2 | Make sure that install scripts and/or documentation includes configuration of glassfish for Oracle RAC system | Kevin      |
| 75.4 | Submit TopCAT Use Cases/requirements                                                                          | Andy       |
| 74.0 | Look into JDBC connector resilience with Wildfly                                                              | Steve      |
| 61.1 | Put the simple ICAT browser into contrib when it is ready                                                     | Condie     |
| 60.3 | Finalise a release of IJP and send a note to the mailing list                                                 | Steve      |
