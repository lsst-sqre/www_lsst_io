import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from 'react-instantsearch-dom';

import Layout from '../components/layout';
import SEO from '../components/seo';

const searchClient = algoliasearch(
  '0OJETYIVL5',
  'b7bd2f1080a5c4fe5eee502462bcc9d3'
);

const AdvancedSearchPage = () => (
  <Layout>
    <SEO title="Advanced search" />
    <h1>Advanced search</h1>

    <InstantSearch searchClient={searchClient} indexName="document_dev">
      <Configure distinct />

      <SearchBox />

      <Hits />
    </InstantSearch>
  </Layout>
);

export default AdvancedSearchPage;
