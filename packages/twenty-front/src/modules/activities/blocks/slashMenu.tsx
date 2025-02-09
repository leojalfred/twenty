import {
  BlockNoteEditor,
  InlineContentSchema,
  StyleSchema,
} from '@blocknote/core';
import { getDefaultReactSlashMenuItems } from '@blocknote/react';

import { IconFile } from '@/ui/display/icon';

import { blockSchema } from './schema';

export const getSlashMenu = (imagesActivated: boolean) => {
  let items = [
    ...getDefaultReactSlashMenuItems(blockSchema),
    {
      name: 'File',
      aliases: ['file', 'folder'],
      group: 'Media',
      icon: <IconFile size={16} />,
      hint: 'Insert a file',
      execute: (
        editor: BlockNoteEditor<
          typeof blockSchema,
          InlineContentSchema,
          StyleSchema
        >,
      ) => {
        editor.insertBlocks(
          [
            {
              type: 'file',
              props: {
                url: undefined,
              },
            },
          ],
          editor.getTextCursorPosition().block,
          'before',
        );
      },
    },
  ];

  if (!imagesActivated) {
    items = items.filter((x) => x.name != 'Image');
  }

  return items;
};
