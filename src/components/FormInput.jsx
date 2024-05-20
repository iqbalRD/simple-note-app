import React from 'react';

import Input from './Input';

export default function FormInput({
  sisakarakter,
  title,
  onTitleChange,
  onBodyChange,
  onSubmit,
  body,
}) {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <Input
        sisakarakter={sisakarakter}
        title={title}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        onSubmit={onSubmit}
        body={body}
      />
    </div>
  );
}
