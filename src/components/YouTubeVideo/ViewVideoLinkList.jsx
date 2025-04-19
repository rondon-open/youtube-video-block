import React, { useRef } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { List, Icon } from 'semantic-ui-react';
import ResizableIframe from './ResizableIframe';
import { getVideoId } from './utils';

const ViewVideoLinkList = (props) => {
  const { data } = props;
  const { mainVideo, videoList = [] } = data;

  const videoList2 = mainVideo.title
    ? [mainVideo, ...videoList].filter((video) => video.title)
    : videoList.filter((video) => video.title);

  const iframeRef = useRef(null);
  const mainTitleRef = useRef(null);

  const handleClick = (event) => {
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${getVideoId(event.target.href)}`;
    }
    event.preventDefault();
  };

  return (
    <Container className="youtube-video-block">
      {mainVideo && (
        <div className="main-video">
          {data.title && (
            <Header as="h3">
              <span ref={mainTitleRef}>{data.title}</span>
            </Header>
          )}
          {data.description && (
            <p class="description">{data.description}</p>
          )}          
          <ResizableIframe video={mainVideo} videoRef={iframeRef} />
        </div>
      )}

      {videoList2.length > 0 && (
        <div className="video-list">
          <List divided relaxed>
            {videoList2.map((video, index) => (
              <List.Item key={index}>
                <Icon name="video" />
                <List.Content>
                  <List.Header
                    as="a"
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    title={video.title}
                  >
                    <i class="fa-brands fa-youtube red-youtube"></i> {video.title}
                  </List.Header>
                  {video.description && (
                    <List.Description>{video.description}</List.Description>
                  )}
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      )}
    </Container>
  );
};

export default ViewVideoLinkList;
