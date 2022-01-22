/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import get from '../utils/deepGet';
import Layout from '../components/Layout';

const photos = [
  { src: '/photos/DSCF6575.jpg', alt: '' },
  { src: '/photos/DSCF6518.jpg', alt: '' },
  { src: '/photos/DSCF6547.jpg', alt: '' },
  { src: '/photos/DSCF6571.jpg', alt: '' },
  { src: '/photos/DSCF6573.jpg', alt: '' },
];

const Img = styled.img`
  max-height: 45rem;
  margin: 1rem auto;
  display: block;
`;

const Photos = ({ data }) => {
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
      <div>
        {photos.map(img => (
          <Img src={img.src} key={img.src} alt={img.alt} />
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Layout>
  );
};

export default Photos;

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
