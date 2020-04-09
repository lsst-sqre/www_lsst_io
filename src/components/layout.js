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

import Header from './header';
import './layout.css';

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.0875rem 1.45rem;
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()} Association of Universities for
            Research in Astronomy (AURA), Inc..
          </p>
          <p>
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </p>
        </footer>
      </ContentContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
