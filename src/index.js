import { YouTubeVideoBlockView, YouTubeVideoBlockEdit } from './components/';
import televisionSVG from '@plone/volto/icons/television.svg';
import './theme/youtubeVideoBlock.scss';

const applyConfig = (config) => {
  // Register YouTube Video Block
  config.blocks.blocksConfig.youtubeVideoBlock = {
    id: 'youtubeVideoBlock',
    title: 'YouTube Video Block',
    icon: televisionSVG,
    group: 'media',
    view: YouTubeVideoBlockView,
    edit: YouTubeVideoBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    defaultViewType: 'default',
    variations: [
      {
        id: 'default',
        title: 'default',
      },
      {
        id: 'grid',
        title: 'Grid',
      },
      {
        id: 'video-link-list',
        title: 'List with links',
      },
    ],
  };

  return config;
};

export default applyConfig;
