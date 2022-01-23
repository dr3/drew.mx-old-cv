import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import { githubUrl } from '../../data/config/site';

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 21rem) {
    padding-bottom: 2rem;
  }
`;

const NavInner = styled.div`
  width: ${rhythm(24)};
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 21rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    grid-gap: 1rem;
  }
`;

const LinkHiddenMobile = styled(Link)`
  @media (max-width: 21rem) {
    display: none;
  }
`;

const Navbar = () => (
  <NavWrapper>
    <NavInner>
      <Link to="/">Home</Link>
      <a href={githubUrl} target="_new">
        Github
      </a>
      <Link to="/contact">Contact</Link>
      <Link to="/photos">Photos</Link>
      <LinkHiddenMobile to="/cv">CV</LinkHiddenMobile>
    </NavInner>
  </NavWrapper>
);

export default Navbar;
