/* eslint-disable react/no-danger */
import React from 'react';
import styled, { css } from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from '../../utils/deepGet';
import cvData from '../../../data/config/cv';

const blue = '#125ad5';

const StyledRow = styled.div`
  @media (min-width: 47rem) {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-column-gap: 1rem;
  }
  position: relative;
`;

const Row = ({ label, children }) => (
  <StyledRow>
    <RowLabel>
      <p>{label}</p>
    </RowLabel>
    <div>{children}</div>
  </StyledRow>
);

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

const fontFamily = css`
  font-family: Times;
`;

const CVWrapper = styled.div`
  max-width: 57rem;
  margin: 0 auto;
  line-height: 1.35rem;
  ${fontFamily};
  color: black;
  padding: 0 1rem;
  text-align: justify;
`;

const StyledLine = styled.div`
  height: 4px;
  background-color: ${blue};
  margin-top: 0.5rem;

  @media (max-width: 47rem) {
    display: none;
  }
`;

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

const SubsectionTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const CVHeader = styled.div`
  @media (min-width: 47rem) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 1rem;
  }
`;

const CVName = styled.span`
  font-size: 3.75rem;
  ${fontFamily};
  display: block;
`;

const CVTitle = styled.span`
  font-size: 2.25rem;
  ${fontFamily};
  display: block;
  color: ${blue};
`;

const CVHeading = styled.h1`
  border: none;
  font-weight: normal;
`;

const CVDetails = styled.div`
  text-align: right;
  font-size: 0.9375rem;
`;

const DetailsLabel = styled.span`
  color: ${blue};
  font-size: 0.75rem;
`;

const CVDetailsWrapper = styled.div`
  align-self: center;
  margin-top: 2.4375rem;
`;

const Contact = ({ data }) => {
  const siteTitle = get(['site', 'siteMetadata', 'title'], data);
  const siteDescription = get(['site', 'siteMetadata', 'title'], data);
  const Line = <StyledLine />;

  return (
    <CVWrapper>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`CV | ${siteTitle}`}
      />
      <CVHeader>
        <CVHeading>
          <CVName>{cvData.name}</CVName>
          <CVTitle>{cvData.title}</CVTitle>
        </CVHeading>
        <CVDetailsWrapper>
          {cvData.userDetails.map(({ label, text }) => (
            <CVDetails>
              {label && <DetailsLabel>{label}: </DetailsLabel>}
              {text && <span>{text}</span>}
            </CVDetails>
          ))}
        </CVDetailsWrapper>
      </CVHeader>
      {cvData.sections.map(section => (
        <div>
          <Row label={Line}>
            <SectionTitle>
              <span>{section.title}</span>
            </SectionTitle>
          </Row>
          {section.subsections.map(subsection => (
            <Row label={subsection.label}>
              {subsection.title && (
                <SubsectionTitle>{subsection.title}</SubsectionTitle>
              )}
              {subsection.body && subsection.body.map(text => <p>{text}</p>)}
            </Row>
          ))}
        </div>
      ))}
    </CVWrapper>
  );
};

export default Contact;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
