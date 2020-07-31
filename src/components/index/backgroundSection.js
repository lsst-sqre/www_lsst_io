import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import PageContentContainer from '../pageContentContainer';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "lsst-stills-0014.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor="var(--c-reversed-background)"
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

BackgroundSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const StyledBackgroundSection = styled(BackgroundSection)`
  // Full-width in a contrained parent
  // https://css-tricks.com/full-width-containers-limited-width-parents/
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  // Background image
  background-position: bottom center;
  background-size: cover;

  // Effectively a "reversed" block; doesn't change based on theme
  color: var(--c-reversed-text);
`;

/*
 * Container for content within the BackgroundSection.
 *
 * Using flexbox to center the hero content.
 */
export const StyledSearchContainer = styled(PageContentContainer)`
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 70vh; // Give a peak of content down the page
    max-height: 28em;
  }

  .principal {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
