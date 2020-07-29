import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContentTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    vertical-align: baseline;
    padding: var(--space-xxxs);
  }

  .col-category {
    width: 20%;
  }

  .col-type {
    width: 60%;
  }

  .col-part {
    width: 40%;
  }

  .col-part2 {
    width: 20%;
  }

  .col-check {
    width: 10%;
  }

  tbody tr:nth-child(even) {
    background-color: var(--c-table-row-highlight);
  }

  .category {
    background-color: var(--c-background);
  }

  tbody,
  tfoot,
  thead {
    border-top: 1px solid var(--c-table-border);
    border-bottom: 1px solid var(--c-table-border);
  }

  tfoot {
    font-size: 0.8em;
  }

  caption {
    font-style: italic;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="Learn about the Vera Rubin Observatory technical documentation portal, and the content that is currently available."
    />

    <h1>About the technical documentation portal</h1>

    <h2 id="purpose">Purpose</h2>

    <p>
      The goal of this documentation portal is to help you access and discover
      the Rubin Observatory’s public technical documentation. This portal is
      available to everyone: the observatory team, the astronomy community, and
      the general public.
    </p>

    <p>
      Although there may be some public technical documentation that is not yet
      available through this search portal, we index all our technote document
      series, and are adding new sources all the time. See{' '}
      <a href="#content-coverage">the content coverage table</a>, below for
      details.
    </p>

    <p>
      <em>
        Documentation that isn’t public is beyond the scope of this portal.
      </em>{' '}
      Observatory team members should log into individual platforms to find
      non-public information, such as{' '}
      <a href="https://docushare.lsstcorp.org/docushare/dsweb/HomePage">
        DocuShare
      </a>
      , <a href="https://jira.lsstcorp.org/secure/Dashboard.jspa">Jira</a>,{' '}
      <a href="https://confluence.lsstcorp.org">Confluence</a>, or the{' '}
      <a href="https://project.lsst.org/">Project homepage</a>.
    </p>

    <h2 id="content-coverage">Content coverage</h2>

    <p>
      Content types are added systematically as we develop our content indexer,{' '}
      <a href="https://github.com/lsst-sqre/ook">Ook</a>. The following table
      summarizes the types of content that are currently available through the
      portal, along with content types that we anticipate adding in the future.
    </p>

    <ContentTable>
      <caption>Status of content availability in this portal.</caption>
      <thead>
        <tr>
          <th className="col-category"></th>
          <th className="col-type" scope="col">
            Content type
          </th>
          <th className="col-check" scope="col">
            Search{' '}
            <sup>
              <a href="#content-types-fn1">[1]</a>
            </sup>
          </th>
          <th className="col-check" scope="col">
            Browse{' '}
            <sup>
              <a href="#content-types-fn2">[2]</a>
            </sup>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="category" rowSpan="11" scope="row">
            Documents
          </th>
          <td>Technical notes on lsst.io &mdash; LaTeX</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Technical notes on lsst.io &mdash; rst format</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>DMTR &mdash; lsst.io</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>DMTR &mdash; DocuShare (public)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LDM &mdash; lsst.io</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>LDM &mdash; DocuShare (public)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LPM &mdash; lsst.io</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>LPM &mdash; DocuShare (public)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>LSE &mdash; lsst.io</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>LSE &mdash; DocuShare (public)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Zenodo &mdash; lsst-dm community</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="category" scope="row">
            Guides
          </th>
          <td>Sphinx-based guides &mdash; lsst.io</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="category" scope="row" rowSpan="2">
            Discussions
          </th>
          <td>Community forum (public)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>DM RFC (public)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="category" scope="row">
            Software
          </th>
          <td>GitHub repositories</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="category" scope="row">
            Misc.
          </th>
          <td>Glossary terms</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" id="content-types-fn1">
            <sup>[1]</sup> “Search” means the full text content is searchable
            from the Advanced search page.
          </td>
        </tr>
        <tr>
          <td colSpan="4" id="content-types-fn2">
            <sup>[2]</sup> “Browse” means the entity is linked from a page on
            this portal.
          </td>
        </tr>
      </tfoot>
    </ContentTable>
  </Layout>
);

export default AboutPage;
