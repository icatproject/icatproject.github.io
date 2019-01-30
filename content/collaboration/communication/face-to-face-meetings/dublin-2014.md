---
title: Dublin 2014
---

# Dublin Meeting, Trinity College Dublin, March 2014

## Presentations

[ICAT collaboration and its governance – Brian Matthews](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/BrianMatthews_SteeringGroup_Dublin_2014.pdf)

## Site reports

[DESY – Frank Shluenzen](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/FrankSchluenzen_DESY_Dublin_2014.pdf)

[DLS – Alun Ashton (presented by Tom Griffin)](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/TomGriffin_Diamond_Dublin_2014.pdf)

[Elettra – Milan Prica](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/MilanPrica_Elettra_Dublin_2014.pdf)

[ESRF – Alistair Mills](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/AlistairMills_ESRF_Dublin_2014.pdf)

[HZB – Rolf Krahl](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/RolfKrahl_hzb_Dublin_2014.pdf)

[ISIS – Tom Griffin](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/TomGriffin_ISIS_Dublin_2014.pdf)

[SNS – Shelly Ren](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/ShellyRen_SNS_Dublin_2014.pdf)

[ALBA – Daniel Salvat](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/DanielSalvat_ALBA_Dublin_2014.pdf)

## Presentations

[python-icat – a library for writing ICAT clients in Python – Rolf Krahl](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/RolfKrahl_python-icat_Dublin_2014.pdf)

[A domain specific ICAT GUI – Tom Griffin](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/TomGriffin_A-DomainSpecificInterface_Dublin_2014.pdf)

[ISIS authz Rules -Tom Griffin](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/TomGriffin_ISISAuthz_Dublin_2014.pdf)

[Authz rules – Rolf Krahl](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/RolfKrahl_authz_Dublin_2014.pdf)

[Mantid and ICAT – Jay Rainey](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/JayRainey_Mantid_Dublin_2014.pdf)

[IRO Viewer – Brian Matthews](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/BrianMatthews_IROViewer_Dublin_2014.pdf)

[IJP for LSF –  Steve Fisher](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/SteveFisher_IJP_Dublin_2014.pdf)

[Experience of the ICAT API and Documentation – Jay Rainey](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/JayRainey_APIAndDoc_Dublin_2014.pdf)

[J2EE containers – Steve Fisher](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/SteveFisher_Containers_Dublin_2014.pdf)

## Status and Roadmap

[ICAT Core, IDS and IJP – Steve Fisher](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/SteveFisher_ICATCoreIDSAndIJP-_Dublin_2014.pdf)

[TopCAT – Wayne Chung](/pdf/collaboration/communication/face-to-face-meetings/dublin-2014/WayneChung_TopCAT-_Dublin_2014.pdf)

## Observations

- A good and constructive meeting
- Tom's domain specific GUI looks very promising
- Jay liked the speed and simplicity of ICAT4.3 compared to ICAT 3 but
  requested some  clarifications to the documentation
- Very few people have actually used the ICAT API.
- Rolf's suggestion to add an InvestigationGroup was interesting and
  will de discussed further on the icatgroup list before deciding
  whether or not to accept it.
- There was not much enthusiasm for trying other J2EE containers at
  the moment.
- The Status and Roadmap presentations were accepted but:

  1.  There was no interest in changing the getAPIVersion() to have a
      more sensible name.
  2.  The config operation of the setup scripts should be preserved
      though should not be required.
  3.  There was concern that the Lucene index was a single point of
      failure in a multi-ICAT setup – it was also pointed out that it
      could require a lot of memory.
  4.  The federation part of TopCAT was considered to be essential by
      a significant number of people – so multi-ICAT searches will be
      kept.

- It was suggested that an existing abstraction of a job system
  should be used when generalising the IJP. In factthe only one
  I found was [BLAH](http://iopscience.iop.org/1742-6596/331/6/062039/pdf/1742-6596_331_6_062039.pdf)
  of which I was aware but had forgotten.
- Many thanks to John Walsh and TCD for the organisation.
