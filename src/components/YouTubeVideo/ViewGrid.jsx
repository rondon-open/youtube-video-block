import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import ResizableIframe from './ResizableIframe';

const ViewGrid = (props) => {
  const { data } = props;
  const { mainVideo, videoList = [] } = data;
  const videoList2 = [mainVideo, ...videoList];

  return (
    <Container className="youtube-video-block">
      {videoList2.length > 0 && (
        <div className="video-list">
          {data.title && (
            <Header as="h3">
              <span>{data.title}</span>
            </Header>
          )}
          <Grid columns={3} stackable>
            {videoList2.map((video, index) => (
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

export default ViewGrid;
