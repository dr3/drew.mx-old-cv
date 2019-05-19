import React from 'react';
import styled from 'styled-components';
import { blue } from '../utils';

const SectionTitle = styled.p`
  color: ${blue};
  font-weight: bold;

  @media (max-width: 47rem) {
    &::before {
      content: '';
      position: absolute;
      height: 4px;
      border: none;
      background: ${blue};
      left: 0;
      right: 0;
      top: 0.5rem;
    }

    & span {
      background-color: white;
      position: relative;
      padding-right: 1rem;
    }
  }
`;

const StyledRow = styled.div`
  @media (min-width: 47rem) {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-column-gap: 1rem;
  }
  position: relative;
`;

const StyledLine = styled.div`
  height: 4px;
  background-color: ${blue};
  margin-top: 0.5rem;

  @media (max-width: 47rem) {
    display: none;
  }
`;

const RowLabel = styled.div`
  text-align: right;

  @media (max-width: 47rem) {
    font-weight: bold;
    text-align: initial;

    & p {
      margin: 0;
    }
  }
`;

const SubsectionTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Row = ({ label, children }) => (
  <StyledRow>
    <RowLabel>
      <p>{label}</p>
    </RowLabel>
    <div>{children}</div>
  </StyledRow>
);

const Section = ({ title, subsections }) => {
  const Line = <StyledLine />;

  return (
    <div>
      <Row label={Line}>
        <SectionTitle>
          <span>{title}</span>
        </SectionTitle>
      </Row>
      {subsections.map(subsection => (
        <Row label={subsection.label}>
          {subsection.title && (
            <SubsectionTitle>{subsection.title}</SubsectionTitle>
          )}
          {subsection.body && subsection.body.map(text => <p>{text}</p>)}
        </Row>
      ))}
    </div>
  );
};

export default Section;
