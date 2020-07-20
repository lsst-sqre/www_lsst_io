/*
 * A generic cluster flexbox layout component based on Cluster from
 * every-layout.dev.
 *
 * The Cluster conponent ensures consistent spacing between items even when the
 * items wrap.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cluster = styled.div`
  // Suppress horizontal scrolling caused by the negative margin in some cases
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    margin: calc(${({ space }) => space || '1rem'} / 2 * -1);
  }

  > * > * {
    margin: calc(${({ space }) => space || '1rem'} / 2);
  }
`;

Cluster.propTypes = {
  space: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
};

export default Cluster;
