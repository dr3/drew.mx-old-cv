/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from '../../utils/deepGet';

import Layout from '../../components/Layout';
import { rhythm } from '../../utils/typography';

const Heading = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'description'], data);
  const posts = get(['allMarkdownRemark', 'edges'], data);

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Blog | ${siteTitle}`}
      />
      <h2>Blog</h2>
      {posts.map(({ node }) => {
        const title =
          get(['frontmatter', 'title'], node) ||
          get(['frontmatter', 'path'], node);

        return (
          <div key={node.frontmatter.path}>
            <Heading>
              <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
                {title}
              </Link>
            </Heading>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
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
