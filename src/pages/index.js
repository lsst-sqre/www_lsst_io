import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  StyledBackgroundSection,
  StyledSearchContainer,
} from '../components/index/backgroundSection';
import HeroSearchForm from '../components/heroSearchForm';
import FeaturedGuides from '../components/featuredGuides';
import NavGrid from '../components/navGrid';

export const query = graphql`
  query {
    allDocSeriesYaml(sort: { fields: key, order: ASC }) {
      edges {
        node {
          key
          name
        }
      }
    }
    allGuideCollectionsYaml(sort: { fields: title, order: ASC }) {
      edges {
        node {
          slug
          title
          description
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { allDocSeriesYaml, allGuideCollectionsYaml } = data;

  // Adapt the shape of GraphQL to the NavGrid props
  const docSeriesData = allDocSeriesYaml.edges.map(({ node }) => ({
    slug: node.key.toLowerCase(),
    title: node.key,
    description: node.name,
  }));

  const guideCollectionsData = allGuideCollectionsYaml.edges.map(
    ({ node }) => ({
      slug: node.slug,
      title: node.title,
      description: node.description,
    })
  );

  return (
    <Layout>
      <SEO title="Home" />

      <StyledBackgroundSection>
        <StyledSearchContainer>
          <div className="wrapper">
            <div className="principal">
              <h1>Find Rubin Observatory technical docs and software.</h1>

              <HeroSearchForm role="search" />
            </div>
          </div>
        </StyledSearchContainer>
      </StyledBackgroundSection>

      <section>
        <h2>Featured guides</h2>
        <FeaturedGuides />
      </section>

      <section>
        <h2>Documents</h2>

        <p>
          <Link to="/search/?hierarchicalMenu[contentCategories.lvl0]=Documents">
            Search in Rubin Observatory technical documents,
          </Link>{' '}
          or browse by series:
        </p>

        <NavGrid links={docSeriesData} />

        <p>
          <small>
            <sup>*</sup> Documents held only in{' '}
            <a href="https://docushare.lsstcorp.org/docushare/dsweb/HomePage">
              DocuShare
            </a>{' '}
            are not yet part of the search results.{' '}
            <Link to="/about/">Learn more.</Link>
          </small>
        </p>
      </section>

      <section>
        <h2>Guides</h2>

        <NavGrid links={guideCollectionsData} />
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
