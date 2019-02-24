import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 3},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  };

  handleInc = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]={...counter};
      counters[index].value++;
      this.setState({counters});
  }

  handleDel = (id) => {
      this.setState({ counters: this.state.counters.filter(c => c.id!==id) });
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value=0;
          return c;
      });
      this.setState({counters});
  }
  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleInc} onDelete={this.handleDel} />
        </main>
      </React.Fragment> 
    );
  }
}

export default App;
