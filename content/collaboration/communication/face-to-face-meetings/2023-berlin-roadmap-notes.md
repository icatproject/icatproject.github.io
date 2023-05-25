# ICAT roadmap

:::info
:bulb:This template is a product roadmap template that helps you finish the product roadmap.
:::

## :ballot_box_with_check: ICAT project

:::success
Describe the product you want to create a roadmap.
:::

## :calendar: STFC ICAT roadmap

- DataGateway 
    - release progress bar for retrievals
    - release search improvements
    - complete UI for data upload
- Diamond Data Store
    - data publications work
    - data upload work
- ISIS
    - metadata already available via B2FIND
    - follow-up to make metadata available in the PaN portal
- EPAC data pipeline
- Improvements to deployment - work on containerisation and orchestration
- Requirements gathering for a Dashboard
  - download statistics - issues around keeping track if the download was successful
  - [IRUS](https://irus.jisc.ac.uk/r5/about/)/[COUNTER](https://www.projectcounter.org/) (solution from eData and ePubs)

## :calendar: ESRF ICAT roadmap

- UX review of data hub to make it more user friendly
    - automatic anonymous login
- Modularisation of the UI/DataHub using monorepo approach
- Trigger data analysis from DataHub (using VISA)
- new techniques cryo-ET, paleontology - building specific front-ends
    - micro-front ends for new techniques
- improve search using possibly what STFC developed
- sample tracking - second version
- dashboard - based on elasticsearch/ICAT+
- help other users coming in the collaboration 
    - help update website etc.
- sort out etherpad complaints
    - Pads being corrupted, possibly due to an EP plugin
- improve PDF export in e-logbooks

## :calendar: HZB ICAT roadmap

- integration with B2FIND: OAI-PMH endpoint is already available and they have it ingested in the demo site
- search-api - work on the data model mapping
    - integrate onto PaN portal
    - need to rework PaNOSC data model
- Handles, rework prototype
- Experimental storage standardisation?
- SSO
- Using Datahub just for e-logbook functionality
    - Time stamped event based
    - Not many users, but some really rely on it
    - Both user events and machine events
    - Can this be made into a standard (core?) ICAT component?
    - interested in export in machine-readable form - exchange format for logbooks
    - persistent storage for e-logbooks
- Decide new web frontend to replace TopCAT
- Create a web formular for data publications
- Sample database and PIDs

## :calendar: ALBA ICAT roadmap

- ICAT modules ready for publication - 2 beamlines at the moment, want to extend to more beamlines (e.g. Lorea - new beamline)
- Working on deploying all ICAT components in Kubernetes
- Ingester - Upgrading our current ingester to use the new data model from our new User Office application
- Two-level storage - New tape archiving system and working on the storage plugin
- Search API and scoring service deployed
- Replace authentication plugin with keycloak


## :calendar: SESAME ICAT roadmap

- Use the latest ICAT version
- Integrate short term storage
- Enhance in-house scripts for ingestion


## :calendar: Sirius ICAT roadmap
- Use of ICAT in development mode;
- Integration of ICAT with the Assonant, an in-house solution for collecting and standardizing data from beamlines;
- Integration of ICAT with the User Office system;
- Contribute with feedback regarding the project documentation and instruction for building environments for development and production.


## :calendar: ICAT components roadmap

## Planned discussions

- ESRF UX expert - presentation on micro-front-ends, mono-repos, etc
- Logbooks etherpad 
- DataGateway vs DataHub presentation to HZB
- E-logbooks for a core component?

:::success
Roadmap discussed in 2020 available [here](https://drive.google.com/file/d/1gTiqh-AAs7-rWD9c_YIeC8rCIrNMA_qe/view)
:::

| **Component or product**                     | **Status**           | **Roadmap**  | **ESRF**  | **STFC**  | **DLS**  | **ISIS**  | **HZB**  |**ALBA**  |**SESAME**  |**Sirius**  |
|------------------|----------------------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| ***icat.server***| stable | ICAT 5 was released, we need to consider changes for payara 6, plan ICAT 7 to include new schema changes |  |  | |
| ***icat.auth*** | stable - dependabot PR open will be reviewd by Rolf, payara6 branch ready, refactor to create a base class and avoid code duplication  |     |     |      |
| ***ids.server***         | stable, will need refactoring, currently v1.12              |   |     |      |
| ***python scripts***         | stable           | now in python3     |     |      |
| ***topcat***         |  frozen           |  recommendation is to use DataHub or DataGateway   |     |      |
| ***python-icat***         | stable             | 1.0 was released, two minor issues open, HZB will look into a 1.1 release  |     |      |
| ***oai-pmh***         |   stable but refactoring suggested           |  not high priority, would be nice to provide mapping to DCAT, schema extensions (e.g. technique) not yet available, possible to include as part of OSCARS project (ESRF), considering moving to third-party library |    |      |
| ***search-api***         |              |   |     |      |
| ***java-ee container / payara***         |              |   |     |      |
| ***icat+***         |              |   |     |      |
| ***dataportal***         |              |   |     |      |
| ***elogbook***         |              |   |     |      |
| ***icat.lucene***         |              |   |     |      |
| ***datagateway***         |              |   |     |      |
| ***scigateway***         |              |   |     |      |
| ***datagateway***         |              |   |     |      |
| ***datagateway-api***         |              |   |     |      |
| ***icat-manager***         |              |   |     |      |
| ***website***         |              |   |     |      |
| ***documentation***         |              |   |     |      |
| ***starter guide***         |              |   |     |      |
| ***website microservices/micro-front-end***         |              |   |     |      |


### :heavy_check_mark: Q1
 - [ ]  Product ideation
 - [ ]  Related product research
 - [ ]  Marketing
### :heavy_check_mark: Q2
 - [ ]   Product ideation
 - [ ]   Product Concept
### :heavy_check_mark: Q3
 - [ ]   Product Testing
 - [ ]   Marketing analysis
### :heavy_check_mark: Q4
 - [ ]   Product Release
 - [ ]   Marketing analysis


## :calendar: Team Schedule

:::success
Assign work to different teams. You can refer to the example table to complete yours.
:::

| **Quarter** 	|        **Target**        	| **Content** 	| **Team** 	|
|:-----------:	|:------------------------:	|:-----------:	|:--------:	|
|    **Q1**   	|     Product ideation     	|             	|     A    	|
|    **Q1**   	| Related product research 	|             	|     B    	|
|    **Q1**   	|         Marketing        	|             	|     C    	|
|    **Q2**   	|     Product ideation     	|             	|     A    	|
|    **Q2**   	|      Product concept     	|             	|     B    	|
|    **Q3**   	|      Product testing     	|             	|     C    	|
|    **Q3**   	|    Marketing analysis    	|             	|     A    	|
|    **Q4**   	|      Product release     	|             	|     B    	|
|    **Q4**   	|    Marketing analysis    	|             	|     C    	|


## Roadmap Overview

:::success
To overview the achievement in the previous quarters. Share the link here.
:::

- [Q1_Product ideation by Team A][1]

- [Q1_Related product research by Team B][2]

[1]: https://hackmd.io    "Q1_Product ideation by Team A"
[2]: https://hackmd.io    "Q1_Related product research by Team B"