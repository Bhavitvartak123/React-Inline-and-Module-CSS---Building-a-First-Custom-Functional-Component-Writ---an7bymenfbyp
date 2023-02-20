import React from 'react'
import '../styles/App.css';
import Styles from '../styles/appStyles.module.css';

const App = () => {
  const heading ={


  }
  return (
    <>
    <div id="main">
      <h1 className={Styles.success}>Success</h1>
      <h1 id="error" style={{color:'red', fontSize:"50px"}}>Error</h1>
    </div>

    <div id="main">
    <h1 className="success3">Success</h1>
    <h1 id="error" style={{color:'red', fontSize:"50px"}}>Error</h1>
    </div>

    </>
  )
  }


export default App;
