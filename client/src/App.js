import React, { Component } from 'react';
import piggy from './piggy.jpg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            stringInfo: '',
            passwordDate:[],
            passwordString: '',
            balance:[],
            balanceAmount: ''
        }
    };
    submitChange =(event) =>{
        fetch('/api/todo',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: "test",
                        todo: this.state.stringInfo,
                        isDone: "false"
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
    };

    InputOnChange =(event) =>{
        this.setState({stringInfo: event.target.value})

    };
    ChangeOnInput =(event) =>{
        this.setState({passwordString: event.target.value})
    };
    ChangeBalance =(event) =>{
        this.setState({balanceAmount: event.target.value})
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={piggy} className="Pig-logo" alt="pigs" width={150} />
          <h1 className="App-title">Welcome to the CodeCrew bank</h1>
        </header>
        <p className= "App-intro">

            <form onSubmit={this.submitChange}>
            <label>Username: </label>
            <input type="text" value={this.state.stringInfo} onChange={this.InputOnChange} placeholder={"Enter Username"}/>
            <label>Password: </label>
            <input type="password" value={this.state.passwordString} onChange={this.ChangeOnInput} placeholder={"Enter Password"}/>
            <label>Balance</label>
            <input type="number" value={this.state.balanceAmount} onChange={this.ChangeBalance} placeholder={"What is your balance?"}/>
            <input type="submit" value="Submit"/>
            </form>
        </p>
      </div>
    );
  }
}

export default App;
