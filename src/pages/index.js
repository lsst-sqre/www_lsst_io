import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSearchForm from '../components/heroSearchForm';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Find Rubin Observatory docs and open source</h1>

    <HeroSearchForm role="search" />
  </Layout>
);

export default IndexPage;
