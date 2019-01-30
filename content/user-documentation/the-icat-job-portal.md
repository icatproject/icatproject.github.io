---
title: The ICAT Job Portal
---

The ICAT Job Portal supports the submission of jobs to run on one or
more batch services, applied to datasets and/or datafiles selected via
the ICAT Data Service.

The web-based interface allows users to:

- select a job type to run
- search for and select datasets and/or datafiles to be supplied to
  the job(s)
- set other job options
- submit one or more instances of the job to the batch server(s)
- monitor the running status of each job
- view standard/error output of jobs
- cancel jobs that are in progress
- delete completed jobs

An IJP installation requires a central IJP server and one or more batch
servers (one per batch system to which the central server will submit
jobs). The central server's configuration includes:

- URLs of an ICAT and an IDS instance
- URLs of the batch servers to which it will submit jobs
- Definitions of the job types that it supports
- Default search filters for datasets and datafiles

A job type defines:

- a name for the job
- an executable to run on the batch system(s)
- whether job instances accept datasets, datafiles or both
- whether a single job can be run for multiple datasets / datafiles
- further (command-line) options to be passed to the job instance(s)

When the user submits a job, the IJP requests an estimate from each
attached batch server, and selects one from those that return the best
estimate.

Datasets and datafiles are passed to the executable by ID; the
executable must use the ICAT and IDS instances to retrieve the metadata
or contents. (The connection URLs and the session ID are also passed by
the IJP.)

The unixbatch batch server uses the unix batch system. It can be used to
test an IJP server installation (for example, it could be installed on
the same machine).

There is a separate distribution, ijp.demojobs, of sample job types and
scripts. The job types should be installed in the IJP server, and the
scripts on the batch server(s). The scripts (mainly written in Python)
include basic connectivity test scripts (e.g. report what was sent from
the IJP server) as well as scripts to perform simple IDS tasks such as
to create a new datafile, or to copy  a datafile to another dataset. The
scripts demonstrate how to check and extract the arguments supplied by
the IJP, and how to use ICAT and IDS to resolve the supplied dataset and
datafile IDs.
