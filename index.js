import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Olá, Eu sou o Daniel Rubim, Desenvolvedor Front-end :)
        </p>
        
      </div>
      
    
    
    );
  }
}

render(<App />, document.getElementById('root'));
