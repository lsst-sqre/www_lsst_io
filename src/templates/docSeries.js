/**
 * Template for a browsable listing of documents within a document series.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function DocSeriesTemplate({ pageContext: { docSeries } }) {
  return (
    <Layout>
      <SEO title={docSeries.name} />
      <h1>{docSeries.name}</h1>
    </Layout>
  );
}

DocSeriesTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};
