import React, { Component } from 'react'
import Img2 from '../images/Page-12-Image-16.jpg'



class Home extends Component {

    render() {
        const image = {
            height: '20%',
            width: '98%',
            margin: '20px'
        }
        return (
            <div className="">
                <img classname='responsive-img center' alt='' style={image} src={Img2}></img>
            </div>
        )
    }
}

export default Home