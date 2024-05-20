import React from 'react';

export default function InputSearch({ searchValue, onchangeInput }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan...."
        onChange={onchangeInput}
        value={searchValue}
      />
    </div>
  );
}
