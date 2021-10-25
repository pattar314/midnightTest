import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './components/MainRouter.js';



const App = () => {

  React.useEffect(() => {

  

    try{
      const toRem = document.querySelector('#toRemove')
      if (toRem){
        toRem.parentNode.removeChild(toRem)
      }
    } catch (err) {
      if (err){
        console.log('there was an error: ', err)
      }
    }
    
  }, 
  [])


  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
    
  )
 }
 

export default App;
