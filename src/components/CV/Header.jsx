import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import Details from './Details';

const StyledHeader = styled.div`
  @media print, (min-width: 47rem) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1rem;
    margin: 1rem;
  }
`;

const Header = ({ name, title, userDetails }) => (
  <StyledHeader>
    <Heading name={name} title={title} />
    <Details values={userDetails} />
  </StyledHeader>
);

export default Header;
