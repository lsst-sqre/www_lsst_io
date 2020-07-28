/* Footer layout component. */

import React from 'react';
import styled from 'styled-components';

import PageContentContainer from './pageContentContainer';

const StyledFooter = styled.footer`
  background: var(--c-reversed-background);
  color: var(--c-reversed-text);
  flex-shrink: 0;
  margin-top: var(--space-lg);

  a {
    color: var(--c-reversed-link);
  }
`;

const FeedbackContainer = styled.section`
  margin-bottom: var(--space-xl);

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
        Vera C. Rubin Observatory is a Federal project jointly funded by the
        National Science Foundation (NSF) and the Department of Energy (DOE)
        Office of Science, with early construction funding received from private
        donations through the LSST Corporation. The NSF-funded LSST (now Rubin
        Observatory) Project Office for construction was established as an
        operating center under the management of the Association of Universities
        for Research in Astronomy (AURA). The DOE-funded effort to build the
        Rubin Observatory LSST Camera (LSSTCam) is managed by SLAC National
        Accelerator Laboratory (SLAC).
      </p>
      <p>
        NSF and DOE will continue to support Rubin Observatory in its operations
        phase to carry out the Legacy Survey of Space and Time. They will also
        provide support for scientific research with the data. During
        operations, NSF funding is managed by the Association of Universities
        for Research in Astronomy (AURA) under a cooperative agreement with NSF,
        and DOE funding is managed by SLAC under contract by DOE. Rubin
        Observatory is operated by NSF's NOIRLab and SLAC.
      </p>
      <p>
        © {new Date().getFullYear()} Association of Universities for Research in
        Astronomy (AURA), Inc.
      </p>
    </PageContentContainer>
  </StyledFooter>
);

export default Footer;
