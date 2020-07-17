import React, { Component } from 'react';
import Title from './components/Title';
import InputHandler from './components/InputHandler';
import Checkboxes from './components/Checkboxes';

class App extends Component {
  state = {
    text: 'Hola',
    primero: false,
    segundo: false,
  };

  handleText = e => {
    this.setState({ text: e.target.value });
  };

  handleCheckboxes = (selection, checked) => {
    this.setState({
      [selection]: checked,
    });
  };

  render() {
    let text;
    if (this.state.primero && this.state.segundo) {
      text = 'El primero y el segundo han sido seleccionados';
    } else if (this.state.primero) {
      text = 'El primero ha sido seleccionado';
    } else if (this.state.segundo) {
      text = 'El segundo ha sido seleccionado';
    }
    return (
      <>
        <Title text={text ? text : this.state.text} />
        <InputHandler textHandler={this.handleText} />
        <Checkboxes checkboxesHandler={this.handleCheckboxes}/>
      </>
    );
  }
}

export default App;
