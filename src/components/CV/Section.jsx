import React from 'react';
import styled from 'styled-components';
import { blue } from './utils';

const SectionTitle = styled.p`
  color: ${blue};
  font-weight: bold;

  @media screen and (max-width: 47rem) {
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
  position: relative;

  @media print, (min-width: 47rem) {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-column-gap: 1rem;
  }
`;

const StyledLine = styled.div`
  height: 4px;
  background-color: ${blue};
  margin-top: 0.5rem;

  @media screen and (max-width: 47rem) {
    display: none;
  }
`;

const RowLabel = styled.div`
  text-align: right;
  margin-bottom: 0.8125rem;

  @media screen and (max-width: 47rem) {
    font-weight: bold;
    text-align: initial;
    margin: 0;
  }
`;

const RowLabelRange = styled.div`
  text-align: right;
  margin-bottom: 0.8125rem;
  display: grid;

  @media screen and (max-width: 47rem) {
    font-weight: bold;
    text-align: initial;
    margin: 0;
  }
`;

const SubsectionTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  display: inline-block;
`;

const BlockSpan = styled.div`
  display: block;
`;

const Row = ({ label, labelRange = [], children }) => {
  const LabelWrapper = label ? RowLabel : RowLabelRange;

  const showLabelRange = !label && labelRange && labelRange[0] && labelRange[1];

  return (
    <StyledRow className="styledRow">
      <LabelWrapper>
        {label}
        {showLabelRange && (
          <div>
            <BlockSpan>{labelRange[0]}</BlockSpan>
            <BlockSpan>- {labelRange[1]}</BlockSpan>
          </div>
        )}
      </LabelWrapper>
      <div>{children}</div>
    </StyledRow>
  );
};

const TechStack = styled.div`
  margin-bottom: 13px;
  font-style: italic;
  font-size: 0.9rem;
`;

const Section = ({ title, subsections }) => {
  const Line = <StyledLine />;

  return (
    <div>
      <Row label={Line}>
        <SectionTitle>
          <span>{title}</span>
        </SectionTitle>
      </Row>
      {subsections &&
        subsections.map(
          ({
            label,
            labelRange,
            title: subsectionTitle,
            techStack,
            body,
            bodyList,
          }) => (
            <Row
              label={label}
              labelRange={labelRange}
              key={
                label ||
                (labelRange && labelRange[0]) ||
                subsectionTitle ||
                body[0]
              }
            >
              {subsectionTitle && (
                <SubsectionTitle>{subsectionTitle}</SubsectionTitle>
              )}
              {body && !bodyList && body.map(text => <p key={text}>{text}</p>)}
              {bodyList && (
                <ul>
                  {bodyList.map(text => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
              {techStack && (
                <TechStack>
                  <b>Tech Stack: </b>
                  {techStack.join(', ')}
                </TechStack>
              )}
            </Row>
          ),
        )}
    </div>
  );
};

export default Section;
