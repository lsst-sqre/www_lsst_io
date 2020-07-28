/**
 * A big search box that navigates to the Advanced search page.
 */

import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import bp from '../design/breakpoints';

import VisuallyHidden from './basics/visuallyHidden';
import Button from './basics/buttons';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  /* Search box and button are displayed horizontally on bigger screens. */
  @media only screen and (min-width: ${bp.phone}) {
    flex-direction: row;
  }
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
  margin-top: var(--space-xxxs);
  font-size: 1.2rem;

  @media only screen and (min-width: ${bp.phone}) {
    margin-top: 0;
    margin-left: var(--space-xxs);
  }
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
