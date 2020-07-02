import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './App.css';
import Home from './Home'
import ChooseCat from './ChooseCat'
import ChooseDog from './ChooseDog'
import MakeMeme from './MakeMeme'

class App extends Component {
    constructor(props) {
        super()
    console.log(props)
    }

render () {
    return(<>
    <Route path='/' exact>
        <Home />
    </Route>
    <Route path='/choosecat'>
        <ChooseCat />
    </Route>
    <Route path='/choosedog'>
        <ChooseDog />
    </Route>
    <Route path='/makememe/:url'>
        <MakeMeme history={this.props.history}/>
    </Route>

    </>)
  }
}

export default withRouter(App)


