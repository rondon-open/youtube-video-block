import React, { useMemo } from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { YouTubeVideoBlockSchema } from './schema';
import View from './View';

const messages = defineMessages({
  title: {
    id: 'YouTube Video Block',
    defaultMessage: 'YouTube Video Block',
  },
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
