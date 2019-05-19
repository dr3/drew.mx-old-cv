/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from '../assets/images/avatar.jpg';
import { rhythm } from '../utils/typography';
import { author } from '../../data/config/site';

const BioWrapper = styled.div`
  display: flex;
  marginbottom: ${rhythm(2.5)};
`;

const BioImage = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 50%;
`;

const Bio = ({ userBio }) => (
  <BioWrapper>
    <BioImage src={profilePic} alt={author} />
    <div dangerouslySetInnerHTML={{ __html: userBio.html }} />
  </BioWrapper>
);

export default Bio;
