import React from 'react';
import styled from 'styled-components';
import { fontFamily, blue } from './utils';

const StyledName = styled.span`
  font-size: 3.75rem;
  ${fontFamily};
  display: block;
`;

const StyledTitle = styled.span`
  font-size: 2.25rem;
  ${fontFamily};
  display: block;
  color: ${blue};
`;

const StyledHeading = styled.h1`
  border: none;
  font-weight: normal;
`;

const Heading = ({ name, title }) => (
  <StyledHeading>
    <StyledName>{name}</StyledName>
    <StyledTitle>{title}</StyledTitle>
  </StyledHeading>
);

export default Heading;
