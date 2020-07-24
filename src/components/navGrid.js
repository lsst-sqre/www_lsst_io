import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Grid from './basics/grid';

const NavCard = ({ slug, title, description }) => (
  <div>
    <Link to={slug}>
      <h3>{title}</h3>
    </Link>
    <p>{description}</p>
  </div>
);

NavCard.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const NavGrid = ({ links }) => (
  <Grid gridGap="1em" minWidth="18em">
    {links.map(({ slug, title, description }) => (
      <NavCard key={slug} slug={slug} title={title} description={description} />
    ))}
  </Grid>
);

NavGrid.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavGrid;
