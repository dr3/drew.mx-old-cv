import React from 'react';
import styled from 'styled-components';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from '../assets/images/avatar.png';
import { rhythm } from '../utils/typography';
import bioData from '../data/bio';

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

const Bio = () => (
  <BioWrapper>
    <BioImage src={profilePic} alt="Sai Krishna" />
    <p>{bioData}</p>
  </BioWrapper>
);

export default Bio;
