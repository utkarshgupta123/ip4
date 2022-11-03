import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'

export default class World extends Component {
    state={
        valuee:''
    };
    getValue=(event)=>{
        console.log("hello world",event.target.value);

        this.setState({valuee: event.target.value});
    };
    handleSubmit = (event)=>{
        event.preventDefault();
        const abc = this.state.valuee;
        console.log('value on submit',abc)
        
    };
  render() {
    console.log('state',this.state);

    return (
      <div>
        <h1>welcome to my app</h1>
        <form>
            <div>
                <label htmlFor="name">1st NAME</label>
                <input type="text"  id="name" onChange={this.getValue}></input>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

