.. image:: https://github.com/lsst-sqre/www_lsst_io/workflows/CI/badge.svg
   :target: https://github.com/lsst-sqre/www_lsst_io/actions?query=workflow%3ACI

###########
www.lsst.io
###########

https://www.lsst.io is a portal for `Rubin Observatory`_ technical documentation.
It's designed to help Rubin Observatory staff and the astronomy community discover documentation, software, and other bits of technical information produced by the Rubin Observatory and LSST.

Technical stack
===============

- This site is built with Gatsby_ and React_.
- The search experience is powered by Algolia_ and react-instantsearch_
- Styling is done through styled-components_.
- It's deployed on `LSST the Docs <https://sqr-006.lsst.io>`__.
- Searchable content is curated and ingested by Ook_, the Rubin Observatory librarian service.
  Ook ingests URLs/documents on-demand through a Kafka message queue on Roundtable_.

Development workflow primer
===========================

Node version
------------

The Node.js version used
This project is intended to be built with a Node.js version that's encoded in the `.nvmrc <./.nvmrc>`__ file.
To adopt this node version, we recommend `installing and using the node version manager <https://github.com/nvm-sh/nvm>`__.

Then you can use the preferred node version by running ``nvm`` from the project root:

.. code-block:: bash

   nvm use

Install locally
---------------

Install the JavaScript packages:

.. code-block:: bash

   npm install .

Start the development server
----------------------------

.. code-block:: bash

   gatsby develop

View the site at http://localhost:8000.

Also view the GraphiQL playground at http://localhost:8000/___graphql to explore the site's data layer.

Install pre-commit hooks
------------------------

You can automatically lint and format code using pre-commit_ hooks.

First, install pre-commit in an isolated virtual environment:

.. code-block:: bash

   python3 -m venv .venv
   source .venv/bin/activate
   python -m pip install pre-commit
   pre-commit install

After this initialization step, you can re-activate the hooks in the virtual environment:

.. code-block:: bash

   source .venv/bin/activate

Manual linting and formatting
-----------------------------

You can also manually lint and format code.

Lint JavaScript:

.. code-block:: bash

   npm run lint

Lint and auto-format JavaScript (powered by Prettier_):

.. code-block:: bash

   npm run lint:fix

Format other types of code with Prettier_:

.. code-block:: bash

   npm run format

Create a production build
-------------------------

.. code-block:: bash

   gatsby build

This build static HTML and optimized per-route JavaScript code bundles.

You can serve the production build locally:

.. code-block:: bash

   gatsby serve

Project layout
==============

Here are the important files and directories:

``licenses/``
    This directory contains licenses for third-party code that is vendored by this project (such as the license for the Gatsby starter files).

``node_modules/``
    This directory contains npm packages, as defined by ``package.json`` / ``package-lock.json``.
    This directory isn't maintained in Git.

``src/``
    This directory contains all the front-end code for www.lsst.io itself.

``.pre-commit-config.yaml``
    Pre-commit hooks that ensure code is correctly formatting and doesn't have any linting issues.

``.prettierrc``
    This file configures Prettier_, which automatically formats the codebase.

``.prettierignore``
    This file lists files and directories that Prettier_ will not format.

``gatsby-browser.js``
    This file is where we extend or customize Gatsby's default settings affecting the browser, through the `Gatsby browser APIs <https://www.gatsbyjs.org/docs/browser-apis/>`__.

``gatsby-config.js``
    This is the main Gatsby configuration file.
    See the `Gatsby config docs <https://www.gatsbyjs.org/docs/gatsby-config/>`__ for details.

``gatsby-node.js``
    This file is where we customize the build process using `Gatsby Node APIs <https://www.gatsbyjs.org/docs/node-apis/>`__.

``gatsby-ssr.js``
    This file is where we customize Gatsby's server-side rendering with the `Gatsby SSR APIs <https://www.gatsbyjs.org/docs/ssr-apis/>`__.

``LICENSE``
    This project is licensed under MIT, along with the sub-licenses listed in ``licenses/``.

``package-lock.json``
    A file is generated based on ``package.json`` and contains the exact version of npm dependencies.

``pacakge.json``
    This file is the manifest for the Node.js project and contains the project's metadata and abstract dependencies.

.. _Rubin Observatory: https://www.lsst.org
.. _Gatsby: https://www.gatsbyjs.org
.. _React: https://reactjs.org
.. _Algolia: https://www.algolia.com
.. _react-instantsearch: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/
.. _styled-components: https://styled-components.com
.. _Ook: https://github.com/lsst-sqre/ook
.. _Prettier: https://prettier.io/
.. _pre-commit: https://pre-commit.com/
.. _Roundtable: https://roundtable.lsst.io
