---
title: Configuring the pom.xml
---

# Introduction

The examples below are derived from the pom file for the icat.server but
the icat.server text has been replaced by `xxx.yyy` to reduce the risk of
writing accidentally to the icat.server area.

The maven repository is at [https://repo.icatproject.org/repo](https://repo.icatproject.org/repo). Anybody
may read it but writing is only available to authorized individuals. The
site area (where maven writes documentation for components) is
at [https://repo.icatproject.org/site](https://repo.icatproject.org/site).

# README.txt

This file contains URLs and giving the `xxx.yyy` as an example should look
like:

    xxx.yyy

    -------



    General installation instructions are at https://www.icatproject.org/installation/component



    Specific installation instructions are at https://repo.icatproject.org/site/xxx/yyy/${project.version}/installation.html



    All documentation on the xxx.yyy may be found at https://repo.icatproject.org/site/xxx/yyy/${project.version}

# pom.xml

The `groupId` should be `org.icatproject`

The `artifactId` should be one word (such as `topcat`) or two separated by a
dot such as `icat.server` (or in this case `xxx.yyy`)

The `version` should initially be `1.0.0-SNAPSHOT`

## \<properties\> section

should contain

     <properties>

         <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>

         <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

         <project.scm.id>github</project.scm.id>

         <gitUrl>https://github.com/icatproject/xxx.yyy</gitUrl>

     </properties>

where the `project.scm.id` identifies a section in your `.m2/settings.xml`
-- this will be discussed later.

Specifying the `gitUrl` simplifies the pom file.

## \<repositories\> section

this should contain

     <repositories>

        <repository>

            <id>ICAT Repo</id>

            <url>https://repo.icatproject.org/repo</url>

        </repository>

     </repositories>

to permit your pom file to find other icat components

## \<scm\>, \<issueManagement\>, \<licenses\> and \<organization\> sections

If you have specified `gitUrl` in the properties then the following will
require no changes:

    <scm>

       <connection>scm:git:${gitUrl}.git</connection>

       <developerConnection>scm:git:${gitUrl}.git</developerConnection>

       <url>${gitUrl}</url>

     </scm>



    <issueManagement>

        <url>${gitUrl}/issues</url>

        <system>GitHub</system>

    </issueManagement>



    <licenses>

        <license>

            <name>Apache License, Version 2.0</name>

            <url>http://www.apache.org/licenses/LICENSE-2.0</url>

        </license>

    </licenses>



    <organization>

        <name>The ICAT Collaboration</name>

        <url>https://www.icatproject.org</url>

    </organization>

## \<distributionManagement\> section

This section is used by maven to identify the site and repository areas
and how to write to them. This example should only need the xxx and yyy
substituting:

    <distributionManagement>

        <downloadUrl>https://repo.icatproject.org/repo</downloadUrl>

        <site>

            <id>repo.icatproject.org</id>

            <url>dav:https://repo.icatproject.org/site/xxx/yyy/${project.version}</url>

        </site>

        <repository>

            <id>repo.icatproject.org</id>

            <url>dav:https://repo.icatproject.org/repo</url>

        </repository>

    </distributionManagement>

The `<id>` value, in this case `repo.icatproject.org` again specifies a
section of the `~/.m2/settings.xml` file where authentication information
is stored.

## \<build\> section

this must start off by defining extensions with a subsection of the
form:

    <extensions>

        <extension>

            <groupId>org.apache.maven.wagon</groupId>

            <artifactId>wagon-webdav-jackrabbit</artifactId>

            <version>2.10</version>

        </extension>

    </extensions>

the version (2.10) is currently the most up to date but should be
changed when something better comes along.

This is followed by a plugins section with a specification of each maven
plugin used by the pom. It is good practice to list them all to ensure
that you get a know version. If you don't then you will get warnings and
error messages and the project may not build.  You will certainly need
the plugins for: compiler, site, deploy and release. For the release
plugin you might like to specify:

    <plugin>

        <groupId>org.apache.maven.plugins</groupId>

        <artifactId>maven-release-plugin</artifactId>

        <version>2.5.2</version>

        <configuration>

            <tagNameFormat>v@{project.version}</tagNameFormat>

        </configuration>

    </plugin>

so that the tag does not contain redundant information.

## \~/.m2/settings.xml

This file must contain at least the following:

    <settings>

        <servers>

            <server>

                <id>repo.icatproject.org</id>

                <username>uuu1</username>

                <password>ppp1</password>

            </server>

            <server>

                <id>github</id>

                <username>uuu2</username>

                <password>ppp2</password>

            </server>

        </servers>

    </settings>

where `uuu1`/`ppp1` is the username and password for webdav access to
`repo.icatproject.org` and `uuu2`/`ppp2` is the username and password for your
github account. This information will not be transmitted in plaintext.

# Testing the pom

The following command:

    mvn clean deploy site site:deploy

will produce a snapshot. To perform a release use:

    mvn release:prepare

    mvn release:perform
