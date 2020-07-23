import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Grid from './basics/grid';
import GuideCard from './guideCard';

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
    <Grid gridGap="1em" minWidth="18em">
      {data.allGuidesYaml.edges.map(({ node }) => (
        <GuideCard
          key={node.slug}
          slug={node.slug}
          title={node.title}
          description={node.description}
          github={node.github}
        />
      ))}
    </Grid>
  );
};

export default FeaturedGuides;
