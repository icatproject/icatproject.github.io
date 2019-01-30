---
title: IDS Smart Client
---

# Purpose

The purpose of the IDS Smart Client is to allow large quantities of data
to be transferred to your machine from a remote IDS instance. This could
be many small files or one very large file. It is specifically to cover
the case when the web service interface of the IDS to get the data
directly is not convenient because the total volume of data is too
large.

# Architecture

A "personal server" runs on your machine. You issue requests to it from
a command line or GUI or from TopCAT. Files are downloaded individually
from an IDS and stored in a location within your home directory. The
location relative to to you home directory is *smartclient/\<dns name of IDS\>/\<icat.location\>*.
where icat.location is the value of the
Datafile.location held in icat. It is planned to make this configurable.
It is possible that two IDS instances may have files with the same value
of icat.location which is why the dns name of the IDS appears in the
file path. The server is distributed with a GUI and, except for Windows,
a CLI. Invoking the GUI or the CLI will cause the server to start up if
it is not already running.

When you come to download your basket in TopCAT you will be offered the
possibility to download using the smartclient

Both the GUI (which is currently not a thing of beauty though there are
plans to make it look nice) and the CLI allow you to see how many
transfers are queued. Stopping the GUI does not, by design, stop the
server component.

# Installation

It is distributed as a .deb for Debian based systems, as an RPM for
RedHat based, as a .exe for Windows and as a .dmg for the Mac.
See [available installation packages](https://icatproject.org/misc/smartclient/).
