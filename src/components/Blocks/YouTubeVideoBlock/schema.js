import { isValidYouTubeUrl } from '../../YouTubeVideo/utils';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  mainVideoShowTitle: {
    id: 'Show title of main video',
    defaultMessage: 'Show title of main video',
  },
  mainVideoShowDescription: {
    id: 'Show description of main video',
    defaultMessage: 'Show description of main video',
  },
  videoListShowTitle: {
    id: 'Show title of list of videos',
    defaultMessage: 'Show title of list of videos',
  },
  videoListShowDescription: {
    id: 'Show description of list of videos',
    defaultMessage: 'Show description of list of videos',
  },
  mainVideo: {
    id: 'Main Video',
    defaultMessage: 'Main Video',
  },
  mainVideoURL: {
    id: 'Main Video URL',
    defaultMessage: 'Main Video URL',
  },
  mainVideoTitle: {
    id: 'Main Video Title',
    defaultMessage: 'Main Video Title',
  },
  relatedVideo: {
    id: 'Related Video',
    defaultMessage: 'Related Video',
  },
  videoList: {
    id: 'Video List',
    defaultMessage: 'Video List',
  },
  relatedVideoList: {
    id: 'Related Video List',
    defaultMessage: 'Related Video List',
  },
});

export const YouTubeVideoBlockSchema = ({ intl }) => ({
  title: 'YouTube Video Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'title',
        'description',
        'mainVideoShowTitle',
        'mainVideoShowDescription',
        'videoListShowTitle',
        'videoListShowDescription',
        'mainVideo',
        'videoList',
      ],
    },
  ],

  properties: {
    title: {
      title: intl.formatMessage(messages.title),
      widget: 'text',
    },
    description: {
      title: intl.formatMessage(messages.description),
      widget: 'text',
    },
    mainVideoShowTitle: {
      title: intl.formatMessage(messages.mainVideoShowTitle),
      type: 'boolean',
      default: true,
    },
    mainVideoShowDescription: {
      title: intl.formatMessage(messages.mainVideoShowDescription),
      type: 'boolean',
      default: false,
    },
    videoListShowTitle: {
      title: intl.formatMessage(messages.videoListShowTitle),
      type: 'boolean',
      default: true,
    },
    videoListShowDescription: {
      title: intl.formatMessage(messages.videoListShowDescription),
      type: 'boolean',
      default: false,
    },
    mainVideo: {
      title: intl.formatMessage(messages.mainVideo),
      widget: 'object',
      schema: {
        title: intl.formatMessage(messages.mainVideo),
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['url', 'title', 'description'],
          },
        ],
        properties: {
          url: {
            title: 'URL',
            description: intl.formatMessage(messages.mainVideoURL),
            widget: 'url',
            required: true,
          },
          title: {
            title: intl.formatMessage(messages.title),
            description: intl.formatMessage(messages.mainVideoTitle),
            required: false,
          },
          description: {
            title: intl.formatMessage(messages.description),
            widget: 'textarea',
            required: false,
          },
        },
      },
    },
    videoList: {
      title: intl.formatMessage(messages.videoList),
      description: intl.formatMessage(messages.relatedVideoList),
      widget: 'object_list',
      schema: {
        title: intl.formatMessage(messages.relatedVideo),
        fieldsets: [
          {
            id: 'default',
            title: 'Default',
            fields: ['url', 'title', 'description'],
          },
        ],
        properties: {
          url: {
            title: 'URL',
            widget: 'url',
            required: true,
          },
          title: {
            title: intl.formatMessage(messages.title),
            required: false,
          },
          description: {
            title: intl.formatMessage(messages.description),
            widget: 'textarea',
            required: false,
          },
        },
      },
    },
  },

  required: [],
});

export const validateYouTubeUrl = (value) => {
  if (!isValidYouTubeUrl(value)) {
    return 'URL do YouTube inválida';
  }
  return null;
};
