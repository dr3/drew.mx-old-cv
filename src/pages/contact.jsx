/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from '../utils/deepGet';

import Layout from '../components/Layout';

const Contact = ({ data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'title'], data);
  const description = get(
    ['allMarkdownRemark', 'edges', 0, 'node', 'html'],
    data,
  );

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Contact | ${siteTitle}`}
      />

      <h2>Contact</h2>
      <br />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Layout>
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
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "description" }, id: { eq: "contact" } }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
