---
title: Compatibility
---

# Versions and Backwards Compatibility of all ICAT components

## Version Numbers

The customary, major, minor and patch version will be used -- e.g.
4.3.0. Major changes which break backwards compatibility should show as
a new major version, new functionality as a minor version and the last
number, the patch version,  is increased for bug fixes,

## Lifecycle

Support will only be provided for the highest patch of a minor version.

After minor version releases, the highest patch of the previous minor
version of ICAT will be supported for six months. For example 4.2.5 will
be supported for six months following the release of 4.3.0

After major version releases the highest numbered previous version for
twelve months. For example 3.3.4 will be supported for twelve months
following the release of 4.0.0

## Dependencies

If one component of ICAT has one or more other components of ICAT
dependent upon it  then new releases of that component will not be
considered as having been made until all dependencies are working.

## Backward compatibility and migration support

A supported migration route (e.g. database migration tools) will be
provided to upgrade to the subsequent version of any ICAT component.

## Contrib

It is the responsibility of users of a contrib component to verify the
compatibility of the contrib with the other components.
