---
title: ALBA Synchrotron
---
[ALBA](https://www.cells.es/en) is a third-generation synchrotron light source facility and a key pillar of the Spanish and European Research Area, providing advanced research capabilities and a broad range of state-of-the-art scientific instrumentation to academic and industrial users. Located near Barcelona, in Cerdanyola del Vallès, ALBA accelerates electrons to nearly the speed of light, producing synchrotron radiation with exceptional brightness and stability. This light is delivered to specialized beamlines operating across a wide spectrum of techniques, enabling researchers to explore the structure and properties of matter from the atomic to the macroscopic scale.

As a multidisciplinary research infrastructure, ALBA supports scientific communities in areas such as life sciences, chemistry, materials science, nanotechnology, environmental sciences and cultural heritage. Its beamlines and complementary facilities — including advanced microscopy and multimodal characterization platforms — allow researchers to study complex systems under realistic conditions and across multiple length scales. Each year, thousands of national and international users access ALBA’s facilities, contributing to high-impact scientific publications, technological innovation, and industrial competitiveness.

ALBA is now preparing its transition from a 3rd to a 4th generation synchrotron through the ALBA II upgrade program. This transformation will combine the complete renewal of the accelerator complex with the modernization of existing beamlines and the construction of new optimized long beamlines, taking advantage of adjacent land reserved for future expansion. In its first phase, ALBA II is expected to increase the number of operational beamlines from ten to seventeen, with the potential to reach twenty-six in later stages.

![Exterior view of ALBA](/alba.jpg "Exterior view of ALBA Synchrotron.")

Since 2023, ALBA has operated its ICAT data catalogue infrastructure on Kubernetes. Deployment is achieved through the publicly available Helm chart [icat-k8s](https://artifacthub.io/packages/helm/alba-helm-charts/icat-k8s), which simplifies installation and enables fast onboarding of ICAT services in Kubernetes environments.

On top of this infrastructure, ALBA uses the Data Portal developed by the European Synchrotron Radiation Facility, the [Data Portal](https://gitlab.esrf.fr/icat/data-portal) to provide a user-facing interface to the catalogue.

Data ingestion into the catalogue is performed asynchronously through [PACER (data ingestion engine for ICAT)](https://github.com/ALBA-Synchrotron/icat-pacer). The PACER is a high-throughput, event-driven ingestion service for ICAT that uses RabbitMQ to reliably queue and process metadata, enabling scalable and decoupled data cataloguing workflows.

The ALBA Synchrotron’s Data Portal is accessible at  [data.cells.es](https://data.cells.es/) and is available for anyone with a [User Office](https://userofficesystem.cells.es/) account to browse public data with no embargo.
