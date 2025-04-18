import React, { useMemo } from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { YouTubeVideoBlockSchema, validateYouTubeUrl } from './schema';
import View from './View';

const messages = defineMessages({
  title: {
    id: 'YouTube Video Block',
    defaultMessage: 'YouTube Video Block',
  },
  // mainVideoLabel: {
  //   id: 'Main video URL',
  //   defaultMessage: 'Main video URL',
  // },
  // videoListLabel: {
  //   id: 'Video list',
  //   defaultMessage: 'Video list',
  // },
});

const Edit = (props) => {
  const schema = useMemo(() => YouTubeVideoBlockSchema(props), [props]);
  const intl = useIntl();

  return (
    <>
      <View {...props} mode="edit" />

      <SidebarPortal selected={props.selected}>
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.title)}
          validate={(data) => {
            const errors = {};

            // Validate main video URL
            if (!validateYouTubeUrl(data.mainVideo)) {
              errors.mainVideo = intl.formatMessage({
                id: 'Invalid YouTube URL',
                defaultMessage: 'Please enter a valid YouTube URL',
              });
            }

            // Validate video list URLs
            if (data.videoList) {
              data.videoList.forEach((video, index) => {
                if (!validateYouTubeUrl(video.url)) {
                  errors[`videoList-${index}-url`] = intl.formatMessage({
                    id: 'Invalid YouTube URL',
                    defaultMessage: 'Please enter a valid YouTube URL',
                  });
                }
              });
            }

            return errors;
          }}
          onChangeField={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          onChangeBlock={props.onChangeBlock}
          formData={props.data}
          block={props.block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
