import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Configure } from 'react-instantsearch-dom';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DocumentHit from '../components/documentHit';
import {
  SearchLayout,
  SearchResultsArea,
  SearchBoxArea,
  SearchRefinementsArea,
  StyledSearchBox,
  StyledPoweredBy,
} from '../components/searchLayout';

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

      <SearchLayout>
        <SearchBoxArea>
          <StyledSearchBox />
          <StyledPoweredBy />
        </SearchBoxArea>

        <SearchRefinementsArea>
          <h2>Refinements</h2>
        </SearchRefinementsArea>

        <SearchResultsArea>
          <Hits hitComponent={DocumentHit} />
        </SearchResultsArea>
      </SearchLayout>
    </InstantSearch>
  </Layout>
);

export default AdvancedSearchPage;
