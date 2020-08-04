import React from 'react';
import PropTypes from 'prop-types';

import Grid from './basics/grid';
import GuideCard from './guideCard';

const GuideGrid = ({ guides }) => (
  <Grid gridGap="1em" minWidth="18em">
    {guides.map(({ node }) => (
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

GuideGrid.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GuideGrid;
