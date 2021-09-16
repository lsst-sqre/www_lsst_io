/**
 * Template for a browsable listing of documents within a document series.
 */

import React from 'react';
import PropTypes from 'prop-types';
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
import CurrentRefinements from '../components/instantsearch/currentRefinements';
import { StyledHits } from '../components/instantsearch/hits';
import DetailsToggleButton from '../components/detailsToggle';
import SearchSettingsCluster from '../components/searchSettingsCluster';
import AutoSortBy from '../components/instantsearch/autoSortBy';
import DateRangeInput from '../components/instantsearch/dateRangeInput';

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

export default function DocSeriesTemplate({
  pageContext: { docSeries },
  location,
}) {
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
      <SEO title={docSeries.name} description={docSeries.description} />
      <h1>{docSeries.name}</h1>

      {/* eslint-disable react/no-danger */}
      {docSeries.notice && (
        <p dangerouslySetInnerHTML={{ __html: docSeries.notice }} />
      )}
      {/* eslint-enable react/no-danger */}

      <InstantSearch
        searchClient={searchClient}
        indexName="document_dev_handle_desc"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createUrl={createUrlParams}
      >
        <Configure
          distinct
          facetingAfterDistinct
          attributesToSnippet={['content:20']}
          filters={`series:${docSeries.key}`}
          hitsPerPage={1000}
        />

        <SearchLayout>
          <SearchBoxArea>
            <SearchBox />
            <CurrentRefinements />
          </SearchBoxArea>

          <SearchRefinementsArea>
            <SearchRefinementSection>
              <h2>Contributors</h2>
              <RefinementList attribute="authorNames" />
            </SearchRefinementSection>

            <SearchRefinementSection>
              <h2>Date created</h2>
              <DateRangeInput
                attribute="sourceCreationTimestamp"
                min={startDate.getTime() / 1000}
                max={tomorrow.getTime() / 1000}
              />
            </SearchRefinementSection>
          </SearchRefinementsArea>

          <SearchResultsArea>
            <SearchSettingsCluster>
              <div>
                <AutoSortBy
                  defaultRefinement="document_dev_handle_desc"
                  relevanceRefinement="document_dev"
                  items={[
                    { value: 'document_dev', label: 'Relevance' },
                    { value: 'document_dev_handle_desc', label: 'ID' },
                  ]}
                />
                <DetailsToggleButton
                  hitCardsExpanded={hitCardsExpanded}
                  setHitCardsExpanded={setHitCardsExpanded}
                />
              </div>
            </SearchSettingsCluster>

            <StyledHits
              hitComponent={DocumentHit}
              hitCardsExpanded={hitCardsExpanded}
            />
          </SearchResultsArea>
        </SearchLayout>
      </InstantSearch>
    </Layout>
  );
}

DocSeriesTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
