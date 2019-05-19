/* eslint-disable react/no-danger */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from '../../utils/deepGet';
import cvData from '../../../data/config/cv';

import Header from './components/Header';
import Section from './components/Section';
import Wrapper from './components/Wrapper';

const GlobalStyle = createGlobalStyle`
  @page {
    size: auto;
    margin: 0mm 0mm 0mm 0mm;
  }
`;

const Contact = ({ data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'title'], data);

  return (
    <Wrapper>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`CV | ${siteTitle}`}
      />
      <GlobalStyle />
      <Header {...cvData} />
      {cvData.sections &&
        cvData.sections.map(section => (
          <Section key={section.title} {...section} />
        ))}
    </Wrapper>
  );
};

export default Contact;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
