import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StyledHeroSearch = styled.div`
  font-size: 2rem;

  form {
    display: flex;
  }

  input[type='submit'] {
    margin-left: 1rem;
  }

  label span {
    // visually hidden (refactor this)
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

const SearchBox = styled.div`
  flex: 1 1 0;

  input {
    width: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Find Rubin Observatory docs and open source</h1>
    <p>
      <Link to="/search/">Check out the advanced search page.</Link>
    </p>

    <StyledHeroSearch role="search">
      <form>
        <SearchBox>
          <label htmlFor="search">
            <input type="search" id="search" name="search" />
            <span>Search</span>
          </label>
        </SearchBox>
        <input type="submit" value="Search" />
      </form>
    </StyledHeroSearch>
  </Layout>
);

export default IndexPage;
