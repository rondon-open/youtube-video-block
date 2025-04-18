import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import ResizableIframe from './ResizableIframe';

const ViewDefault = (props) => {
  const { data } = props;
  const { mainVideo, videoList = [] } = data;

  return (
    <Container className="youtube-video-block">
      {mainVideo && (
        <div className="main-video">
          {data.title && (
            <Header as="h3">
              <span>{data.title}</span>
            </Header>
          )}
          <ResizableIframe video={mainVideo} />
          <div className="video-info">
            <h4>{mainVideo.title}</h4>
            <p>{mainVideo.description}</p>
          </div>
        </div>
      )}

      {videoList.length > 0 && (
        <div className="video-list">
          <Header as="h3">Vídeos relacionados</Header>
          <Grid columns={3} stackable>
            {videoList.map((video, index) => (
              <Grid.Column key={index}>
                <div className="video-item">
                  <ResizableIframe video={video} />
                  <div className="video-info">
                    <h4>{video.title}</h4>
                    <p>{video.description}</p>
                  </div>
                </div>
              </Grid.Column>
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default ViewDefault;
