import React, { Component } from 'react'
import sonimg from '../../../images/SON.png'

class SonModal extends Component {
  state = {
    cname: null,
    business: null,
    address: null,
    email: null,
    store: false
  }



  componentDidMount() {
    this.setState({
      cname: this.props.cname,
      business: this.props.business,
      address: this.props.address,
      email: this.props.email,

    })
  }

  handleValidateClick = () => {
    this.setState({ store: true })
  }

  render() {


    const style = {
      width: '10%',
      height: '10%',
      margin: '20px,0,0,20px'
    }

    return (
      <div className='card'>
        <img src={sonimg} style={style} className='responsive-img'></img>
        <div className='card-content'>
          <div className='row'>
            <div className='col s12 m8'>
              <div className='row'>
                <div className='col s12 m4'>
                  <h6>Business Name</h6>
                </div>
                <div className='col s12 m8'>
                  <input type='text' defaultValue={this.state.store === true ? this.state.cname : ''}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 m4'>
                  <h6>Product category</h6>
                </div>
                <div className='col s12 m8'>
                  <input type='text' defaultValue={this.state.store === true ? this.state.business : ''}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 m4'>
                  <h6>Nature of Business</h6>
                </div>
                <div className='col s12 m8'>
                  <input type='text' defaultValue={this.state.store === true ? this.state.business : ''}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 m4'>
                  <h6>Address</h6>
                </div>
                <div className='col s12 m8'>
                  <input type='text' defaultValue={this.state.store === true ? this.state.address : ''}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 m4'>
                  <h6>Email</h6>
                </div>
                <div className='col s12 m8'>
                  <input type='email' defaultValue={this.state.store === true ? this.state.email : ''}></input>
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
              <button onClick={this.handleValidateClick} className='btn btn-large green'>Get Details</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default SonModal