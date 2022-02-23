import React, { Component } from 'react';
import './App.css'
import img from '../assest/demoImage.png'
class App extends Component{
   render(){
      return(
         <div className='class1'>
            <h1>Hello parth</h1>
            <img src={img}/>
         </div>
      );
   }
}
export default App;