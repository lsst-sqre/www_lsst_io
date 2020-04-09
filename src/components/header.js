import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import rubinLogoDark from '../images/rubin-logo-dark.svg';

const HeaderLayer = styled.header`
  background: #222222;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
`;

const RubinLogo = styled.img`
  max-width: 16em;
`;

const Header = () => (
  <HeaderLayer>
    <HeaderContainer>
      <Link to="/">
        <RubinLogo src={rubinLogoDark} alt="Rubin Observatory logo" />
      </Link>
    </HeaderContainer>
  </HeaderLayer>
);

export default Header;
