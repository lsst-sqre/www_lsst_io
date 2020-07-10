/**
 * A big search box that navigates to the Advanced search page.
 */

import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import VisuallyHidden from './basics/visuallyHidden';
import Button from './buttons';

const Form = styled.form`
  display: flex;
  font-size: 2rem;
`;

const SearchBox = styled.div`
  flex: 1 1 0;

  input {
    width: 100%;
    box-shadow: var(--elevation-md);
    border-radius: var(--border-radius-1);
  }
`;

const SubmitInput = styled(Button)`
  margin-left: 1rem;
`;

export default function HeroSearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // don't reload page on submission
    navigate(`/search/?query=${query}`, { replace: false });
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
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <VisuallyHidden>Search</VisuallyHidden>
        </label>
      </SearchBox>
      <SubmitInput as="input" type="submit" value="Search" />
    </Form>
  );
}
