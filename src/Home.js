import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import Video from './Video'

class Home extends Component {
    

    render () {
        return(<>
            <Video />
            <div className="landing-page">
                <h1 className="meme-ix">MEME-<span className="ix-flash">IX</span></h1>
                <div className="are-you-a">
                <h2>Are you a <span className="dog-hover">dog</span> person?</h2>
                <h2>or a <span className="cat-hover">cat</span> person?</h2>
                </div>
            </div>

            <div className="animal-flex">
                <Link to="/choosedog">
                    <div className="dog-button"><img src={`https://res.cloudinary.com/alienora/image/upload/v1593797801/dog_wdcca1.png`} alt="dog-silhouette"></img></div>
                </Link>

                <Link to="/choosecat">
                    <div className="cat-button"><img src={`https://res.cloudinary.com/alienora/image/upload/v1593973140/56884483-vector-black-silhouette-of-a-walking-cat-_dxtlqm.png`} alt="cat-silhoutte"></img></div>
                </Link>
            </div>
            <Footer />
        </>)
    }
}

export default withRouter(Home)
