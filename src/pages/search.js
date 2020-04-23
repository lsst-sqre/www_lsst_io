import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  RefinementList,
  HierarchicalMenu,
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
} from '../components/searchLayout';
import { StyledHits } from '../components/hits';
import { StyledDetailsToggleButton } from '../components/detailsToggle';

const searchClient = algoliasearch(
  '0OJETYIVL5',
  'b7bd2f1080a5c4fe5eee502462bcc9d3'
);

const AdvancedSearchPage = () => {
  const [hitCardsExpanded, setHitCardsExpanded] = React.useState(false);

  return (
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
              <h2>Content types</h2>
              <HierarchicalMenu
                attributes={[
                  'contentCategories.lvl0',
                  'contentCategories.lvl1',
                ]}
              />
            </SearchRefinementSection>

            <SearchRefinementSection>
              <h2>Contributors</h2>
              <RefinementList attribute="authorNames" />
            </SearchRefinementSection>
          </SearchRefinementsArea>

          <SearchResultsArea>
            <StyledDetailsToggleButton
              hitCardsExpanded={hitCardsExpanded}
              setHitCardsExpanded={setHitCardsExpanded}
            />
            <StyledHits
              hitComponent={DocumentHit}
              hitCardsExpanded={hitCardsExpanded}
            />
          </SearchResultsArea>
        </SearchLayout>
      </InstantSearch>
    </Layout>
  );
};

export default AdvancedSearchPage;
