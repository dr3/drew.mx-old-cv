import React from 'react';
import styled from 'styled-components';
import { blue } from '../utils';

const Wrapper = styled.div`
  align-self: center;
  margin-top: 2.4375rem;
`;

const DetailWrapper = styled.div`
  text-align: right;
  font-size: 0.9375rem;
`;

const Label = styled.span`
  color: ${blue};
  font-size: 0.75rem;
`;

const Details = ({ values }) => (
  <Wrapper>
    {values.map(({ label, text }) => (
      <DetailWrapper>
        {label && <Label>{label}: </Label>}
        {text && <span>{text}</span>}
      </DetailWrapper>
    ))}
  </Wrapper>
);

export default Details;
