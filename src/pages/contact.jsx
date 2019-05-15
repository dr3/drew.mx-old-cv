import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from '../utils/deepGet';

import Layout from '../components/Layout';
import contactData from '../data/contact';

const Contact = ({ data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'title'], data);

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Contact | ${siteTitle}`}
      />

      <h2>Contact</h2>
      <br />

      {Object.keys(contactData).map(key => {
        if (contactData[key]) {
          return (
            <p key={key}>
              <b>{key}: </b>
              <a href={contactData[key].url} target="_new">
                {contactData[key].text || contactData[key].url}
              </a>
            </p>
          );
        }

        return null;
      })}
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
  }
`;
