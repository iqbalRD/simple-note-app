import React from 'react';

export default function Input({
  sisakarakter,
  body,
  title,
  onSubmit,
  onTitleChange,
  onBodyChange,
}) {
  return (
    <form action="" className="" onSubmit={onSubmit}>
      <p className="note-input__title__char-limit">
        Sisa karakter : {sisakarakter}
      </p>
      <input
        className="note-input__title"
        type="text"
        name="title"
        id="title"
        placeholder="Judul"
        required
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        className="note-input__body"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="tulis catatan mu disini"
        required
        value={body}
        onChange={onBodyChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
