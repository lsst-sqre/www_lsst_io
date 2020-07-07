import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSearchForm from '../components/heroSearchForm';
import PageContentContainer from '../components/pageContentContainer';

import { neutral } from '../design/color';

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
          backgroundColor={neutral['900']}
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

const StyledBackgroundSection = styled(BackgroundSection)`
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
  color: ${neutral['100']};
`;

/*
 * Container for content within the BackgroundSection.
 *
 * Using flexbox to center the hero content.
 */
const StyledSearchContainer = styled(PageContentContainer)`
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 70vh; // Give a peak of content down the page
  }

  .principal {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StyledBackgroundSection>
      <StyledSearchContainer>
        <div className="wrapper">
          <div className="principal">
            <h1>Find Rubin Observatory docs and open source</h1>

            <HeroSearchForm role="search" />
          </div>
        </div>
      </StyledSearchContainer>
    </StyledBackgroundSection>
    <section>
      <h2>Documents</h2>

      <p>
        <Link to="/search/?hierarchicalMenu[contentCategories.lvl0]=Documents">
          Search in all Rubin Observatory documents,
        </Link>{' '}
        or browse by series:
      </p>

      <ul>
        <li>
          <Link to="/sqr/">
            <strong>SQR</strong> &mdash; SQuaRE Technical Notes
          </Link>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
