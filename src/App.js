import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

// cc 
class App extends Component {

  state = {
    counters: [
        {id: 1, value: 1},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 10 }
    ]
  } 


  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    //Ajax Call
    console.log("App - Compoennt Did Mount");
  }


  handleDelete = (counterId) => {
      console.log("event handler called", counterId);
      const counters = this.state.counters.filter(c=> c.id !== counterId);
      this.setState({counters: counters});
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
          
      })
      this.setState({counters});
  }

  onIncrment = () => {
      console.log("onIncrement function is called");
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].value++;
      this.setState({counters});
  }


  render() {
    console.log("App - Render")
    return (
      <React.Fragment>
        <Navbar 
          totalCounters = {this.state.counters.filter(c=>c.value>0).length}
        
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }



}
 
export default App;
