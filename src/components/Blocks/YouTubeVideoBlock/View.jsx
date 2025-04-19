import React from 'react';
import { ViewDefault, ViewGrid, ViewVideoLinkList } from '../../YouTubeVideo';

const View = (props) => {
  const { data } = props;
  const views = { default: ViewDefault, grid: ViewGrid, 'video-link-list': ViewVideoLinkList };
  const ViewComponent = views[data.variation] || ViewDefault;
  
  const mainVideo = {
    ...data.mainVideo,
    title: data.mainVideoShowTitle ? data.mainVideo?.title : null,
    description: data.mainVideoShowDescription
      ? data.mainVideo?.description
      : null,
  };
  
  const videoList = Object.values(data.videoList || {}).map((video) => ({
    ...video,
    title: data.videoListShowTitle ? video.title : null,
    description: data.videoListShowDescription ? video.description : null,
  }));
  
  const filteredVideoList = videoList.filter(
    (video) => video.url !== mainVideo.url,
  );

  return (
    <ViewComponent
      {...props}
      data={{ ...data, mainVideo, videoList: filteredVideoList }}
    />
  );
};

export default View;
