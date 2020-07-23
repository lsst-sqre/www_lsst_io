import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

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
  return (
    <ul>
      {data.allGuidesYaml.edges.map(({ node }) => (
        <li key={node.slug}>{node.title}</li>
      ))}
    </ul>
  );
};

export default FeaturedGuides;
