/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

// Full Algolia instantsearch theme includes its reset
import 'instantsearch.css/themes/algolia.css';
import './layout.css';

import Header from './header';
import Footer from './footer';
import { mainWidthRem } from '../utilities/sizes';

const StyledLayout = styled.div`
  /* Sticky-footer implementation
  * https://css-tricks.com/couple-takes-sticky-footer/
  */
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1 0 auto;

    .content-container {
      margin: 0 auto;
      max-width: ${mainWidthRem}rem;
    }
  }

  ${Footer} {
    flex-shrink: 0;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <div className="content">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="content-layer">
          <div className="content-container">{children}</div>
        </main>
      </div>
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
