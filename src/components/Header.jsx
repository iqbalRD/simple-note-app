import React from 'react';
import InputSearch from './InputSearch';

export default function Header({ searchValue, onchangeInput }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <InputSearch searchValue={searchValue} onchangeInput={onchangeInput} />
    </div>
  );
}
