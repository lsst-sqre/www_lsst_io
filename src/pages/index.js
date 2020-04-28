import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSearchForm from '../components/heroSearchForm';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Find Rubin Observatory docs and open source</h1>
    <p>
      <Link to="/search/">Check out the advanced search page.</Link>
    </p>

    <HeroSearchForm role="search" />
  </Layout>
);

export default IndexPage;
