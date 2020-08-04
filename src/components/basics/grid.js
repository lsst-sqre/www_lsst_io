/*
 * A general-purpose grid component based on Grid from every-layout.dev.
 *
 * This grid's column count is flexible to the number of items and the minimum
 * content width. This way it degrades well to a single-column mobile view.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gridGap }) => gridGap};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${({ minWidth }) => minWidth}, 100%), 1fr)
  );
`;

Grid.propTypes = {
  gridGap: PropTypes.string,
  minWidth: PropTypes.string,
};

Grid.defaultProps = {
  gridGap: '1em',
  minWidth: '250px',
};

export default Grid;
