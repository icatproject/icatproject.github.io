---
title: Database
---

This contains some guidance on setting up a database for ICAT and which
to choose.\
The database system must be supported by eclipselink and must support
transactions and enforce foreign key constraints. This includes most
database systems you are likely to want as explained at [the eclipselink
web
site](http://wiki.eclipse.org/EclipseLink/FAQ/JPA#What_databases_are_supported.3F) It
has been tested with: MySQL, Oracle and Derby.

You will need a schema/database with permissions for data definition
operations such as "CREATE TABLE ..." and for data manipulation
operation such as "INSERT INTO ...".

Installation of those ICAT components that require a database will
attempt to create the tables in the schema, but the schema itself must
exist.

If you are using [Glassfish](/installation/glassfish/ "Glassfish") You
must place a copy of the "JDBC Connector" for your database in the
lib/ext directory below the domain where you will install ICAT. You
should get the connector from the database supplier. In the case of
Oracle and MySQL these may be both included in the Glassfish
distribution but must be copied to the lib directory. For Derby no
action is required -- the connector is pre-installed.

# MySQL

MySQL must be installed with InnoDB support and you must ensure that
while installing ICAT the default engine is InnoDB. You can see the
default engine by entering  `show engines;` at the mysql command prompt.
 To change the default on Linux add the line

default-storage-engine=innodb

to the \[mysqld\] section of /etc/my.cnf and restart mysqld.

To fix an existing system you can use the ALTER TABLE command as
explained
in: <http://dev.mysql.com/doc/refman/5.1/en/storage-engine-setting.html>.
Don't forget to run _mysql_secure_installation_ if your package
manager has not prompted you for a root password for the MySQL server.

On more recent versions of MySQL/MariaDB the default character set has
been changed which results in some keys being too long and so tables do
not get created. To avoid this problem always specify the default
character set as utf8 when creating a database. For example:

create database icat DEFAULT CHARACTER SET utf8;

# Oracle

Applications must be aware that Oracle does not treat empty strings
correctly but stores them as NULL values. If you want your code to work
on Oracle and other databases you must code round this issue.

To work properly with an RAC installation some options need setting in
Glassfish. These will be set in future for updated components by the
setup scripts. For now, for each Oracle JDBC connection pool set the
following advanced properties:

- Validate At Most Once: 60
- Creation Retry Attempts: 10
- Connection Validation: Required
- Table Name: dual

# Derby

Derby is not recommended for production use. There is much less
experience of it.
