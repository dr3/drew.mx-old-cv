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
`;

const NavInner = styled.div`
  width: ${rhythm(24)};
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navbar = () => (
  <NavWrapper>
    <NavInner>
      <Link to="/">Home</Link>
      <a href={githubUrl} target="_new">
        Github
      </a>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </NavInner>
  </NavWrapper>
);

export default Navbar;
