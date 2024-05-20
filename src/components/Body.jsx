import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';
import FormInput from './FormInput';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      countKarakter: 50,
      title: '',
      body: '',
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
    this.onLimitKarakter = this.onLimitKarakter.bind(this);
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArsipHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onBodyEventHandler(event) {
    const values = event.target.value;
    this.setState({ body: values });
  }
  onLimitKarakter(event) {
    const maxKarakter = 50;
    const value = event.target.value;

    if (value.length <= maxKarakter) {
      this.setState({
        title: value,
        countKarakter: maxKarakter - value.length,
      });
    }
  }

  onAddNoteHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (title && body) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      this.setState((prevState) => ({
        notes: [...prevState.notes, newNote],
        title: '',
        body: '',
        countKarakter: 50,
      }));
    }
  }

  render() {
    const noteSearch = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.props.search.toLowerCase())
    );
    const daftarNote = noteSearch.filter((note) => {
      return note.archived === false;
    });
    const daftarNotess = noteSearch.filter((note) => {
      return note.archived === true;
    });
    return (
      <>
        <div className="note-app__body">
          <FormInput
            sisakarakter={this.state.countKarakter}
            title={this.state.title}
            onTitleChange={this.onLimitKarakter}
            body={this.state.body}
            onSubmit={this.onAddNoteHandler}
            onBodyChange={this.onBodyEventHandler}
          />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={daftarNote}
            onDelete={this.onDeleteHandler}
            onArsip={this.onArsipHandler}
          />

          <h2>Arsip</h2>

          <NoteList
            notes={daftarNotess}
            onDelete={this.onDeleteHandler}
            onArsip={this.onArsipHandler}
          />
        </div>
      </>
    );
  }
}

export default Body;
