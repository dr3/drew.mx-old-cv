/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from '../utils/deepGet';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import { rhythm, scale } from '../utils/typography';

const StyledTimestamp = styled.p`
  display: block;
  margin: ${rhythm(-1)} 0 ${rhythm(1)} 0;
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = get(['blogPost'], data);
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const userBio = get(['descriptions', 'edges', 0, 'node'], data);
  const siteDescription = post.excerpt;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />
      <h1>{post.frontmatter.title}</h1>
      <br />
      <StyledTimestamp>{post.frontmatter.date}</StyledTimestamp>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio userBio={userBio} />
      <StyledUnorderedList>
        <li>
          {previous && (
            <Link to={previous.frontmatter.path} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.frontmatter.path} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </StyledUnorderedList>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    descriptions: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "description" }, id: { eq: "user-bio" } }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
    blogPost: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
      fields {
        slug
      }
    }
  }
`;
