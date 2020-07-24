/**
 * Template for a page that collects user guides matching a specific tag.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GuideGrid from '../components/guideGrid';

export const query = graphql`
  query UserGuideCollection($tag: String!) {
    allGuidesYaml(
      filter: { tags: { eq: $tag } }
      sort: { fields: title, order: ASC }
    ) {
      edges {
        node {
          slug
          github
          description
          title
        }
      }
    }
  }
`;

const GuideCollectionTemplate = ({ pageContext, data }) => {
  const { title, description } = pageContext;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <h1>{title}</h1>

      <p>{description}</p>

      <GuideGrid guides={data.allGuidesYaml.edges} />
    </Layout>
  );
};

GuideCollectionTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default GuideCollectionTemplate;
