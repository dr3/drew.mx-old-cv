/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from '../assets/images/avatar.png';
import { rhythm } from '../utils/typography';

const BioWrapper = styled.div`
  display: flex;
  marginbottom: ${rhythm(2.5)};
`;

const BioImage = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
`;

const Bio = ({ userBio }) => (
  <BioWrapper>
    <BioImage src={profilePic} alt="Sai Krishna" />
    <div dangerouslySetInnerHTML={{ __html: userBio.html }} />
  </BioWrapper>
);

export default Bio;
