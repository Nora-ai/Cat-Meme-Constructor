import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    

    render () {
        return(<>
            <h1>Cat/Dog Memes!</h1>
            <Link to="/choosecat"><button>I love Cats More</button></Link>
            <Link to="/choosedog"><button>I love Dogs More</button></Link>
        </>)
    }
}

export default withRouter(Home)