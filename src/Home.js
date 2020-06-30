import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    

    render () {
        return(<>
            <h1>Cat Memes!</h1>
            <Link to="/choosepicture"><button>Enter</button></Link>
        </>)
    }
}

export default withRouter(Home)