/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import get from '../utils/deepGet';
import Layout from '../components/Layout';

const photos = [
  {
    src: '/photos/DSCF6575.jpg',
    alt: 'Man selling food',
    dimensions: [4896, 3264],
  },
  {
    src: '/photos/DSCF6547.jpg',
    alt: 'Woman outside shop',
    dimensions: [4412, 2941],
  },
  {
    src: '/photos/DSCF6518.jpg',
    alt: 'A red door',
    dimensions: [3213, 4819],
  },
  {
    src: '/photos/DSCF6571.jpg',
    alt: 'Woman in market stall',
    dimensions: [4896, 3264],
  },
  {
    src: '/photos/DSCF6573.jpg',
    alt: 'Lone woman in market',
    dimensions: [3264, 4896],
  },
];

const Img = styled.img`
  max-height: 45rem;
  margin: 1rem auto;
  display: block;
  aspect-ratio: ${props => props.dimensions[0]} /
    ${props => props.dimensions[1]};
  background-color: #f1f1f1;
`;

const Text = styled.p`
  text-align: center;
  color: #767375;
  font-size: 12px;
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
        title={`Photos | ${siteTitle}`}
      />
      <div>
        <Text>
          All photos taken with a Fujifilm X100S and edited using Lightroom
        </Text>
        {photos.map(img => (
          <a href={img.src} key={img.src} dimensions={img.dimensions}>
            <Img src={img.src} alt={img.alt} dimensions={img.dimensions} />
          </a>
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
