import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'

class Home extends Component {
    

    render () {
        return(<>
            <div className="landing-page">
                <h1 className="memes">MEMES<span className="woo">!</span></h1>
                <h2>Are you a <span className="dog-hover">dog</span> person?</h2>
                <h2>or a <span className="cat-hover">cat</span> person?</h2>
            </div>

            <div className="animal-flex">
                <Link to="/choosedog">
                    <div className="dog-button"><img src={`https://res.cloudinary.com/alienora/image/upload/v1593797801/dog_wdcca1.png`} alt="dog-silhouette"></img></div>
                </Link>

                <Link to="/choosecat">
                    <div className="cat-button"><img src={`https://res.cloudinary.com/alienora/image/upload/v1593795750/cat_png_owqiym.png`} alt="cat-silhoutte"></img></div>
                </Link>
            </div>
            <Footer />
        </>)
    }
}

export default withRouter(Home)
