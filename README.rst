###########
www.lsst.io
###########

www.lsst.io is a portal for LSST project information and metadata.
It's designed to help LSST staff and the astronomy community discover documentation, software, and other bits of information produced by the LSST project.

Development workflow
====================

Use the local development server to preview and iterate on the site.

1. In one terminal, start the Flask server::

     make server

2. In another terminal, start Browsersync and the Gulp asset pipeline::

     make watch

3. Follow the printed instructions to view the site, likely at http://localhost:3000

Browsersync streams CSS changes to the browser and application changes trigger a browser reload.
