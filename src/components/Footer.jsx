import React from 'react';
import styled from 'styled-components';
import { repoUrl } from '../../data/config/site';

const FooterWrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: gray;
  padding-top: 4rem;

  @media (min-width: 26rem) {
    display: flex;
    flex-direction: row;
    text-align: initial;
  }
`;

const SeparatorSpan = styled.span`
  @media (max-width: 26rem) {
    display: none;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <span>
      <a href="https://twitter.com/drewmcmill">Twitter</a>
    </span>
    <SeparatorSpan aria-hidden>&nbsp;&#45;&nbsp;</SeparatorSpan>
    <span>
      <a rel="me" href="https://mastodon.social/@dr3w">
        Mastodon
      </a>
    </span>
    <SeparatorSpan aria-hidden>&nbsp;&#45;&nbsp;</SeparatorSpan>
    <span>
      Open source on&nbsp;
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </span>
  </FooterWrapper>
);

export default Footer;
