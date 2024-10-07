---
title: NOBUGS 2024 Metadata Catalogues Satellite Meeting
---

## [Micro-frontends and Services](https://indico.esrf.fr/event/149/#b-264-micro-frontends-services)

### [DRAC Microfrontend architecture](https://indico.esrf.fr/event/149/#1-drac-microfrontend-architect)

ESRF were using ispyb 

Data portal had limited data visualisation 

After adding raw and processed data, have all the metadata just need to UI 

Core: 
- Navigation 
- Generic viz 
- Users 
- Proposals 

Generic: 
- Logbook 
- Sample tracking 

Specialised: 
- MX viz 
- Cryo EM viz 
- SAXS viz 

All generic/specialised features should be micro-frontends, core is core 

Don't want a monolith 

Source code config: single file. Could have env var to switch from one to another.  

Everything that is config should be in a single directory, bind in as a docker volume at start up. 

Depends how much you want to configure, how much comes with the software 

Technique could be extracted from the metadata. Would need to be standard.  

How many people are planning bespoke viewers per technique? Most out of the box do not have technique specific viewer. 

One version that updates as the experiment goes, one that is overall view for after the experiment. Did the whole thing go well. What's the average. 

Sounds mostly early on? 

Yeah data portal is to implement policy, everything regarding access to the data. 

Could build app in React and use angular microfrontends 

Logbook could be microfrontend? If the SciLog was microfrontend could we try it? Yeah for sure. Would need to test but not be an issue on the UI side. 

What makes the difference between the viz. You offer download, is this still used? Do they download for analysis or another reason (we don't do download yet)? 
- Views defined by what the scientist needs. Work with them to understand the use case. Best visualisation for them.  
- Download:it's used because it's convenient, but not the only. In the future it will be only method. For larger than a certain size use Globus. Download is actually a choice between Globus and HTTP.  

### [SciCat UI architecture](https://indico.esrf.fr/event/149/#2-scicat-ui-architecture)

Personally in favour of a microservice refactor, but it's a question for the SciCat community 

3 frontends: 
- SciCat 
- Historic, separate DOI dataset UI (to allow for network restriction) 
- Frontends for specific institutes 

FEs communicate with REST services: 
- Main backend 
  - Authn/authz 

FE tech: 
- Angular modules are lazy loaded, components inside modules 
  - Datasets 
  - Files 
  - Instruments 
  - Policies 
  - Proposals 
  - Published 
  - Samples 
  - Settings 
  - Help 
  - About 
- NgRx for state management (memory storage) 

Who are we supposed to do state management? How does this justify the complexity 

Why would I do microfrontends rather than just refactoring. If I don't need to do different languages. Could just use as is. 

Someone from CERN was presenting about this. Can embed everything, or route everything. Is one better or worse? 

ESRF: 
- One advantage, M-FE are separated – don't need to share dependencies, prevents bloat. Completely independent. 
- Makes it a bit heavier. More repos/projects to manage. If you create one for each component may be a bit too much. Could slow down development a little bit 
- When we were discussing, were convinced by the level of complexity in the UI requests. Can consider the UI as a standard application, resources are a complication. Good for you that you can do this as one project. Our backend is generic, so we can focus on the UI. Backend is already done. Think also that the microfrontends... it's not for free, complexity for the devs. 
- Haven't discussed how you access the data? 
  - Carlo: yeah this is what I discuss. Have multiple backend services. 

Talked about sharing the state. How about the security for an external service. If I want access to the state/store, how do you manage? 
- Basically the microfrontends work like any react component, pass them the props they need. They also have access through the API, to the fetching capabilities, I need to fetch this. The data portal will give it to them. That's how the state is shared. 
  - Do you use redux? You don't share... Sharing between components. 
    - Don't use redux. Only way to share is by the backend. Settings are handled there. Would want the backend to know the settings have change anyway. 

Why are you looking into this at all? 
- If we want to improve UI for the users, data viz changes for the type of data. 
  - Plenty of ways of doing that. I would advise monorepo. Are you monorepo or monolith? 
  - One main problem we had at the start was conflicted dependencies, libraries to install, upgrades. 
    - An easy solution to that would be to configure before... 
      - One solution to that is monorepos. Separate dependencies from each other. Then see if you need more complexity, especially for developers. Then you're dependent on the framework you choose. CERN has built their own solution? 
        - True that we will tackle it. Why not already. At least for now. 
        - Don't think it's possible for you to use ESRF's MX viz. It's embedded in the whole architecture. Need a common tech base. Dream was the frameworks would live together. CERN do this but think it was in house. Our solution doesn't work like this. Not explored the capabilities. 
        - Why micro frontend? 
        - Not just package management. Easy to swap at runtime. Deploy separately. Institute can develop their own. 

### [DataGateway microfrontend architecture](https://indico.esrf.fr/event/149/#3-datagateway-microfrontend-ar)

Plugins are not really re-usable. Depend on each other 

Because it's monorepo, could extract an apt. Component if desirable 

If we really wanted to do this, could make custom elements 
- E.G. Generic H5 viewer is OK. Anything that is linked to the API, or has strict state requirements then it's not worth it 

Q: Even at component level, to make it work at all want the interface match. Can you universally specify interface between systems. 
- Custom element is a well defined web standard. Can be provided props and states, and event handlers. That's well defined, if you want to hook that into your UI, you're limited by the custom element. You might need a wrapper to hook up to your own interfaces. E.g. to translate the props? It's a well defined standard for components so don't have to worry as much. In the process of making it a custom element you will do the de-coupling. 
- Andy: if you use h5web it talks to h5 grove? Have to respect that or it won't work. 
  - If it has a backend request, have to respect it. 
  - How has h5web been done? 
    - Separate repo. Customise that application to meet the needs of the data portal. 
  - Think it's now developed beyond this dependency on grove? 
  -  SciCat not interested in H5Web 

...would prefer things serverside. Important that data storage is dedicated to web application. What seen with ICAT is more plugin based. SciCat doesn't have anything like that. Do you have, behind the URLs, a working application or a package? 
- For STFC, can run the plugins standalone (e.g. for development). WHen building, it's just plain Javascript in a browser. THey are standalone applications that can be run on their own, but we don't do this for productions. 
- So we are talking about plugins rather microfrontends. 
  - Depends on definitions. Louise thinks it's analogous to microservices. 

Concern that doing this increase code size and load times. 
- Yes it does, increased complexity which needs to be managed. I know that ESRF are talking about the libraries being kept separate. If you share libraries that reduces bundle size. Will assume they all use the same version of React, at least. Other packages haven't been worth the effort. But it is a problem and a trade off. 
- ESRF do the same trick. 

## [Standardising Metadata](https://indico.esrf.fr/event/149/#b-265-standardising-metadata)

### [Modelling metadata in ICAT](https://indico.esrf.fr/event/149/#4-modelling-metadata-in-icat)

Map names from Nexus to ICAT, replace nexus path with underscores etc. 

Run two instances of ICAT, one for reading and one for writing 

Beamlines write to ActiveMQ with mandatory: 
- Dataset.name 
- Sample.name 
- Proposal 
- Instrument 
- Location 
- Parameter K:V pairs 

Unix location is unique identifier as Dataset <-> directory on disk 

This might be like 80 lines of ?plaintext? 

Questions about what the meaning of the entity. What is a Sample, WHat is a Dataset? 

Decided, that each angle is a raw dataset, and one reconstructed processed dataset 

Every time you have a new technique, create the ParameterType definitions for that technique for the mapping 

Additional sources: 
- Logbook 
- Resources? 
- Sample preparation plan and tracking 

MQ questions are too simple. How are you doing Techniques? 
- We're using DatasetParameter not the Technique field. The value is a list of PaNet ID. As a string. 

Will ICAT have a hierarchical metadata system? 
- I don't think we want to store a table. Stuff should be kept but some stuff should not go into ICAT. I don't think I would do it even if technically possible. 
- Point of a Parameter is to be searchable. If you do a more complex data structure? How do you make it searchable for a user? We can search a given parameter in a range. Already this implies key value pairs naturally. 
  - From a technical perspective you could use a robust library for it. Seems like their could be a frontend conversation. SciCat stores arbitrary JSON, searches it with loopback. 
  - Not sure it's worth it. 
- We also ingest in Elasticsearch, maybe it can do this. Maybe that should be a different component. 

SciCat is not relational. You have these Sub-entities. This is comparable to SciCat scientific metadata. New entities or you create ParameterTypes. 

Scientific metadata is being defined topdown. But you may miss metadata by the time you know it is gone. Some is in the files, some is not. ESRF do not agree. It should be in the files. Sometimes we are missing, and then you add it. 

Same principle as SciCat. You collect all metadata and make sense afterwards but you want to store everything. You are using the filesystem to collect everything. You don't see it in the metadata if you don't think it makes sense. 
- Metadata is a window. It might not be big enough but behind it is there. 

Defining the ParameterType simplifies things. Based on technique you can know what to capture. Easy for the user.  
- Don't know how this is done for SciCat. Beamlines and users define everything. Beamline scientists might not know everything. User could misinterpret information which is badly defined. 

### [Datacite metadata](https://indico.esrf.fr/event/149/#5-datacite-metadata)

Pointing to sample ids from external sources 

Panet ontologies 

Getting Panet terms into DataCite metadata 

Currently have the string, but want the URI as well (for technique) 

Also could treat specimen and species as PIDs – currently it's just a string for the name 

DataCite has small metadata schema 
- Subjects 
  - Passing proposal id and instrument as subject. This is not what the field is intended for.
- RelatedIdentifiers 
  - We know how relatedIdentifiers for isCollectedBy 
    - Added in 4.5, along with instrument and physical object changes 
  - Can also abuse these if you want 
  - HasMetadata is also useful 
- Proposal linked by the fundingReference, as this has an identifier 
- Affiliation, NameIdentifier 

DataPortal, thematic UIs 

Also external sources of information 

ILL have he chemical formula as a Sample Parameter. Comes from the proposal website. Give a sample list. We receive this list and then write to nexus/data portal 
- Can link formula to pubchem 

Sample management 

OpenAlex, matches plain strings to pid ids. Appends more abstract/description type information. 

Will DataCite be a data discovery mechanism? 
- DataCite should be for machines, not humans. Good for querying. Can easily build applications and services on top of it. Not for sending people to DataCite, but rely on other services consuming from DataCite. 
- Groups are actively collaborating with DataCite. They will collaborate and connect it for you. 

Landing pages. Tried to use DataCite. Failed to find a standard way to get the data stream when it is linked to the Dataset. 
- Known problem. Working/special interest group on this topic. Currently unsolved, but there are ideas. Surprising it's not been solved by DataCite. Many people who make suggestions on that. People assume data will be accessible by url. Not possible for data on tape. 

Comment: if it is in tape library, you might restore... what about timeout. Tell them to come back later. 
- This technical approach is what the SIG is for. Some of these are resolvable, you just need to scrape with a custom product. 
- How to encode the information for the scraper to the metadata. 

Don't know if this is the correct place to ask. Who pays for the data to be stored forever. 
- *Off topic discussion about the commitment of maintaining a landing page for a DOI, and the nature of social contracts.*
- What happens if you fail in your commitment. 
  - But what if they don't. DataCite was invented for this purpose.  
- Maybe OpenAlex can regenerate a landing page from the DataCite metadata. You don't want to do this all the time. 

Links to ontology are important, as names can have multiple meanings. Regenerating the specifics is not trivial. 

No-one is using wikidata 

### [Standardising metadata between catalogues](https://indico.esrf.fr/event/149/#6-standardising-metadata-betwe)

Struggles 
- No global metadata standard 
- Schema needs flex 
- Searchability 
- Reference data 

Middleground 
- Define schema per domain 
- References to the schema 
- Every SciCat Facility could enforce 
- Enforce in data ingestion, not at the database level 
- Not all metadata will be standardised 

Long term 
- JSON-Schema, RDF 
  - Ways of defining schema validation 
- LinkML 

DataCite/OAIPMH could be a standard. Import from it. 

Comply at a high level to this standard. 

Build and importer. 

Can enrich the metadata, but have to define the specific schema on top of DataCite that we subscribe to. 
- Working on this topic. Sending data from one system to another. RDF needs knowledge of ontologies. Easier to manage a pure data format. Work already done for PaNOSC. 
- Almost at OAIPMH with datacite. We export but do not import. Lazy solution without much value. 
- Maybe we translate without this third party. 
  - Will be limited to the DataCite fields. 
  - Where do we stop. 
  - Rolf: don't want to answer, just make remarks. OSCAR project on nexus ontology and panet ontology. That may create some ontology containing these parameters. In a way. So have PIDS for a subset of our parameter names. Useful building block for the standardisation method. 
  - 2nd remark. Both efforts can be combined. OAIPMH can provide any data format. Our PAN data format can be exposed over OAIPMH. Want to link across sites 

To clarify, the proposal. RDF. We're starting to look at linkML, product standard for defining your schemas. Once defined, automatically convert to different formats. RDF, OWL, JSON-LD/schema. Each standard has different uses. But if you can single source your schema, make it CI. That's what we're thinking of on the SciCat side. One thing we want to do is document the schemas somehow. Lot of use in JSON schema itself. Validator for incoming data. Not and RDF person very much. Not sure how we would use it. Don't have a triple store database. That’s the crux of the proposal 
- If you don't have an RDF. Just a way to add semantic information to all the fields. When it comes to exchanging formats. Interlinking data from multiple systems, JSON, JSON-LD. Know that these fields are defined by the RDF definition. But... 
  - Want to highlight that there are two very separate use cases. Validation, and assigning semantic information.  
    - Where is our semantic, all the nexus is semantic in it. Initally it is not an ontology. OSCARS project will create an ontology. Want to avoid the temperature effect (*same concept given multiple labels such as temp, temperature, T, etc.*). Needs to rely on this work. Have another top layer aggregation definition in nexus. Map to panet ontologies. Get nexus and can tell it is this technique. Don't want to start on defining. 
      - Someone told me that someone was working on JSONLD definitions for nexus. Yes. Onotoloy for nexus. In NIAC. Rolf knows the name. 

Comment: Middle ground. Close to use as well. Between the strict standardisation and the user defining. CIF framework proposed a solution in the 90s. My question is this could be a methodology that could be reused. Validate a data file, corresponds to document. Not against a single schema but multiple dictionaries. These can provide the definitions. You have a special allocated namespace. Called local. Users can put whatever they want there. Just that only the lab can use them. Any user can register a prefix for their data names with the institute. Then users define their dictionaries for their names. Well established standard of dictionaries in different areas of crystallography are also being defined in their dictionaries. What if you just do that. 
- We are doing this. See these formats as interchangeable definitions of a schema. Format doesn't matter. Similar concepts. We're working on this in the domain of EM. Conversion tool that goes between the schema and the cif dictionary. Not that hard. 
- We were thinking also of doing that for MX. Commnunity has a different backend. THought of using MX CIF. 
  - Yes a lot of overlap 
- Two problems in mind. Worldwide standardisation is complex. Standardise within the facility. No need to speak to any particular ontology. Applying schema on the data from whoever uses. Can deposit it wherever. 

AdM: mentioned DataCite as a start. All that you provide is only for public data. 
- As a start yes. We have a protocol and a format to begin with. Know exactly what to ask... 

## [Future Developments](https://indico.esrf.fr/event/149/#b-266-future-developments)

### [ICAT future developments](https://indico.esrf.fr/event/149/#7-icat-future-developments)

### [PaNfinder intelligent search engine](https://indico.esrf.fr/event/149/#8-panfinder-intelligent-search)

### [Discussion](https://indico.esrf.fr/event/149/#9-discussion)
