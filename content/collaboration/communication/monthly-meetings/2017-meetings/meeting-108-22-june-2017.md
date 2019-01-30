---
title: Meeting 108 – 22 June 2017
date: 2017-06-22
---

# Agenda:

  - Actions from meeting 107 (Kevin)
  - Component development
      - ICAT (Steve)
      - ICAT Manager (Alex)
      - Python-icat (Rolf)
      - IDS (Steve)
          - ~~FUSE~~
          - PollCat (Frazer)
          - ~~SmartClient (Steve)~~
          - IDAV (Tom Gowland)
      - TopCAT (Jody)
      - IJP (Brian R/Alastair)
      - ICAT Dashboard (Tom Gowland)
      - ~~Multi-container support (Steve)~~
      - ~~Installation (Steve)~~
  - Review of website (Stuart)
  - Next F2F Meeting
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Kevin, Brian Ritchie, Tom Gowland, Jody, Stuart, Rolf, Peter,
Andy

Apologies: Milan, Steve (who had produced written reports for the
meeting)

Actions from
107

|          |                                                                                                |               |
| -------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Item** | **Description**                                                                                | **Assigned**  |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf          |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie |
| 106.1    | Produce a report detailing the suggested schema changes                                        | Steve         |
| 106.2    | Produce response to Andy’s review and an action plan to address the problems.                  | Steve         |
| 107.1    | Ask Andy to consider next F2F meeting                                                          | Steve         |

**Action 102.1:** Rolf reported that he is waiting for the locking
mechanism to go into the IDS. He was previously unable to run the IDS
test suite and therefore couldn’t work through Steve’s suggestions about
his original pull request. Steve has now made the relevant changes to
the test suite to ensure that Rolf can run the tests and can now debug
the problems.

**Action 102.2:** Brian reported that there are further changes which
need to be made before any release.

**Action 106.1:** Steve reported that he has started a report about
schema changes but wants to have another think about it before
releasing.

**Action 106.2:** Steve reported that this will probably be done by the
next meeting with help from Stuart’s input who has been installing the
ICAT stack with no prior knowledge.

**Action 107.1:** Andy reported that the next face to face meeting will
most likely be hosted at STFC in September or October. Rolf reported
that there will be RDA (Research Data Alliance) meeting in September (19
^(th) – 21 ^(st) September <https://www.rd-alliance.org/> ) and Andy
reported that there is an ICALEPCS meeting in October (8 ^(th) – 13
^(th) October <http://www.icalepcs2017.org/> ).

Component Development

**ICAT** – Steve reported the ICAT server 4.9.0, ICAT Lucene and 4
authorization plugins have been released to work on Payara. There are
also now separate pages for GlassFish 4.0 and Payara releases which
should avoid any confusion about what components work with what.

Steve also reported that the GlassFish 4.0 issues have now been
understood. The incompatibility with GlassFish in the ICAT Lucene has
been traced to the use of lambda functions. There is also one of these
Lambda functions in the IDS.server 1.8.0 snapshot. In the case of the
IDS, this lambda function can simply be removed. This makes the code
less clean but will provide a solution for an upgrade for DLS. However,
after 1.8.0, Glassfish 4.0 will no longer be  supported. Steve said that
he would probably try again to see if all components now made available
with Payara also work with WildFly.

**Python-ICAT** – Rolf reported that there was a 0.13 release which was
waiting for ICAT server 4.9.0 to be released. There are some
incompatibilities with previous versions in 0.13 and Rolf advised that
old code may need to be updated to work with the new release.

**IDS** – Steve reported that the IDS 1.8.0 snapshot has been made
available along with the storage\_file plugin. The plugin now has a
different interface as it now has a properties file passed to it rather
than trying to find its own properties. This means that all of the
run.properties for the IDS and its plugin are in the same file.
Unfortunately, Steve failed to check in the updated storage\_test which
caused a problem for Rolf. There are a number of other small changes
that Steve wants to make before 1.8.0 is released. These are generally
related to downloading very large numbers of files.

**IDAV** – Tom reported that the MyData view in IDAV was now in place
and was just awaiting some user testing to get further feedback.

**IJP** – Brian reported that he has been working on a batch connector
for HTCondor. He is developing it in Python as the Condor Python library
is very good. He reported that he is still some way from connecting this
up to work with the IJP.

**Review of website** – Stuart reported that he has been following
installation documents on the ICAT website without any further help.
Along the way, he has been making notes about his experience and using
the SSI (Software Sustainability Institute) guidelines to help shape his
report. Stuart then went on to share his main findings. His main
concerns were regarding the organisation of information and
documentation and at times he struggled with finding where to look for
information.

At times during the installation process, he would have to be
referencing information on three or more separate pages (for example:
installation instructions, schema and project summary pages). Stuart
also said that much of the documentation assumed prior knowledge and
therefore wasn’t very friendly for beginners.  Andy agreed on this point
in particular and felt that the installation process should be
consolidated into one page in an easy-to-follow way.

Stuart said that the SSI categorises uses in different classes. He
thinks it would be useful to consider these classes when thinking about
the organisation of information. Stuart would consider the classes to be
as follows:

  - End User – The person who actually ends up using the software once
    it is in production
  - Installer – The person who only wants to install an instance of the
    software
  - API User – The person who writes software which will user the REST
    or SOAP API
  - Developer – The person who actually wants to contribute code to the
    software project

Stuart also said that the final category “Developer” could be split into
those that actually have write access to the repositories and those who
don’t.

For a beginner, Stuart said that it would currently be very difficult to
understand what ICAT actually does, what it is, what it looks like, who
will use it, how it will be used and where the data comes from in the
first place. He also said that there should be more help available for
developers which explains how to contribute code and patches to the
project.

His main recommendations were to re-organise the website according to
groups of people. He reported that he was going to be researching
websites that already to this well. Andy referenced the Django website (
<https://www.djangoproject.com/> ) which he thinks does this well.

Overall, Stuart said that he agrees with all of the document that Andy
had previously produced on this subject.

108
Actions

|          |                                                                                                |                |
| -------- | ---------------------------------------------------------------------------------------------- | -------------- |
| **Item** | **Description**                                                                                | **Assigned**   |
| 102.1    | Send message to icatgroup explaining proposed modification to plugin interface for IDS locking | Rolf           |
| 102.2    | Produce new releases of IJP components                                                         | Brian Ritchie  |
| 106.1    | Produce a report detailing the suggested schema changes                                        | Steve          |
| 106.2    | Produce response to Andy’s review and an action plan to address the problems.                  | Steve + Stuart |
