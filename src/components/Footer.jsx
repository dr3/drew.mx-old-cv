import React from 'react';
import styled from 'styled-components';
import { repoUrl } from '../../data/config/site';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: gray;
  padding-top: 15px;
`;

const Footer = () => (
  <FooterWrapper>
    Built with&nbsp;
    <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
      GatsbyJS
    </a>
    &nbsp;&#45;&nbsp;Open source on&nbsp;
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      Github
    </a>
  </FooterWrapper>
);

export default Footer;
