###########
www.lsst.io
###########

www.lsst.io is a portal for LSST project information and metadata.
It's designed to help LSST staff and the astronomy community discover documentation, software, and other bits of information produced by the LSST project.

The site uses data acquired separately by pipelines in the `lsst-projectmeta-kit`_ package.

Development set up
==================

This project relies on both Python 3.5 (and newer) and Node.js (with npm).

Install the node dependencies by running::

   npm install

You can install the Python dependencies for local development by running::

   pip install -e .

Development workflow
====================

You can test the Python backend by running the Python unit tests by running::

   make test

To iterate on the site design, use the local development server:

1. Set the ``PROJECTMETA_MONGO`` environment variable with the URI for Projectmeta's MongoDB (``mongodb://`` or ``mongodb+srv://``).

2. Start the Flask server::

     make server

3. In second terminal, start Browsersync_ and the Gulp asset pipeline::

     make watch

4. Follow the printed instructions to view the site, likely at http://localhost:3000

Browsersync_ streams CSS changes to the browser and application changes trigger a browser reload.

Deployment
==========

Set the following environment variables for LSST the Docs and Projectmeta:

- ``LTD_KEEPER_USER`` — Password for LTD Keeper instance.
- ``LTD_KEEPER_PASSWORD`` — Username for LTD Keeper instance.
- ``LTD_MASON_AWS_ID`` — AWS access key ID.
- ``LTD_MASON_AWS_SECRET`` — AWS secret access key.
- ``PROJECTMETA_MONGO`` — URI of Projectmeta's MongoDB (``mongodb://`` or ``mongodb+srv://``).

Then:

1. Compile the Sass::

      make scss

2. Compile the static HTML site::

      make site

3. Deploy the site::

      make deploy

.. _Browsersync: https://browsersync.io
.. _lsst-projectmeta-kit: https://github.com/lsst-sqre/lsst-projectmeta-kit
