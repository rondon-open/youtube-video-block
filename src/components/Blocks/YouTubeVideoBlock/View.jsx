import React from 'react';
import { ViewDefault, ViewGrid, ViewVideoLinkList } from '../../YouTubeVideo';

const View = (props) => {
  const { data } = props;
  const views = { grid: ViewGrid, 'video-link-list': ViewVideoLinkList };
  const ViewComponent = views[data.variation] || ViewDefault;
  
  const mainVideo = {
    ...data.mainVideo,
    title: data.mainVideoShowTitle ? data.mainVideo?.title : null,
    description: data.mainVideoShowDescription
      ? data.mainVideo?.description
      : null,
  };

  // Mapeando videoList para ocultar title e description, se necessário
  const videoList = Object.values(data.videoList || {}).map((video) => ({
    ...video,
    title: data.videoListShowTitle ? video.title : null,
    description: data.videoListShowDescription ? video.description : null,
  }));

  // Filtrando a videoList para remover o vídeo que tem a mesma URL do mainVideo
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
