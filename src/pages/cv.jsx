/* eslint-disable react/no-danger, react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from '../utils/deepGet';
import cvData from '../../data/config/cv';

import Header from '../components/CV/Header';
import Section from '../components/CV/Section';
import Wrapper from '../components/CV/Wrapper';

const GlobalStyle = createGlobalStyle`
  @page {
    size: auto;
    margin: 0mm 0mm 0mm 0mm;
  }

  a {
    color: inherit; 
  }

  @media print {
    p, div {
      font-size: 9pt !important;
      line-height: 11pt !important;
    }

    .styledRow {
      grid-template-columns: 1fr 9fr !important;
    }

    body {
      margin-top: 40px;
    }
  }

  * {
    font-family: 'Nunito Sans', sans-serif;
  }

  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');
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
