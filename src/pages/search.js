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
  SearchRefinementSection,
} from '../components/searchLayout';
import SearchBox from '../components/instantsearch/searchBox';
import RefinementList from '../components/instantsearch/refinementList';
import HierarchicalMenu from '../components/instantsearch/hierarchicalMenu';
import CurrentRefinements from '../components/instantsearch/currentRefinements';
import NonEmptyHits from '../components/instantsearch/nonEmptyHits';
import DetailsToggleButton from '../components/detailsToggle';
import SearchSettingsCluster from '../components/searchSettingsCluster';
import DateRangeInput from '../components/instantsearch/dateRangeInput';
import RefinementOptIn from '../components/refinementOptIn';

const searchClient = algoliasearch(
  '0OJETYIVL5',
  'b7bd2f1080a5c4fe5eee502462bcc9d3'
);

/**
 * Create the URL parameters from the state.
 */
const createUrlParams = (state) => `?${qs.stringify(state)}`;

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

  const onSearchStateChange = (updatedSearchState) => {
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

  const startDate = new Date(2015, 0, 1);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

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
            <SearchBox />
            <CurrentRefinements />
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

            <SearchRefinementSection>
              <h2>Date updated</h2>
              <RefinementOptIn>
                <DateRangeInput
                  attribute="sourceUpdateTimestamp"
                  min={startDate.getTime() / 1000}
                  max={tomorrow.getTime() / 1000}
                />
              </RefinementOptIn>
            </SearchRefinementSection>

            <SearchRefinementSection>
              <h2>Date created</h2>
              <RefinementOptIn>
                <DateRangeInput
                  attribute="sourceCreationTimestamp"
                  min={startDate.getTime() / 1000}
                  max={tomorrow.getTime() / 1000}
                />
              </RefinementOptIn>
            </SearchRefinementSection>
          </SearchRefinementsArea>

          <SearchResultsArea>
            <SearchSettingsCluster>
              <div>
                <DetailsToggleButton
                  hitCardsExpanded={hitCardsExpanded}
                  setHitCardsExpanded={setHitCardsExpanded}
                />
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
