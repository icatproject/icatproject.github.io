---
title: Python ICAT
---

`python-icat` is a Python package that provides a collection of modules
for writing programs that access an ICAT service using the SOAP
interface. It is based on Suds and extends it with ICAT specific
features.

## Documentation

See the [online documentation](https://python-icat.readthedocs.io/).

## System requirements

### Python

- Python 2.7 or newer. Python 2.6 will do but requires patching the
  sources, see below.

### Required Library packages

- Suds, either the [original version](https://fedorahosted.org/suds/)
  or the [fork by Jurko Gospodnetić](https://bitbucket.org/jurko/suds/). The latter is
  recommended as the original version is not maintained any more and
  contains bugs. Python 3 requires the jurko fork.
- [argparse](https://pypi.python.org/pypi/argparse/). (Only for Python
  2.6 and 3.1, argparse became part of the Python standard library in
  2.7 and 3.2 respectively.)

### Optional library packages

Only needed to use certain extra features, not required to install or
use python-icat itself.

- [PyYAML](http://pyyaml.org/wiki/PyYAML). (Only needed to use the
  YAML backend of icatdump.py and icatingest.py and to run the example
  scripts.)
- [lxml](http://lxml.de/). (Only needed to use the XML backend of
  icatdump.py and icatingest.py.)
- [Requests](http://python-requests.org/). (Only needed for the
  example scripts using the ICAT RESTful interface, icatexport.py and
  icatimport.py.)
- [pytest](http://pytest.org/) \>= 2.8.0. (Only if you want to run the
  tests.)
- [pytest-dependency](https://pypi.python.org/pypi/pytest-dependency/) \>=
  0.2. (Only if you want to run the tests.)
- [distutils-pytest](https://pypi.python.org/pypi/distutils-pytest/).
  (Only if you want to run the tests.)

## Download

Current Release:

- [python-icat 0.14.2](https://icatproject.org/misc/python-icat/download/python-icat-0.14.2.tar.gz)
  ([signature](https://icatproject.org/misc/python-icat/download/python-icat-0.14.2.tar.gz.asc))

Old versions can also be found [here](https://icatproject.org/misc/python-icat/download/).

## Installation

python-icat uses the distutils Python standard library package and\
follows its conventions of packaging source distributions. See the
documentation on [Installing Python Modules](http://docs.python.org/2.7/install/) for details or to
customize the install process.

1.  Download the sources, unpack, and change into the source directory.
2.  `python setup.py build`
3.  `python setup.py install`

The last step might require admin privileges in order to write into the
site-packages directory of your Python installation.

If you are using Python 2.6, apply python2_6.patch (included in the
source distribution, see the README for detailed instructions) after the
first step. It removes the use of certain language features (dict
comprehensions, curly braces notation of sets, bytes string literal
prefix 'b') which were introduced in Python 2.7.

## Additional Resources

- I gave a [presentation on python-icat](/pdf/user-documentation/RolfKrahl_python-icat_Dublin_2014.pdf)
  at the ICAT meeting, March 2014, Dublin.
- I gave a [presentation on data ingestion with python-icat](/pdf/user-documentation/ingestion-python-icat.pdf)
  at the ICAT meeting, October 2016, Copenhagen.
- The [source repository](https://github.com/icatproject/python-icat)
  is on GitHub.

## Author

Rolf Krahl

Copyright 2013-2018 Helmholtz-Zentrum Berlin für Materialien und Energie
GmbH

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

- <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
