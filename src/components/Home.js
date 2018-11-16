import React, { Component } from 'react'
import Img2 from '../images/slide1.png'



class Home extends Component {
    componentDidMount() {
    this.props.history.push('/')
  }

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
