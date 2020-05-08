/*
 * Styled buttons.
 */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import { primary, neutral } from '../design/color';
import elevations from '../design/elevations';

const variations = theme.variants('scheme', 'kind', {
  default: {
    light: css`
      color: ${neutral['100']};
      background: ${primary['800']};
    `,
    dark: css`
      color: ${neutral['100']};
      background: ${primary['800']};
    `,
  },
});

const Button = styled.button`
  ${variations}
  padding: 5px 20px;
  border-radius: 4px;
  font-size: 1rem;
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
