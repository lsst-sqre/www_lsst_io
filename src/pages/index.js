import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSearchForm from '../components/heroSearchForm';
import PageContentContainer from '../components/pageContentContainer';

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
  color: var(--c-reversed-text);
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
          <Link to="/dmtn/">
            <strong>DMTN</strong> &mdash; Data Management Technotes
          </Link>
        </li>
        <li>
          <Link to="/dmtr/">
            <strong>DMTR</strong> &mdash; Data Management Test Reports
          </Link>
        </li>
        <li>
          <Link to="/ittn/">
            <strong>ITTN</strong> &mdash; IT Technotes
          </Link>
        </li>
        <li>
          <Link to="/ldm/">
            <strong>LDM</strong> &mdash; LSST Data Management
          </Link>
        </li>
        <li>
          <Link to="/lpm/">
            <strong>LPM</strong> &mdash; LSST Project Management
          </Link>
        </li>
        <li>
          <Link to="/lse/">
            <strong>LSE</strong> &mdash; LSST Systems Engineering
          </Link>
        </li>
        <li>
          <Link to="/opstn/">
            <strong>OPSTN</strong> &mdash; Operations Technotes
          </Link>
        </li>
        <li>
          <Link to="/pstn/">
            <strong>PSTN</strong> &mdash; Project Science Team Technotes
          </Link>
        </li>
        <li>
          <Link to="/rtn/">
            <strong>RTN</strong> &mdash; Rubin Technotes
          </Link>
        </li>
        <li>
          <Link to="/smtn/">
            <strong>SMTN</strong> &mdash; Simulations Technotes
          </Link>
        </li>
        <li>
          <Link to="/sitcomtn/">
            <strong>SITCOMTN</strong> &mdash; Systems Integration, Testing, and
            Commissioning Technotes
          </Link>
        </li>
        <li>
          <Link to="/sqr/">
            <strong>SQR</strong> &mdash; SQuaRE Technotes
          </Link>
        </li>
        <li>
          <Link to="/tstn/">
            <strong>TSTN</strong> &mdash; Telescope &amp; Site Technotes
          </Link>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
