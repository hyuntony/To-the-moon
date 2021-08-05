import React from 'react'
import background from './intro/background.mp4'
import rocket from './intro/rocketbackground.mp4'
import './Video.scss'
const Video = () => {
    return (
        <>
            <video className='videoTag' autoPlay loop muted>
                <source src={rocket} type='video/mp4' />
            </video>
        </>
    )
}

export default Video
