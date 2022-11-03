import React from 'react';

class LifeCycleMethods extends React.Component{
    constructor(){
      super();
      this.state = {
        count:0
      }
      console.log("I'm in constructor")
    }
  
    componentDidMount(){
      console.log("I'm in componentDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("I'm in componentDidUpdate", prevState.count, this.state.count)
    }

    componentWillUnmount() {
        console.log("I'm in componentWillUnmount")
    }
    
  
    render(){
      
      return(
        <div>
          Hello World, The Count is {this.state.count}
          <button onClick={() => this.setState({count: this.state.count + 1})}>Update Count</button>
        </div>
      )
    }
  
  
  }

  export default LifeCycleMethods;