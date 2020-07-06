import React from 'react'

export default function Video () {
    return (<>
        <div className='fullscreen-bg'>
            <video autoPlay="autoplay" loop="loop" muted className="fullscreen-bg-video">
                <source src={`https://res.cloudinary.com/alienora/video/upload/v1593997460/180503_02_PurpleGrid_qizrtn.mp4`} type="video/mp4"></source>
            </video>
        </div>
    </>)
}