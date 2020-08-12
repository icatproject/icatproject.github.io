---
title: Meeting 126 – 25th April 2019
date: 2019-04-25
---

## Attendees:

Stuart, Chris P,  Brian R. Sylvie, Rolf, Alex

## Apologies:

Andy G.  Louise, George on leave.

Stuart: could we replace Hangouts with BlueJeans / Zoom stuff, and our
VC stuff?

Rolf: will switch to HZB’s videoconf rooms – pressure not to use
Hangouts (too)\!

Alex: would need to book VC room, but could do.  Stuart says BlueJeans /
Zoom can be used on a laptop.

## Component releases:

### ICAT Server (Stuart):

  - Nothing to report

### Topcat (Brian):

Topcat new snapshot (yesterday):

  - console warning if wait for plugins starts to get long
  - Add optional preamble HTML to login page, defined in lang.json
    (issue \#415)
  - Add showAsButton to authenticator configuration (in topcat.json) to
    give an authenticator its own login button (issue \#418)
  - Add extraLoginButtons to facility configuration (in topcat.json)
    (issue \#419)
  - Remove DOI and some login redirections from browser history (issue
    \#424)
  - Replace hard-wired entity inclusions in metatabs with calculated
    inclusions (issue \#405)

The login/authenticator configuration changes were motivated by ISIS
requirements, largely concerning users coming to Topcat from DOI landing
pages, who were finding the login page confusing; so more text needed,
and separate buttons for anonymous login and for registration with the
ISIS User Office); also, redirections within Topcat were making it
impossible for them to get back to the DOI landing page by using their
browser’s Back button.

### IDS Server (Rolf):

  - Last week released plugin and storage-file; have discussed changes
    additional log call main storage; have sent instructions for plugin
    authors.
  - New call only from upcoming version of ids server; so only update
    plugin then.
  - Mostly ready to release ids server; debate today, release tomorrow.

Stuart summarised the issue: behaviour of current IDS – when restoring
dataset level, if a file is missing, can cause an exception in the
plugin. Rolf would like IDS to throw an exception; but Alex relies on
current behaviour where it continues to restore data from the zipfile.
Stuart suggests a compromise of making the strict behaviour the default
but configurable.  Rolf: this may not work. If ICAT is not consistent
with storage, IDS will not work. Many other places where this can
happen. Risk of downloading a corrupt zipfile.

Stuart: how does it work for Alex at present?

Rolf: it will restore with ids 1.9.0 but zipfile will be corrupt. Alex:
impression was it was working fine; but it doesn’t. Test yesterday
produced an error. So it may never have worked \[after all\].

Rolf: new behaviour would throw an error, so DSRestorer would stop.

Stuart: is this reported back to the user?

Rolf: nothing happens: the file does not restore, and so \[sits at
Restoring…?\]

Alex would like to test again.  Consider adding \[expected\] location as
new datafile parameter, but will have to be added to every datafile.

Stuart: suggest Alex tests again tomorrow, if still fails, let Rolf
continue with his pull request, as it won’t make any difference to what
Alex sees.

Rolf: consider visit Grenoble to discuss further.

## Site reports

### ISIS

Stuart: nothing from ISIS (via George)

### Diamond

Chris: no real changes in last few weeks. Interested in progressing
discussions on IDS improvements, including new hardware.

Stuart: Rolf suggested using hard links, and that looks like a good
solution – one-line change to code, so trying it.  Considering a larger
change to the tidier process, perhaps use it to point to the area where
we create these links, and use it to clean them up. More thought needed.

Rolf: can’t use current tidier to do this.

Stuart: ? separate tidier to manage links? Delete old files, or delete
files until some threshold is reached.

### HZB

Rolf: upgraded production to 4.10, and it works.  Also tried using
schema changes, successfully.

Chris: DLS still to decide 4.9.3 vs. 4.10 – may not need schema changes.
