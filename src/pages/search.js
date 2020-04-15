import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  RefinementList,
} from 'react-instantsearch-dom';

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
  SearchRefinementSection,
  StyledHits,
} from '../components/searchLayout';

const searchClient = algoliasearch(
  '0OJETYIVL5',
  'b7bd2f1080a5c4fe5eee502462bcc9d3'
);

const AdvancedSearchPage = () => (
  <Layout>
    <SEO title="Advanced search" />
    <h1>Advanced search</h1>

    <p>
      Search the entire universe of Rubin Observatory documentation and open
      source projects.
    </p>

    <InstantSearch searchClient={searchClient} indexName="document_dev">
      <Configure
        distinct
        facetingAfterDistinct="true"
        attributesToSnippet={['content:20']}
      />

      <SearchLayout>
        <SearchBoxArea>
          <StyledSearchBox autoFocus />
          <StyledPoweredBy />
        </SearchBoxArea>

        <SearchRefinementsArea>
          <SearchRefinementSection>
            <h2>Series</h2>
            <RefinementList attribute="series" />
          </SearchRefinementSection>

          <SearchRefinementSection>
            <h2>Contributors</h2>
            <RefinementList attribute="authorNames" />
          </SearchRefinementSection>
        </SearchRefinementsArea>

        <SearchResultsArea>
          <StyledHits hitComponent={DocumentHit} />
        </SearchResultsArea>
      </SearchLayout>
    </InstantSearch>
  </Layout>
);

export default AdvancedSearchPage;
