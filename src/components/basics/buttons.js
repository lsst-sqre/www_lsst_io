/*
 * Styled buttons.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--c-button-background);
  color: var(--c-button-text);
  padding: 5px 20px;
  border-radius: var(--border-radius-1);
  font-size: 1em;
  border: none;
  transition: 0.3s ease box-shadow;
  box-shadow: var(--elevation-base);

  &:hover {
    box-shadow: var(--elevation-lg);
  }
`;

Button.propTypes = {
  kind: PropTypes.oneOf(['default']),
};

Button.defaultProps = {
  kind: 'default',
};

export default Button;
