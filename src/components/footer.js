/* Footer layout component. */

import React from 'react';
import styled from 'styled-components';

import { neutral, blue } from '../design/color';
import { mediumMarginRem } from '../design/spacing';
import PageContentContainer from './pageContentContainer';

const StyledFooter = styled.footer`
  background: ${neutral['900']};
  color: ${neutral['100']};
  flex-shrink: 0;
  margin-top: ${mediumMarginRem}rem;

  a {
    color: ${blue['100']};
  }
`;

const FeedbackContainer = styled.section`
  margin-bottom: 4rem;

  h2 {
    font-size: 1rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <PageContentContainer>
      <FeedbackContainer>
        <h2>Have feedback?</h2>
        <p>There are many ways to get in touch:</p>
        <ul>
          <li>
            <a href="https://github.com/lsst-sqre/www_lsst_io/issues/new">
              Create a GitHub issue
            </a>
          </li>
          <li>
            <a href="https://jira.lsstcorp.org/issues/?jql=project+%3D+DM+AND+component+%3D+www_lsst_io">
              Create a Jira ticket in the <code>www_lsst_io</code> component
              (internal)
            </a>
          </li>
          <li>
            <a href="slack://channel?team=T06D204F2&id=C2B6DQBAL">
              Chat in #dm-docs on Slack (internal)
            </a>
          </li>
        </ul>
      </FeedbackContainer>
      <p>
        © {new Date().getFullYear()} Association of Universities for Research in
        Astronomy (AURA), Inc.
      </p>
    </PageContentContainer>
  </StyledFooter>
);

export default Footer;
