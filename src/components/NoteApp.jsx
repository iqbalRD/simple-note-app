import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './footer';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }
  onSearchEventHandler(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    return (
      <>
        <Header
          onchangeInput={this.onSearchEventHandler}
          searchValue={this.state.search}
        />
        <Body search={this.state.search} />
        <Footer />
      </>
    );
  }
}

export default NoteApp;
