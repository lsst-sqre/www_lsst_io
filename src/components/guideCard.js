import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { IconDataListTerm, IconDataListContent } from './basics/iconDataList';
import CodeIcon from '../icons/code.svg';
import VisuallyHidden from './basics/visuallyHidden';

const StyledCodeIcon = styled(CodeIcon)`
  width: 0.85em;
  width: 1cap;
  height: 0.85em;
  height: 1cap;

  /* secondary and primary look better reversed */
  .secondary {
    fill: var(--c-icon-primary);
  }

  .primary {
    fill: var(--c-icon-secondary);
  }
`;

const CardContainer = styled.div`
  padding: var(--space-unit);
  margin: 0;
  box-shadow: var(--elevation-base);
  background-color: #ffffff;

  h3 {
    line-height: 1.1;
    margin: 0 0 1rem 0;
  }

  a {
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const GuideCard = ({ slug, github, description, title }) => {
  const siteUrl = `https://${slug}.lsst.io/`;
  const githubUrl = `https://github.com/${github}`;

  return (
    <CardContainer>
      <a href={siteUrl}>
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
      <dl>
        <IconDataListTerm>
          <StyledCodeIcon />
          <VisuallyHidden>Source repository</VisuallyHidden>
        </IconDataListTerm>
        <IconDataListContent>
          <a href={githubUrl}>{github}</a>
        </IconDataListContent>
      </dl>
    </CardContainer>
  );
};

GuideCard.propTypes = {
  slug: PropTypes.string,
  github: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default GuideCard;
