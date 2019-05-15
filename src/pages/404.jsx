import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IFrameWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  position: relative;
`;

const IFrame = styled.iframe`
  position: absolute;
`;

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist....</p>
    <IFrameWrapper>
      <IFrame
        src="https://giphy.com/embed/OK27wINdQS5YQ"
        width="100%"
        height="100%"
        frameBorder={0}
        className="giphy-embed"
        allowFullScreen
      />
    </IFrameWrapper>
    <p>
      <a href="https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ">
        via GIPHY
      </a>
    </p>
  </Layout>
);

export default NotFoundPage;
