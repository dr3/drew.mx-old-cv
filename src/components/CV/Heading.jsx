import React from 'react';
import styled from 'styled-components';
import { fontFamily, blue } from './utils';

const StyledName = styled.span`
  font-size: 2.75rem;
  ${fontFamily};
  display: block;
`;

const StyledTitle = styled.span`
  font-size: 1.5rem;
  ${fontFamily};
  display: block;
  color: ${blue};
`;

const StyledHeading = styled.h1`
  border: none;
  font-weight: normal;
  margin: 0;
`;

const Heading = ({ name, title }) => (
  <StyledHeading className="cv-header">
    <StyledName className="cv-header-txt">{name}</StyledName>
    <StyledTitle>{title}</StyledTitle>
  </StyledHeading>
);

export default Heading;
