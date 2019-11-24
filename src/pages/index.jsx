/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Hemlet from 'react-helmet';
import get from '../utils/deepGet';

import BlogList from '../components/BlogList';
import Layout from '../components/Layout';
import profilePic from '../assets/images/avatar.jpg';
import { author } from '../../data/config/site';

const Heading = styled('h1')`
  border: none;
  margin-top: 2.5rem;
`;

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1rem;

  @media (max-width: 45rem) {
    display: initial;
  }
`;

const DescriptionImage = styled.img`
  margin-top: 2.5rem;
  border-radius: 50%;
  align-self: center;

  @media (max-width: 45rem) {
    max-width: 15rem;
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 15rem) {
    width: 100%;
  }
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
      <DescriptionWrapper>
        <div>
          <Heading>
            Hey! I&apos;m Drew&nbsp;
            <span role="img" aria-label="Wave emoji">
              👋
            </span>
          </Heading>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <DescriptionImage src={profilePic} alt={author} />
      </DescriptionWrapper>
      {posts[0] && (
        <>
          <br />
          <BlogList posts={posts} />
          <Link to="/blog">See more blog posts →</Link>
        </>
      )}
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
      filter: { frontmatter: { type: { eq: "post" }, draft: { ne: true } } }
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
