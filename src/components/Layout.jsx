import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(32)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  @media (max-width: 20rem) {
    padding: ${rhythm(0.5)} ${rhythm(3 / 4)};
  }
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Navbar />
    {children}
    <Footer />
  </LayoutWrapper>
);

export default Layout;
