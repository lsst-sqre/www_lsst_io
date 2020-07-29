import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import qs from 'qs';

import useDebounce from '../hooks/useDebounce';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DocumentHit from '../components/documentHit';
import {
  SearchLayout,
  SearchResultsArea,
  SearchBoxArea,
  SearchRefinementsArea,
  StyledSearchBox,
  SearchRefinementSection,
} from '../components/searchLayout';
import PoweredBy from '../components/instantsearch/poweredBy';
import RefinementList from '../components/instantsearch/refinementList';
import HierarchicalMenu from '../components/instantsearch/hierarchicalMenu';
import ClearRefinements from '../components/instantsearch/clearRefinements';
import NonEmptyHits from '../components/instantsearch/nonEmptyHits';
import DetailsToggleButton from '../components/detailsToggle';
import SearchSettingsCluster from '../components/searchSettingsCluster';

const searchClient = algoliasearch(
  '0OJETYIVL5',
  'b7bd2f1080a5c4fe5eee502462bcc9d3'
);

/**
 * Create the URL parameters from the state.
 */
const createUrlParams = state => `?${qs.stringify(state)}`;

/**
 * Create a full URL from the search state.
 */
const searchStateToUrl = ({ location }, searchState) =>
  searchState ? `${location.pathname}${createUrlParams(searchState)}` : '';

/**
 * Parse the search state from a URL.
 */
const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

/**
 * Debounce time to update browser history given user input into search UI
 * (milliseconds).
 */
const DEBOUNCE_TIME = 800;

const AdvancedSearchPage = ({ location }) => {
  const [hitCardsExpanded, setHitCardsExpanded] = React.useState(false);
  const [searchState, setSearchState] = React.useState(
    urlToSearchState(location)
  );
  const debouncedSearchState = useDebounce(searchState, DEBOUNCE_TIME);

  const onSearchStateChange = updatedSearchState => {
    setSearchState(updatedSearchState);
  };

  // Prettier struggles with this useEffect but I don't know why.
  // prettier-ignore
  React.useEffect(
    () => {
      if (debouncedSearchState) {
        // I tried using setState here, but I found that that broke the "Back"
        // button. Ultimately this means that the search state overwrites
        // itself as the user refines their search. There is no "undo" to the
        // refinements.
        window.history.replaceState(
          debouncedSearchState,
          '',
          searchStateToUrl({ location }, debouncedSearchState)
        );
      }
    },
    [debouncedSearchState, location]
  );

  return (
    <Layout>
      <SEO title="Advanced search" />
      <h1>Advanced search</h1>

      <p>
        Search in Rubin Observatory technical documentation.{' '}
        <Link to="/about">Learn more</Link> about what content is currently
        available.
      </p>

      <InstantSearch
        searchClient={searchClient}
        indexName="document_dev"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createUrl={createUrlParams}
      >
        <Configure
          distinct
          facetingAfterDistinct="true"
          attributesToSnippet={['content:20']}
        />

        <SearchLayout>
          <SearchBoxArea>
            <StyledSearchBox autoFocus />
            <PoweredBy />
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
            <SearchSettingsCluster>
              <div>
                <DetailsToggleButton
                  hitCardsExpanded={hitCardsExpanded}
                  setHitCardsExpanded={setHitCardsExpanded}
                />
                <ClearRefinements />
              </div>
            </SearchSettingsCluster>
            <NonEmptyHits
              hitComponent={DocumentHit}
              hitCardsExpanded={hitCardsExpanded}
            />
          </SearchResultsArea>
        </SearchLayout>
      </InstantSearch>
    </Layout>
  );
};

AdvancedSearchPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AdvancedSearchPage;
