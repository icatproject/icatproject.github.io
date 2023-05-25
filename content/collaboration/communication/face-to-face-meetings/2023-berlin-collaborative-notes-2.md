# ICAT F2F meeting collaborative notes - day two

[Day 1 notes](https://hackmd.io/b6iG4ZmsQcmsFye6eUaOww)

## Roadmap

Notes on the roadmap in [this document](https://hackmd.io/@0QbV8YHDT_-AheekNxCMsQ/r1iYnHxNn).

## Container and Orchestration, Packaging

### Alan: Some Preliminary Work on Containerising Front-End Components

- Hardware instance periodically scans the containers for (OS) vulnerabilities, python libs, node
    - Cannot look into Java files, that has to happen on the repo itself
- Next step is to containerise the components themselves
- Ambitious plan: replace Payara with [Quarkus](https://quarkus.io/)
    - Heard about this at KubeCon
    - Does not support EJB, will have to replace all with another thing (?)
    - Should be doable but might end up being complex
    - Old authn components are not REST so would need updating
        - Kevin: don't think anyone uses these, phase out?
    - Rolf: Keycloak has recently moved to Quarkus
- This should aid development work
    - Making simple changes still takes time (now) because of the effort needed to spin up the stack
- Want to start with DataGateway, enable ~minutes to spin up
- Want it to be faster than current process of setup scripts (wildfly?)
    - This goes into dockerfile
- DB setup might need to live in a new setup file
- Alejandra: Currently an exploratory effort into containerising components (separately) - Can we do this?
    - Rolf: HZB's approach is flexible to how many components are spun by the one container, but these will need to share the image (presentation to come)
- Andy **Q**: Any reason other than ease of development? Outside pressure?
    - **A**: No not really, we just want it to be easy
- Andy **Q**: Who controls the containers?
    - **A**: It would be someone else, we (DSEG group) will not control ourselves
        - Alex dM: Can be easier to have direct control

### Rolf: A Docker Image for ICAT and Deployment at HZB

- Design decisions, considerations:
    - Don't want to have runtime config in the image
    - Image should be generic
    - ICAT runtime contains secrets, so cannot push it
    - Much easier to use the same image (for all components) in all scenarios (test, dev, prod ...)
        - These will require different config
    - ICAT image based on Glassfish/Payara image
    - Image versioned in line with icat.server
        - Helps when testing python-icat against older ICAT component versions
        - Take the other component versions "at a point in time" that is consistent with the server release

- Viktor **Q**: Where do you keep the images?
    - **A**: Dockerhub, currently free. COnsidering moving away from them due to past tendancy towards commercialistion. Use GitHub (this has limits on size).

- Currently image is not documented
- Build:
    - Glassfish/Payara image unzipped
    - Delete *domain1*
    - Unzip distibution for each ICAT component
- Runtime
    - Use volume bind in the "usual" way
    - *APPS* text file lists components we wish to deploy
    - Each component has a diretory with its config files
        - setup.properties
        - run.properties
    - setup script run as usual when the container is started
        - This is a bit time consuming
    - Can add a filter shell script for variable substitution in the config files

- HZB deploy env: 2 RHEL7 servers
- Active/passive mode
    - 1 server is active running ICAT
    - Other is idle
- Switch between active and passive is manual
    - Enables maintenance on one server with little downtime
    - No high availability (yet!)
- extra IP for ICAT moved between active & passive
    - for clients switching is transparent
- systemd unit files to control starting/stopping services
- Orchestration: basic, 1 docker-compose
- Heavy use of volumes to add runtime config to containers, keep DB in host file system & thus included in backups and to provide access to storage
- All ICAT components in 1 container
- Containers making up services:
    - icat (see above) in addition to the following
    - mysql
    - datahub
    - icatplus
    - mongodb
    - apache
        - used as a reverse proxy
        - simplifies web config as it's all in one place
        - only this container is world-reachable
    - smtp
        - Only need to configure mail in one place for all containers
    - keycloak
- client image for mainenance tasks, e.g. cron jobs, or run interactively for admin tasks
- Outlook for the future:
    - Kubernetes (a lot to learn)
    - High availability
    - Database would need to be extracted as a cluster
        - Alan: most DB operators will have a Kubernetes Operator with will run it for you. Rolf: want to try out other databases e.g. PostgreSQL
            - icat utils has scripts, which generate connectors, these are DB specific
            - Upgrade scripts are native, so would be needed
    - Could split ICAT components into separate containers, e.g. parallelise
        - IDS can only be run at once
        - icat.server can be run in parallel?
            - Patrick: Yes, either as two separate instances (e.g. ingest and recall - think DLS do this?) or as a "cluster" that talk to each other for things like caching rule updates - don't know if anyone actually does this though?

### Rodrigo - Kubernetes deployment @ ALBA

- k8s cluster: 256 cores, 625GB RAM
- 9 nodes: 3 master nodes and 6 worker nodes
- Docker & containerd runtimes
- Managed by Rancher (k8s UI)
- CI/CD
    - push to gitlab
    - Jenkins builds
    - Push to dockerhub registry - sonartype?
    - k8s configure applications
    - k8s applications (re)deployed
- Using Rolf's ICAT base image
- Slightly modified
    - Forward logs to logstash using filebeat
    - need this as no volumes for containers, so logs could otherwise be lost
- DataHub & associated stuff (ICAT+, mongoDB) also in k8s
- Keycloak will also be in k8s
- YAML config stored in a repo

Rolf Q: is this k8s cluster just for ICAT? A: no

Andy Q: Why k8s and not just Docker?
- Instant spawning of replacements is the main advantage
- Not all components can be run in parallel (IDS cannot share storage or it will overwrite the others)

Can we share this around as a "template"?
- This should go into icatcontrib

Viktor **Q**: How many DB can you have?
- Only one
- This makes it a single point of failure
- Have separate server (outisde K8s) for DB
- Not within scope (at least for now)

Rolf: Manually switching between HZB's active and passive servers has ~4 minutes of down time. This impacts users of logbooks. k8s would avoid this

Viktor: we need to plan new releses ~month in advance which is a pain to co-ordinate. k8s would make this easier, if new version fails it will automatically roll back.

Alex K **Q**: How many environments do you have?
- 3, test demo and prod

**Q** Version?
- Not using the most recent version (21' version). Looking to upgrade to latest version.

Alex K **Q**: Use of helm?
- not yet, want to look into it

Alejandra **Q**: ESRF use of docker?
- Using for integration testing but not production

### Rolf: Metadata Ingest using python-icat

- python-icat provides commandline scripts:
    - icatdump
    - icatingest
- originally intended for debugging, and still used a lot in python-icat tests
- YAML & XML support
    - ICAT data file format is 1-1 mapping of ICAT schema
- scripts based on icat.dumpfile module - easy to create scripts for custom file formats
- reference existing entities, e.g. reference an instrument by it's PID in a datafile definition
- many-to-many
    - either embed
    - or list as separate entities
        - using property ref="id_of_other_entity" this is the id defined within the xml, rather than the ICAT id?
- Problem: ICAT data file format is TOO powerful, can create any kind of ICAT object
- Solution: restricted version of the format for ingestion
- root element is changed to ingest format
- can exclude various properties, eg. completion format, as that's not the remit of the ingestor
- e.g. for ingesting a dataset, exclude the investigation as investigation is hardcoded
    - Q: where is this harcoded? takes the investigation as a parameter to the script
- Script only allows Dataset(Parameter/Instrument/Technique) to be created
- Validates the xml using XSD
    - Does this validate type of an attribute (e.g. date)?
        - No, if you try to do this then the underlying backend would fail
        - Can add validators to chosen objects, but do not do that here
- Restricted format is a recent development
- Documentation exists

Andy **Q**: Would this be useful for e.g. SESAME?
- Yes, for e.g. the Rules. Using it as an example fill the DB with needed parameters first
- Current SESAME approach:
    - Inserting facility, instrument, parameterType using SQL directly
    - Using icatingest to import an icatdump file

Currently, the restricted formats are in a private repository. They are HZB specific. Notices that the core functionality could be moved to python-icat?

### How difficult is it to deploy ICAT?

Rolf: install process is simple, provide config files and run setup. It is as easy as it can get. Difficulty is providing the configuration files. For some this is easier than others.

Kevin: there are a few gotchas: placing the jar for the DB in the right directory for example.

Andy: the install guide is out of date? Probably?
- Yes it refers directly to glassfish 4. [icat.manual](https://github.com/icatproject/icat.manual/blob/master/tutorials) is better as it refers to payara5, but even still referes to icat4 rather than icat5. We should be able to fairly painlessly migrate the icat.manual markdown onto the GH pages for the website.

Docker image might be easier but is currently undocumented. Do we want something similar for the dockerfile (to prevent it from becoming a black box)?
- Two things:
    - Elementary documentation, what the config options are etc.
    - Aside from that, want a tutorial like the ICAT manual but for the docker approach

CI for icat components run using Ansible scripts (developed by STFC)

Dockerfile is in a way self documenting...

There are different target groups for our documentation here: beginers or more advanced 

How can the optional bits of the ICAT stack be indentified and made clear to a new user/developer?

## Misc Tech bits

### Patrick - search
- Free text search goes via icat.server REST API
- icat.server calls icat.lucene
    - icat.lucene doesn't know re: rules
    - so icat.server needs to evaluate rules on search results
    - calls icat.lucene again if more results needed (if user can't see enough)
- the search call to icat.server only returns IDs, so frontends need to call icat.server entityManager to get entity info from IDs
- User wants to search on parameters and samples and other related entities
- Need to return e.g. instrument data along with results
- Facets:
    - e.g. temp 80degC, date between, sample name = CeO2
    - have user select from predefined options to shrink results set e.g. like when shopping
- Synonyms, e.g. Fe = Iron
    - synonym injection (e.g. ionising = ionizing)
    - can make common stop words searchable e.g. as, be (which double as elements)
    - needs configuration
- Diamond file limit, more than 2^32 integer limit
    - Manually route ingested files based on date/IDs (multiple indexes)
    - you get this for free in elasticsearch via sharding
- performance: improve the performance by batching authorisation
- Aside: need good metadata
    - chicken and egg, if we don't develop features bc there's no good metadata, then people won't bother to curate good metadata
- All popular search engines use Lucene (ES, opensearch, solr)
- Any option is viable with new ICAT search solution, using lucene just misses some nice to have features
- ElasticSearch/OpenSearch
    - nodes, only need 1 but ideally 3 for resilience
    - more nodes = more performance or specialisation, e.g. master, ingest etc.
- Sharding, each index needs >=1 primary shard
- each primary shard can have replica shards
- balanced between nodes

implementation:
- lucenemanager was linked to lucene API
- new SearchManager which is engine independent
- SearchAPI class contains common functionality, and created LuceneAPI which talks to icat.lucene and OpensearchAPI can conenct to ElasticSearch/Opensearch
- Performance improvements
    - get all metadata from search, removes need for second API call
    - IDs authorised in batched
    - Set request timeout
    - optionally return early if we have enough data
- UI changes
    - couldn't order results by most relevant in old method
    - simplified UI
- can do unit converation if you configure it

- explained that there is no equivalent icat.elasticsearch - you just point icat.server at the elasticsearch server

Rolf: Can we add an equivalent "Open" search option that adds a criteria like the "MyData" search? With the criteria being configurable?
- In principle yes, however this requires anything the "Open" query relies on being indexed - e.g. releaseDate, doi...
    - Don't know if this is currently the case - it would be best to indexed everything that would be useful so we don't have to re-index everything later when we realise we don't have everything we need
- Config location? Could add it in DG but might be better for DG to just pass a boolean and icat.server to handle the specifics

Alex dM: Can the entities indexed be controlled? If only interested in Datasets, and specific DatasetParameters (~6 valuable ones, the rest are not interesting)?
- [entitiesToIndex](https://github.com/icatproject/icat.server/blob/e05db060a8a44b6e0ae620c4010b7645d5ee8aee/src/main/resources/run.properties#L26) is a config option in ICAT server. Only these will be indexed by Lucene/the search engine backend. This config option will still be present in the "new" version of free text search.
- Currently, all Parameters are stored in their own index (one for Investigation, Dataset, Datafile and Sample). When searching/faceting, under the hood we "join" the main entity index to the Parameter index. 
- Joining has a negative performance impact, but is the only way to retain nested lists of objects (i.e. the only way to keep the type.name, type.units associated with the same numericValue)
- In your use case, where there are certain valuable Parameters, it would be better to (as you have already done) "flatten" these parameters into fields on the Dataset document, as you do not need to worry about needing to be able to update these Parameters or an explosion in the number of Parameter fields.
    - This is **not** currently possible in either the icat.lucene or the OS/ES backend support, however in principle it should be possible to do by writing additional logic (and would be more performant) providing you don't mind the following drawbacks:
        - Parameters need to be reduced to key:value pairs, so units would need to be embedded into either the key or the value, rangeTop/rangeBottom would need to be mapped to a single value etc.
        - You would not be able to easily modify the "ParameterType" information - e.g. to change the ParameterType.name would mean changing the mapping of the entire index, or adding an alias for the field which would need very specific logic compared to the rest of the functionality




### Viktor - Search API (& DataGateway API)
- flask based REST API (python)
- fetched data in ICAT either via python-icat or via a database (latter only for testing)
- Designed for use with DataGateway
- Requires authentication (ICAT session ID)
- Search API
    - allows access public data from ICAT catalogues
    - designed to be integrated in the EOSC (european open science cloud)
- because we could reuse dg-api logic to make search api, they live in the same codebase
- allows searching documents, datasets and instruments but can include some other entities
- uses loopback REST query filters
    - easy for those using loopback and node
    - no python equivalent
- search-api entities don't map exactly to ICAT entities
    - so have configurable JSON mapping file
- codebase has two APIs
    - each one can be configured to be on or off, so can choose to just run one or both
- endpoints are separate
- separate swagger documents
recent work
- JSON config -> YAML config
- ICAT 5 work
- updated test data generator script
- increased test coverage for DB
- Support for scoring Search API results
    - waiting on PaNOSC search component to update to work with larger datasets (10000 investigaitons)
    - uses RAM to process data
    - this is the only thing blocking ISIS results going into PaN portal
- app has now been dockerised
    - in a branch still right now
future work
- general technical debt maintenance work (package updates, updating documentation, dropping old python versions)
Rolf: python 3.6, some effort required as in his docker image it's the default python version
Alex: do you think we should add authentication to the PaNOSC search API? yeah but it's not up to us! currently users need to either only use open data with panosc search API or use facility specific APIs

### Rolf: Link ICAT with a Keycloak SSO

- OpenID Connect authz code flow
    - 4 actors:
        - user
        - frontend / service provider
        - SSO / identity provider
        - backend / resource
    1. user makes request to service
    2. service redirects to sso
    3. user authenticates with sso
    4. sso redirects back to service
    5. services gets access token from SSO
    6. service access resource on behalf on user
    7. service yields some result (success or unsuccess login)

all the time, the redirects have some sort of URL parameter (path param or query param e.g.)

- for implentation, you need:
    - keycloak
    - OpenID connect client 
        - ideally use a 3rd party solution
            - e.g. mod_auth_openidc (apache)
    - login to ICAT:
        - authn.oidc
        - takes a single credential key: token (openID connect access token)
    - tiny webservice script to do the ICAT login for TopCAT (or other frontend?)

- Keycloak config
    - Create client, access type Confidential
    - Configure redirect urls (will only redirect to known urls)
    - Copy keycloak's random secret to apache config
    - Optionally create mapping between token and (ICAT) user

- Apache config
    - load mod_auth_openidc
    - standard apache config stuff - see docs
    - then need a path that has authtype oidc
    - apache then does all steps 1-5 and leaves the token in the request environment
    - so webserver script just needs to take that token

- ICAT config - install authn.oidc
- TopCAT login script
    - takes the token from the apache environment
    - logs into ICAT for you
    - place the session token into browser localstorage
    - go back to frontend page you wanted

Keycloack demo:
- Define ICAT client in Keycloak
- Maintains user attributes, which can be asociated with the access token
- Use with Topcat - demonstrates that this is possible for a frontend that was never intended for OIDC
    - Add arbitrary button to login page, that redirects to above login script
- ORCID support
    - Opens up sign in with institution (HZB)
    - Back to SSO, do not have an account so need to register
- Topcat does not show a user name in the UI
    - This is as intended, since just because I have ORCID doesn't mean I have an ICAT presence
- User appears in Keycloak
- Manually associate the user with an ICAT user name
- Login again and now have a username display in the UI
- Ideally, you would use the single sign on for everything, so would submit the proposal etc. with the SSO
    - For the demo, have to manually assocaite
    - Can associate via the email address - this assumes the same person


## Open Discussions

### Samples

- sample description = historical record
- most samples are created @ facility for the experiment
- sample prep & characterisation create data or logbook entries
- if everything is FAIR and linked, that's the best sample description
- concentrate right now on collecting & combining what info we already have
- sample PID for linking the info together
- ontology or controlled vocab for sample types might still be usefull
- IGSN (intl generic sample number) - sample PID?
- IGSNs are regular DOIs
- dedicated prefix for IGSNs
- facility sample DB
- many parts of facility workflow need sample info
    - this could also provide IGSN lanidng pages
- API for registering samples
- prototype as separate DB first? maybe integrate into ICAT later
- link from sample DB to sample table in ICAT
    - ICAT could handle authorisation?
- can use local DB ids for DOI suffix, means we know what the DOI will be before minting

Steve: was thinking more about sample types, when users give safety info, sample name given is not expected to mean anything outside the proposal. need better, globally meaningful names. Don't expect ICAT to solve this, ICAT will just follow the relevant schema.

Rolf: ontology might only apply to subset of samples. e.g. chemical formulae - not relevant for a battery or a tooth! need a coarse ontology for types.
- For reference, currently in the ICAT schema molecular formula is required for SampleType, but a Sample doesn't need to have a SampleType defined

Bioinformatics have well defined ontology for their samples: https://www.ebi.ac.uk/biosamples/
- relationships between samples is also a factor here: this sample comes from this other sample

Does it make sense for each science area to have its own ontology?

Agreement that we should not be "inventing" this ourselves.

Rolf: coarse definitions are desirable and good place to start, e.g.:
- inorganic crystal
- artifact
- protein
- ...
This also needs relationships (child/parents?) between SampleTypes

[RDA](https://www.rd-alliance.org): https://www.rd-alliance.org/groups/physical-samples-and-collections-research-data-ecosystem-ig
- Rolf to get in contact next week

Stars project? Not too much activity

[DAPHNE](https://www.daphne4nfdi.de/english/index.php) - DAta from PHoton and Neutron Experiments for NFDI (German National Research Data Infrastructure)

Steve: we have *Sample* information, but not *SampleType* information - these are separate

Rolf: need to link the Sample

Using the Sample information?
- WHo is is the user?
    - The person making the measurement - assume they are happy with their own book-keeping but presumably would benefit from having some of their work handled by ICAT
    - The data we have now is only useful for these people
- User of the data
    - Close to no information to this user
- Safety assessment has been well documented (from proposal), but this doesn't currently consider individual samples
    - E.G. quantity of the Sample is important as well
    - Sample PID could facilitate this - each sample is of this type but has it's own history with position, temperature etc.
    - DLS have separate assesment for the experiment (from the Sample) itself (this would cover beamline safety)
    - We already have this information, just needs to be formalised
    - Do we need to add a field to Sample table
    - This kind of question can be answered by a "prototype" DB outside of ICAT (as proposed early)

[Digital leaps survey](https://survey.hifis.dkfz.de/736286?lang=en) - for the facilities to fill out but results could be of interest

Actions:
- SampleType classifications
    - Study of what already exists
    - Collect lists that we already have in proposal Systems (especially for safety as this is most likely formalised)
    - Ideally this ontology is used by the User Office, and the ontology can represent everything at the Facility
- Individual Sample DBs
    - Not every facility may be interested in this - deal with case by case?

## Conclusions

Notes will be uploaded to the website.
Will discuss further at next collaboration meetings on the 25th of May, as a follow up. Chair and scribe will be assigned in advance or at the meeting.
Roadmap is not complete but important components were covered.
E-Logbook - was evaluated as part of ICAT+ for DDS project.
- One issue with Datahub/logbook is it was hardcoded for ESRF needs - work needed to make it configurable.
- HZB had someone working on it two years ago but person left (some adaptations made), want to bring it up to date


