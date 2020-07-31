import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Grid from './basics/grid';

const NavCardContainer = styled.div`
  padding: var(--space-unit);
  margin: 0;
  box-shadow: var(--elevation-base);
  background-color: var(--c-card-background);
  border: 1px solid var(--c-card-border);
  border-radius: var(--border-radius-1);
  color: var(--c-card-text);

  h3 {
    line-height: 1.1;
    margin: 0 0 1rem 0;
  }

  a {
    color: var(--c-card-link);
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }

  /* Knock out default margins to keep cards tidy. Cards always end in a
  * paragraph.
  */
  p:last-child {
    margin-bottom: 0;
  }
`;

const NavCard = ({ slug, title, description }) => (
  <NavCardContainer>
    <Link to={slug}>
      <h3>{title}</h3>
    </Link>
    <p>{description}</p>
  </NavCardContainer>
);

NavCard.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const NavGrid = ({ links }) => (
  <Grid gridGap="1em" minWidth="12em">
    {links.map(({ slug, title, description }) => (
      <NavCard key={slug} slug={slug} title={title} description={description} />
    ))}
  </Grid>
);

NavGrid.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavGrid;
