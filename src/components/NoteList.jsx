import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArsip }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArsip={onArsip}
            isArchived={note.archived}
            {...note}
          />
        ))
      )}
    </div>
  );
}
