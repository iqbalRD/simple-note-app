import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';
import { showFormattedDate } from '../utils';

export default function NoteItem({
  title,
  createdAt,
  body,
  onDelete,
  onArsip,
  id,
  isArchived,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <NoteItemAction
        onDelete={onDelete}
        onArsip={onArsip}
        id={id}
        isArchived={isArchived}
      />
    </div>
  );
}
