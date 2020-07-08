/*
 * Styled buttons.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

import elevations from '../design/elevations';

const Button = styled.button`
  background-color: var(--c-button-background);
  color: var(--c-button-text);
  padding: 5px 20px;
  border-radius: 4px;
  font-size: 1em;
  border: none;
  transition: 0.3s ease box-shadow;
  ${elevations[1]};

  &:hover {
    ${elevations[2]}
  }
`;

Button.propTypes = {
  kind: PropTypes.oneOf(['default']),
};

Button.defaultProps = {
  kind: 'default',
};

export default Button;
