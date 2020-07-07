/*
 * A cluster component for configuring search
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Cluster from './cluster';

const StyledCluster = styled(Cluster)`
  margin-bottom: 1rem;
  overflow: visible; // so the box-shadow isn't being cut off
`;

const SearchSettingsCluster = ({ children, justifyContent = 'flex-start' }) => (
  <StyledCluster space="1rem" justifyContent={`${justifyContent}`}>
    {children}
  </StyledCluster>
);

SearchSettingsCluster.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
};

export default SearchSettingsCluster;
