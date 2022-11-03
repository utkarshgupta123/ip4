import Useref from './components/useRef';
import './App.css';
import Questions from "./components/Questions";
// import LifeCycleMethods from './Components/lifecycle';
import React from 'react';
import Lifecycle1 from './components/LifeCycle1';
import UseMemo from './components/useMemo';



export const App = () => {
  return (
    <div>
       <>
    <center>
    <Useref/>
     <Questions/>
     <UseMemo/>
     <Lifecycle1/>
     
    </center>
     </>
    </div>
  )
}


export default App;