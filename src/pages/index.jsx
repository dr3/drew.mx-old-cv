/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Hemlet from 'react-helmet';
import get from '../utils/deepGet';

import BlogList from '../components/BlogList';
import Layout from '../components/Layout';

const Heading = styled('h1')`
  border: none;
`;

const SiteIndex = ({ data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'title'], data);
  const posts = get(['blogPosts', 'edges'], data);
  const description = get(['descriptions', 'edges', 0, 'node', 'html'], data);

  return (
    <Layout>
      <Hemlet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Hemlet>
      <Heading>
        Hey! I&apos;m Drew{' '}
        <span role="img" aria-label="Wave emoji">
          👋
        </span>
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: description }} /> 
      <br />
      {posts && <BlogList posts={posts} />}
      <Link to="/blog">See more blog posts →</Link>
    </Layout>
  );
};

export default SiteIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    descriptions: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "description" }
          id: { eq: "homepage-welcome-message" }
        }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 1
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            type
          }
        }
      }
    }
  }
`;
