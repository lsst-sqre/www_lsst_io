import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import GuideGrid from './guideGrid';

const FeaturedGuides = () => {
  const data = useStaticQuery(graphql`
    query FeaturedGuides {
      allGuidesYaml(
        filter: { tags: { eq: "editorial/featured" } }
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
  `);
  return <GuideGrid guides={data.allGuidesYaml.edges} />;
};

export default FeaturedGuides;
