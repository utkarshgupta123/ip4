import '../App.css';
import React from 'react';

  const Questions =()=>{
    return(
    <div>
    <p><b>1. What is Context api</b></p>
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. 
        This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. 
        Context is also touted as an easier, lighter approach to state management using Redux.
        Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
    React.createContext() is all you need. It returns a consumer and aovider.ovider is a component that as it's names suggests provides the state to its children. I
        t will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
    <p><b>2.Difference between callback and useCallback Hook ?</b></p>
    <p> UseCallback:
    useCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies that set the parameters. 
    It’s useful when a component is passing a callback to its child component in order to prevent rendering. 
    It only changes the callback when one of its dependencies is changed.
    </p>
    <p>callbacks:A callback is a function passed as an argument to another function.This technique allows a function to call another function.
        A callback function can run after another function has finished</p>
    <p><b>3.What is Props Drilling Concept ?What is State Uplifting ?</b></p>
    <p>Prop drilling: Is the unofficial term for passing data through several nested children components, in a bid to deliver this data to a deeply-nested component. 
        The problem with this approach is that most of the components through which this data is passed have no actual need for this data.
        They are simply used as mediums for transporting this data to its destination component.
        This is where the term “drilling” comes in, as these components are forced to take in unrelated data and pass it to the next component,
         which in turn passes it, and so on, until it reaches its destination. This can cause major issues with component reusability and app performance,</p>
      <p> state Uplifting:As we know, every component in React has its own state.
        Because of this sometimes data can be no longer useful and inconsistent. 
       So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.</p>
       <p><b>4.Difference between useEffect and useContext ?</b></p>
       <p>
useState — This hook allows us to use state in function components (the equivalent to this. state and this. setState in class components) <br />

useContext — This hook takes in a context object and returns whatever is passed in as a value prop in MyContext.

“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.
 Context defined will be available to all the child components without involving “props”</p>
    </div>
    )
}

export default Questions;