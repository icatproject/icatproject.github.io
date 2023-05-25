# ICAT F2F meeting collaborative notes - day one

Attendees:

In person:
- Alan Kyffin (UKRI-STFC)
- Alejandra Gonzalez-Beltran (UKRI-STFC)
- Beatriz Lorenzo (ALBA Synchrotron Light Source)
- Rodrigo Cabezas (ALBA Synchrotron Light Source)
- Kevin Phipps (UKRI-STFC)
- Louise Davies (UKRI-STFC)
- Patrick Austin (UKRI-STFC)
- Viktor Bozhinov (UKRI-STFC)
- Alex Kemp (UKRI-STFC)
- Marjolaine Bodin (ESRF)
- Rolf Krahl (HZB)
- Alejandro de Maria (ESRF)
- Andy Götz (ESRF)
- Malik Almohammad (SESAME)

Remote:
- Kirsty Syder (Diamond)
- Salman Matalgah (SESAME)
- Elliot Hall (Diamond)
- Hector Perez Ponce (HZB)
- Will Taylor (ISIS)
- Allan Pinto (Sirius)
- Will Edwards (STFC)
- Alexandre Camps (ALBA)

## Introductions

...

Louise - STFC, front-end development mainly
Alex K - STFC, Diamond Data Store, DOIs and user data upload
Viktor 
Salman Matalgah (remote) - SESAME
Kirsty  - Diamond
Eliot Hall - Diamond
Hector - HZB, in charge of making the data from the synchrotron FAIR, converting NeXuS to be stored into ICAT

## Processed data

### DOI and upload data work
Alex Kemp from STFC

- demo to Diamond in February
- two main use cases
- going through ICAT schema classes and process for DOI creation
- different approach for each facility
- ISIS only has automatic investigation minting right now - move to new system hopefully
- ESRF send email to let users know their data has been minted
- showing Figma wireframes for how it will look like in the front-end
- need to have support for removing erroneous DataPublications but still need landing pages for the created DOIs
- upload work to date
- www.tus.io - resumable HTTP upload protocol

Andy Q: do you plan to have 'draft' DOIs which could be used in publications before they are published

Andy Q: you might need to extend the right to create DOIs to beyond the PI

Andy Q: which Datacite API are you using? WHich roles are defined?

Andy Q: How will citations be tracked?

Andy Q: Do you plan to support machines downloading data?
- potential problem of robots downloading all data and restoring data from tape

Alex Q: do you plan to allow users to create DOIs for data that's not their own?
- unsure, we're gathering reqs right now, but probably not initially
- Rolf: idea - use the original data DOI normally as a reference
- Restricting to DOI to just PIs - original data should have a DOI, if it doesn't then contact the original authors to create a DOI
- Andy: but what if you only use a few files?
- ESRF only allows users to mint their own data as well - Alex says this Q has been around for a while
- Patrick - users could "make up" the list of DOI authors
- ESRF allows anyone involved in an investigation to create a DOI, PI was too restrictive
- Rolf provides a random url for reviewers to see data before publication

Patrick Q: Regarding being able (or not) to "supplement" with additional data - when we release a new version of software for the Muon Spectroscopy Computational Project, we create a DOI (on Zenodo) for the version but we also maintain a "concept" DOI which always points to the most recent version and never changes. Is this an approach that was considered or might be useful?


- people are not citing data 


### 
Rolf - HZB PIDs
- distinction between raw data & data publications
- Raw data don't have DOIs - instead they have "handles" - DataCites schema but not a DOI. Also doesn't set the creator - as they don't know who has made a "genuine scientific contribution" (DataCites definition of author). Rather set nothing than be wrong
- Proposal users are set as contributors & their roles are listed - the roles don't map onto DataCite roles
- example handle page: http://hdl.handle.net/21.11151/ezmb-fune?noredirect
- also handles for data under embargo
- the handles mostly use DataCite metadata, including standardise terms 
- Data Publications are separate things - users need to submit data publications like submitting to a journal - not "easy & automatic"
- example data publication: https://data.helmholtz-berlin.de/pub/ND000009
- for download, they provide a 'request download' which stages the data from tape, and turns into a download link, not entirely machine actionable 

Q by Kevin - how many of these you have?

a lot of manual work at the moment, so only few, we don't advertise this service a lot
we need to do some scripting with lots of supporting hints


Q by AGB - have you got the use case of enabling reviewers to see the data during the embargo period?

- Rolf: reserve a DOI internally (not a draft DOI), random URL points to draft, once they're happy publish it properly. Could use draft DOIs.
- Alex: reviewers could share it to non-authorised users. Rolf: that's a risk with everything that's sent to reviewers!

### Alex de Maria's talk
- processed data - it is not raw data, could be reduced data
- raw data is the first data we keep
- data policy will be extended to include processed data
- processed data is already in ICAT (e.g. because users want DOIs for it) but this is done manually
- beamlines now organise their experiment folder into raw_data and processed_data folders
- want to display processed data nicely
- expecting demand to increase
- have to standardise the beamlines & facility, e.g. above folder structure, 1 folder = 1 dataset to be able to automate
- lots of relations of processed data linked to raw dara
- How to link datasets in ICAT: ***Jobs***
- Using Jobs table might not be performant though...
- So instead use "soft links" using dataset parameters i.e. `input_dataset_id`/`output_dataset_id`
- application data also stored in dataset paramters in the processed dataset

Alejandra Q: is Job perfomance issue theoretical or tested? Alex: theoretical. Rolf: you should do measurements - Jobs might be better or equal as you're utilising the DB.

- instruments give the input_dataset as a path, ingestion uses this to populate dataset parameter IDs
- processed data can be ingested before the raw data which can be a problem - just have to design ingestor to handle this. If processed data is recieved before do nothing with it yet, wait for raw data
- denormalising dataset parameters to increase read performance at the expense of write performance - aka putting all the info from multiple tables into dataset parameters

Patrick Q: how well defined are these denormalised parameters? Alex: see next slide. Beamlines can't define new parameters - Alex's team defines the parameters.

- Based on technique, display different visualisation in the frontend
- Thumbnails associated with datasets are always online so they can be used by the frontend
- processed data displayed as tabs on the dataset infomation pages

![](https://i.imgur.com/WWbCx9h.png)

Patrick Q: how would the frontend display processed data if 2 raw datasets were used to create it. Alex: it depends, generally the beamlines choose which dataset they want to attach it to

- Dataset parameters are defined using a Nexus-like convention.
- If someone wants a new parameter they need to request it gets added
- 


Patrick Q (not asked yet): Is there the use case to identify how the input/output dataset was used? I.E. the first output is a plaintext file, the second is a png plot.

Patrick Q: How do you achieve 1:N with DatasetParameters? Uniqueness for DatasetParameter is dataset and type.
A: `input_dataset` is a list

- ISPYB database - 20 years ago for MX, and then extended
- few years ago they decided to change the backend from Java to python
- consider to use ICAT to do the same, tables will be simpler
- they are doing the exercise to map from ISPYB to ICAT
- worflow - a mix of data acquisition and processing activities
- can these be mapped into ICAT? 3 potential approaches
- as a proof of concept they are putting all the information as DatasetParameters
- ingest the data with soft links

Steve Collins Q: how do you tell what datafiles are processed or raw? Kevin: the have separate folders saying raw and processed. Alex: 1 dataset per folder, and in the ingestor it links it all together

## Metadata

### Rolf - Dataset Parameters at HZB
- Problem: lack of standardisation of parameters across facilities - this makes pan-searching hard/impossible
- Goal?: common PaN Metadata standard (could also use in OAI-PMH
- ICAT schema imposes a global list of parameter names
- Start from NeXus files
- no application definition but using base classes
- NeXus are working on NeXus ontology - might be able to use this in the future to translate queries
- Considerations: same parameter should use the same type across instruments, need naming convention that works across instruments, standardise units (don't create temp C and temp K e.g)
- Suggestion: use flattened NeXus path as parameter name, add numerical suffix if two the same, stick to SI units w/o SI prefixes
- agree on a common subset of parameter types across facilities
- who would use it? we can't impose this on communities


Andy - be aware that the NeXus application definitions are not adopted by (m)any user communities. They cannot be used as a standard yet. The problem is especially acute for processed data where we are lacking Nexus application definitions as well as when there exist very few sites are using them.


### Experiment parameters at ESRF - Marjolaine

- Experiment parameters are stored at dataset level
- Investigation params are only "information" e.g. how many files etc.
- XML file describing mapping between ICAT and master HDF5 formar
- TechniqueName_ParameterName
- is storing all params at dataset level the "right" way?
- Samples: user portal synchronises info to ICAT along with some sample params
- Also samples come from data acquision

Rolf Q: 1 sample sheet maps to single sample? Kind of yeah, but also create a "super" Sample

SampleType could map to SampleSheet better perhaps, but Alex says there's a problem in that SampleType is shared across the facility - he'd like it to be for investigation.

proposal of ICAT schema change? SampleType is currently at Facility level, ESRF would prefer this to be at the Investigation level (use case around safety information)

- CSV uploads for experiment and processing plan - where to put it in ICAT?

### Steve Collins
- use cases 
    - data owner data search - search their own data
    - open data search - findability - searching all of the data
    - data processing - interoperability
- the first use case is the most important
- third use case is not a high priority
- for searching, we only have administrative metadata at the moment
- we want to work on experimental parameters: NeXuS terms, sample description, other? 
- short-term - develop a small set of parameters, using persistent identifiers, NeXuS ontology and also units
- Challenges
    - search for their own data in real time - while they are processing the data
        - issue with ingesting data later
    - how to deal with samples, no standards no community approach
        - very high priority - not addressed because it is difficult
        - have multiple local definitions - not consistent or FAIR
    - general approach to labelling with ontologies 
- triples in ICAT

Rolf: we have techniques table but don't specify the predicate, we assume the relation is dataset x is made using technique y. Do we need the general case? Maybe...

### Kevin - Samples @ ISIS & DLS
- Both use similar process
- Free text name for sample names given by user
- Attached to investigations
- Samples aren't attached to datasets
- Safety info @ ISIS gets attached as sample parameters
- DataGateway only displays the sample name (as that's all we really have)

Rolf: Is it accurate re: number of samples? Kevin: don't think we even record that info, just recording sample type info for safety reasons.
Alex: with sample tracking, you need to be a lot more specific e.g. protein with different solutions with different concentrations. Can be complex and require using multiple separate systems
Malik: store info as a datafile as a standardised file name
Rolf: big plans for samples, but only at beginning of discussion

## Performance

### Kevin - ICAT vs SciCat benchmarking
- Work done in 2019, findings were presented at last ICAT F2F in 2020
- simulated metadata grown over 6 years by adding half a billion (10^9) each year
- ran some test queries (e.g. frontend my data view, frontend browsing, ingestion)
- 5.5 x 10^9 files
- simple tests results: ~0.01s
- done via entityManager and icat.client
Q: did Kevin take database caching into account? No, but did 90 users doing different requests for different datasets
- wasn't a constant increase
- more complex rules incur a performance overhead
Alex: does DLS have datafile parameters? No
- long queries werent a constant increase either
- Overall conclusion: rise is insignificant enough for the next 5-10 years
- SciCat testing: can't recreate the long query test as you can't paginate/filter datafiles
- SciCat essentially assumes datasets have few files (as they don't provide filtering, sorting, pagination facilities to actually be able to find files in a large dataset)
- Limit of ~3000 proposals per user
- Limit of ~100000 files per Dataset
    - Diamond has lots more than this sometimes (also this isn't good, it needs supporting for historical reasons)
- ICAT was faster on average
- SciCat also scales okay over the next 5-10 yrs
- DLS & STFC had multiple reasons to stick with ICAT vs SciCat

### Patrick: ICAT Rules
- `what` in a rule is the main part of a rule
- Shorter rules (literally by character length) are evaluated first
- PublicTables don't require a database call, used for things like e.g. `Facility`
- PublicSteps, `origin` and `field`, means if you can read `origin`, you can read `field` without further evaluating rules
- GateKeeper does the majority of the work
- we need the granularity of the ICAT rules to be able to support our data policies - e.g. distinction between raw and processed data
- Examples of long queries caused by rules
- https://github.com/icatproject/ids.server/issues/115
- https://github.com/icatproject/ids.server/issues/117
- Lucene authorization
    - Checks permissions for every single entity
- Should timeout long search
- Cache PublicSteps & PublicTables in Lucence
Alejandra: high level summary - you need to pay attention to your Rules. They have a big impact on the performance of getting data out of ICAT

Rolf: observation - most of our rules are based on the investigation, caching what investigations users are allowed to see would massively increase performance. But how to do that! rules hierarchy? datafile rules that cites a rule on investigation to give ICAT a hint. 

Alex: ICAT+ caches investigation list to increase performance.
Kevin: it doesn't work with a user with lots of investigations but that was a long time ago.

Andy Q: what are the performance bottlenecks which we could encounter if we increase the number of simulataneous users + number of datasets and datasets parameters?

rules for each user type should not be complicated

Andy Q: what is the STFC hardware configuration for the DLS+ISIS ICAT?

Andy Q: are there some ideas on how to re-organise the Datafiles tables to reduce it?


### Front-end session

#### DataGateway - Louise Davies
- introducing what is DataGateway
- plans for the future
- both for facility and open data users
- specialised data catalogue interface
- DG is a plugin for SciGateway - common features for common front-ends (authentication, cookies management, dark mode, basic menus on the side, homepage, etc)
- uses ReactJS framework for single page web applications
- showing screenshots
- DataGateway hides the anonymouse login from the open data user
- table vs card view
- landing pages 
- selection - currently used for data download, soon to be used for data publication / DOI creation
- new feature for user role selection
- citation formatter
- coming soon:
    - download progress bars
    - file previews 
        - Uses the IDS under the hood to populate the file
        - For ISIS not DLS as ISIS only have 1 level of storage
        - DLS would (potentially) require restoring from tape
        - Could show a placeholder based on whether file is on tape or not
        - hdf5 - Peter Chang in Diamond is working on the viewer
    - Data Publications
        - DOI landing pages are not currently in use
        - ISIS use Study objects, but these are not fit for purpose
        - Backfiling to use DataPublications
        - Draft DOIs: Zenodo does this, and DataCite also supports this (used to avoid "chicken and egg" for creation)
    - Search improvements
        - See talk tomorrow
    - Etherpad
    - Machine Learning functionality
        - Not yet run past users
        - dependant on metadata quality
- Q: SSO support?
    - A: Not yet, issue for it
    - Keycloak?


### Data Portal - Alex de Maria

- current architecture: front-end is connected to ICAT+, which are a series of data services that access ICAT in the backend
- some satellite apps e.g. H5 viewer
- data portal with signal sign-on, no seamless anonymous login yet
- dataset viewer factory that depending on the technique, beamline and a few parameters they can change the view
- dataset view - for specific techniques, they show different parameters, diagrams
- aim for technique specific viewer
- h5view integrated
- 3 levels of logbooks: experiment, beamline and facility 
- notebook = etherpad - positive and negative feedback - negative: corruption of the pads, difficult to work with images, difficult to work with tables, project could be abandoned?
- alternatives TinyMCE or OnlyOffice
- investigation calendar view - no data, scheduled investigation with data
- statistics: heatmap with data produced and all the beamlines, other stats 
- sample tracking view 
- 6 years of development, time to get valuable feedback
- need to consolidate and improve the different tools
- want to improve scalability, module federation or standalone/module federation?
    - standalone: data portal as the core app that takes you to specific application 
    - module federation - microfront ends

- Speed of changes to frontend code - difficult to keep up, need for rewrites, lifetime of the technology ~years
- HZB undecided between DG and DH - would be nice to combine best of both worlds
- Can module federation (or other approach?) allow effort to be shared?

Allan Q: Has vulnerability scanning been performed?
- DG has dependabot (GitHub), mostly false alarms from build time (not an issue for production)
- Basic web hardening (apache, turning off webtrace)
- ESRF rely on security of ICAT

Andy Q: Vulnerability to e.g. SQL injection?
- In theory entity manager is a weak link
- Runs JPQL which is less vulnerable than SQL
- ESRF do not expose this so it is OK

Louise Q: what is the data source for h5view?
- Have a backend going directly into data archive (not via IDS)

Andy Q: Does data get restored to the same place? Sometimes not for us.
- Kevin: never goes back, always restored to somewhere else (would get in the way of new ingestion)
- Pollcat works with IDS and moves to different file system
- Alex dM: IDS says "restored" but cannot ask IDS *where* it has been restored to
    - Rolf: location of file is meaningless, only plugin can locate file
    - This is not exposed by IDS though?
    - If file is restored it exists in the IDS cache
    - Can stream the bytes, can viewer work on the datastream?
    - IDS can not provided "part" of the file, would need to be modified
    - Returning the file location is not what the IDS is for
    - ESRF cannot control the location (managed by other people)
        - Checks either original location or restore location
        - Plugin tells if it is in *either* location but not which
        - Want to pass this to IDS
        - Can in principle make a PR for this functionality

Q: how does progress bar work?
- Restore progress counts the number of files left to go
- This is expressed as a percentage of the total number of files requested
- This is the r2dfoo component for DLS
- Operates only on file count, not file size (simpler)
- Not a true measure of how long it takes, but then what is?


### SESAME data management - Malik's presentation

- data types
    - metadata
    - csv, hdf5, etc
- Why ICAT?
    - manage metadata and scientific data, large scientific facility
    - adaptable to be integrated with infrastructure
        - linux 
        - ...
- worflow
    - LDAP SUP server contains user information
    - python code to transfer to AD Server
    - Active Directory server
    - ICAT server with MariaDB with the metadata
    - python code - collect metadata and data files to update ICAT
        - CSV file for the experiment - backend agents collects the metadata
        - uses pythonICAT API to upload data file, user will login with account from SUP and see what data they have
    - Short term (PETRA on GPFS) and long term storage (Archive tape storage, 1 PB storage not compressed)

Challenges
- they have some problems with the rules - yaml file with the rules, take the rules and insert by csv file, generate the rules automatically 
    - In practice there are a lot of "core" rules that most facilities share - easiest approach might be to use someone else's and modifying as needed rather than start from scratch
- issues with the documentation, links broken, easy installation doesn't work anymore
- no clear steps on how to start, what to install first, ICAT server or IDS server
    
SED = SESAME Experimental data

Kevin Q - ICAT Job portal, have you tried to get that working?
yes
recommendation not to use it anymore

Glassfish vs Payara discussion

they did another python script that checks the beamlines, instrument scientists 

Andy Q - when do you plan to give it to the users?
by the end of this year

Viktor Q - are you ingesting data or storing in CSV?
beamline started to generate data 3 years ago
10 months to 1 year, operational ICAT
facility to work with scripting

Andy- we ingest on-the-fly
Kevin - mix of ingestion - data acquisition is real time, but anything else that the users create, it might take up to 30 days

- maybe we need to link icat tutorial more prominently? at least gives a good vague idea on order and how to install
    - This has had issues (i.e. old versions, payara4) but think these were resolved?
    - Aimed at dev instance but good as a guide
    - 

- probably need to revamp the ICATProject website...


## Community Engagement / Community Life

- What is the ICAT collaboration?
    - what is common?
    - what are we sharing?
    - same name for different things
- how to sustain the collaboration?
- how to grow the collaboration?

- ICAT core team (develop + maintain) (STFC) vs ICAT users (deploy + configure + contributions)
Kevin: these should be the same circle
This is the current state, but maybe not ideal

What is common? 
- schema / ICAT core data model
- DB / icat.server
- Knowledge / documentation
- website
- everything on repo.icatproject.org ?
- everything under icatproject github organisation
- at least two sites using it?

What isn't common?
- deployment
- operation

- when modifying a core component, need to be aware of who uses it. e.g. icat.lucene

ICAT core development effort is funded by one facility, but affects them all - and so in principle all should/might want to have a say

How are contributions "made core"?
- Start off as "contrib" organisation
- Migrate to main org over time? E.G. python-icat which started off under Rolf

Comparison with the Tango collaboration
8 / 10 large sites involved in the common part
python interface to core libraries, documentation
people feel that there is much visible collaboration
sharing things / sharing the workload
Had both high level and technical focused developer meetings
Revitilise steering committee? Higher managers are too far away to contribute meaningfully...


Areas to improve:
- Meeting notes
    - ICAT Collab meetings: each meeting needs a chair and a scribe
- Mission statement
- Developers meetings - can wait until community grows
- Documentation
    - create a new starter guide
    - 
- Website
    - Should be able to create issues for any improvements, dead links etc.
    - Currently content is MD, so easy to edit - low barrier to entry
    - But might be more appealing if it was "shiny" -trade off with above
    - Maybe make home page shiny and keep rest of content easily updatable?
    - Andy to review?
- Publications - paper at https://icalepcs2023.org/

DECISION
- each monthly meeting will have a chair and a scribe
- rotation for every meeting 
   - responsibilities of the chair
      - chairing/facilitating the meeting, sending a reminder
      - scribe when/if the dedicated scribe can't due to needing to present etc.
   - responsibility of the scribe
      - take notes during the meeting in a collaborative document so that others can contribute
      - if the scribe is speaking, the chair can be responsible for taking notes
      - upload the notes to the website

- NOTE: need to create a new F2F page on the ICAT website like this one: https://icatproject.org/collaboration/communication/face-to-face-meetings/esrf-2020/


Collaborative notes for day two in [this link](https://hackmd.io/@0QbV8YHDT_-AheekNxCMsQ/ByBeK2gEh).