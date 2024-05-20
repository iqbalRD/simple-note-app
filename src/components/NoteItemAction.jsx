import React from 'react';

export default function NoteItemAction({ onDelete, onArsip, id, isArchived }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="note-item__archive-button" onClick={() => onArsip(id)}>
        {isArchived ? 'Pindahkan' : 'Archieve'}
      </button>
    </div>
  );
}
