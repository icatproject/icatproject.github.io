---
title: ALBA Synchrotron Light Source
---

[ALBA](https://www.cells.es/) is a 3rd generation Synchrotron Light facility located in Cerdanyola del Vallès, (Barcelona), being the newest source in the Mediterranean area.

It is a complex of electron accelerators to produce synchrotron light, which allows the visualization of the atomic structure of matter as well as the study of its properties.  

ALBA began cataloging raw data using ICAT in 2020 when the integration with the first instrument, [BL11 NCD-SWEET](https://www.cells.es/en/beamlines/bl11-ncd) (SAXS/WAXS beamline), reached production status. Efforts are ongoing to gradually integrate the remaining instruments in the facility into the catalogue.

Various data formats are used at the moment due to the heterogeneous landscape of techniques currently in operation. However, efforts are being made to gradually converge towards NeXus/HDF5.

The ingestion process uses ActiveMQ brokers as the entry point and to decouple it from the normal operation of the instruments, while the logic is implemented using Apache Camel in order to integrate and enrich the ingested data with metadata from the various information systems at the Synchrotron, including, but not limited to, our User Office Portal. The components used to parse and send data to the ingestion process are written using Python.

ALBA uses the DataPortal frontend and the ICAT Plus REST API layer developed by the ESRF on top of the core ICAT stack. Authentication is done through [ALBA User Office](https://useroffice.cells.es/) accounts, while Umbrella support is being considered for the future.

ALBA recently signed an agreement with DataCite to mint DOIs for raw data issued from public experiments.

The ALBA Data Catalogue is currently not yet accessible from outside the facility but it is expected to be opened in 2022.

![Exterior view of ALBA](/alba_birds_eye.jpg "Exterior view of ALBA")
