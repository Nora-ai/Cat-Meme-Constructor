import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './Home'
import ChoosePicture from './ChoosePicture'
//import CustomizePicture from './CustomizePicture'
//import CatLibrary from './CatLibrary'

class App extends Component {


render () {
    return(<>
    <Route path='/' exact>
        <Home />
    </Route>
    <Route path='/choosepicture'>
        <ChoosePicture />
    </Route>
    </>)
  }
}

export default App


