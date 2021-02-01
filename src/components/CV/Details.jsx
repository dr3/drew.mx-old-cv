import React from 'react';
import styled from 'styled-components';
import { blue } from './utils';

const Wrapper = styled.div`
  align-self: center;
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
    {values &&
      values.map(({ label, text, href }) => (
        <DetailWrapper key={label || text}>
          {label && <Label>{label}: </Label>}
          {text && !href && <span>{text}</span>}
          {href && text && (
            <span>
              <a href={href}>{text}</a>
            </span>
          )}
        </DetailWrapper>
      ))}
  </Wrapper>
);

export default Details;
