import React from 'react';
import styled from 'styled-components';

const VideoConversationPageWrapper = styled.div.attrs({
  className: 'video-conversation-page-wrapper',
})`
  width: calc(100% - 50px);
  height: calc(100vh - 70px - 40px);
  padding: 20px 25px;
`;

const VideoGrid = styled.div.attrs({ className: 'video-grid' })`
  display: grid;
  grid-template-columns: 2fr 8fr 3fr;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.02);
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  height: 100%;
  width: 100%;
`;

const VideoConversationPage = () => (
  <VideoConversationPageWrapper>
    <VideoGrid>123</VideoGrid>
  </VideoConversationPageWrapper>
);

export default VideoConversationPage;