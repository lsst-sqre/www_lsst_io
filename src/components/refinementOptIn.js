/*
 * A component that allows a user to press a button to have a refinement
 * appear. This allows us to only add constraining filters if a user wants
 * to actual filter on that dimension (such as by date).
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './basics/buttons';

const Wrapper = styled.div`
  button {
    margin-top: var(--space-xs);
  }
`;

export default function RefinementOptIn({ children }) {
  const [enableRefinement, setEnableRefinement] = useState(false);

  if (enableRefinement) {
    return (
      <Wrapper>
        {children}

        <Button type="button" onClick={() => setEnableRefinement(false)}>
          Clear filter
        </Button>
      </Wrapper>
    );
  }

  return (
    <Button type="button" onClick={() => setEnableRefinement(true)}>
      + Add filter
    </Button>
  );
}

RefinementOptIn.propTypes = {
  children: PropTypes.elementType.isRequired,
};
