import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import get from '../utils/deepGet';
import { rhythm } from '../utils/typography';

const Heading = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const Bio = ({ posts }) => (
  <Fragment>
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
  </Fragment>
);

export default Bio;
