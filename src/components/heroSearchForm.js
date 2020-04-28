/**
 * A big search box that navigates to the Advanced search page.
 */

import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  font-size: 2rem;
`;

const SearchBox = styled.div`
  flex: 1 1 0;

  input {
    width: 100%;
  }
`;

const SubmitInput = styled.input`
  margin-left: 1rem;
`;

const VisuallyHiddenSpan = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default function HeroSearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // don't reload page on submission
    navigate(`/search?query=${query}`, { replace: false });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBox>
        <label htmlFor="search">
          <input
            type="search"
            id="search"
            name="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <VisuallyHiddenSpan>Search</VisuallyHiddenSpan>
        </label>
      </SearchBox>
      <SubmitInput type="submit" value="Search" />
    </Form>
  );
}
