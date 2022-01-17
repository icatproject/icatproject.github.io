---
title: ISIS Neutron and Muon Source
---

[STFC](https://stfc.ukri.org/)'s [ISIS Neutron and Muon Source](https://www.isis.stfc.ac.uk/) facility is a world-leading centre for research in the physical and life sciences at the STFC Rutherford Appleton Laboratory near Oxford in the United Kingdom. 

Our suite of neutron and muon instruments gives unique insights into the properties of materials on the atomic scale.

ISIS has been using ICAT since 2007 to catalogue raw data produced from all instruments.\
ISIS produces a mix of 'ISIS raw' format and [NeXus](https://www.nexusformat.org/) files. Metadata is extracted from the files and added to the catalogue to improve findability in the data discovery process.

All data produced at ISIS since 1984 has been catalogued and is
available. The ingestion process is based on ActiveMQ and is a mix of
C\# for business logic, C++ to read the binary format files and NeXus
components for reading NeXus files.

ISIS uses TopCAT as the web interface to data, and the catalogue is also
available in Mantid, via the ICAT API. A disk only IDS is used to
provide the data to users over https. Authentication is via the ISIS
user office and STFC's federal id system (Active Directory).

ISIS also issues DOIs for raw data using DataCite.

The ISIS Neutron and Muon Source data catalogue can be accessed here:
[https://data.isis.stfc.ac.uk/](https://data.isis.stfc.ac.uk/)

![Exterior view of STFC's ISIS Facility](/ral3.jpg "Exterior view of STFC's ISIS Facility")
