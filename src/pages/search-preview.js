import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SearchPreviewPage = () => (
  <Layout>
    <SEO title="Search Preview" />
    <Helmet
      script={[
        {
          src: 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US',
        },
      ]}
    />
    <h1>Next-generation search preview</h1>

    <p>
      Preview the next-generation search experience for the Rubin Observatory
      technical documentation. This page is a work in progress and may not
      reflect the final design or functionality.
    </p>

    <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US" />

    <gen-search-widget
      configId="90afe8a8-942c-41f4-ba8c-6200b3862900"
      triggerId="searchWidgetTrigger"
    />

    <StyledInput placeholder="Search" id="searchWidgetTrigger" />
  </Layout>
);

const StyledInput = styled.input`
  width: 100%;
  box-shadow: var(--elevation-md);
  border-radius: var(--border-radius-1);
  font-size: 1.2rem;
  padding: var(--space-xxs);
`;

SearchPreviewPage.propTypes = {};

export default SearchPreviewPage;
