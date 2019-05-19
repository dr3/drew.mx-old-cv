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
  const posts = get(['allMarkdownRemark', 'edges'], data);

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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu
        dictum varius duis. Vestibulum lectus mauris ultrices eros in cursus
        turpis. Blandit volutpat maecenas volutpat blandit aliquam etiam.
        Sagittis purus sit amet volutpat. Nullam ac tortor vitae purus faucibus
        ornare suspendisse. Vulputate sapien nec sagittis aliquam malesuada.
        Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
        ullamcorper. Sit amet cursus sit amet dictum sit amet. Malesuada proin
        libero nunc consequat interdum varius sit amet. Sed egestas egestas
        fringilla phasellus faucibus scelerisque eleifend. Habitasse platea
        dictumst quisque sagittis. Sem viverra aliquet eget sit amet tellus cras
        adipiscing enim. Amet massa vitae tortor condimentum lacinia quis vel
        eros donec.
      </p>
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
    allMarkdownRemark(
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
