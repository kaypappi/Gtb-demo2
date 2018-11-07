import React, { Component } from 'react'
import Img4 from '../images/cac.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Reservation extends Component {
  state={
    id:null
  }

  componentDidMount(){
    let id=this.props.match.params.user_id
    this.setState({
      id:id
    })
  }

  onSubmit=(e)=>{
    e.preventDefault()
    let cname=document.getElementById('cname').value
    let address=document.getElementById('address').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('phone').value
    let reg_id=this.state.id
    let id=this.props.store.Reservation.length+1

    this.props.addReserve(id,reg_id,cname,address,email,phone)


  }

  render() {
    const users = this.props.store.users
    const reserve = this.props.store.Reservation
    console.log(users, reserve)

    return (
      <div className=''>

        <div className='row'>
          <div className='col s6 '><h4>Reservation Form</h4></div>
          <div className='s6'><img className='responsive-img' src={Img4} alt=""></img></div>

        </div>
        <div className='row'>
          <div className='col s12 m8'>
            <form onSubmit={this.onSubmit}>
              <label>Prospective Company Name</label>
              <input id='cname' type='text'></input>
              <label>Address</label>
              <input id='address' type='text'></input>
              <label>E-mail</label>
              <input id='email' type='email'></input>
              <label>Pnone No</label>
              <input id='phone' type='number'></input>
              <button className='btn btn-large green'>Proceed</button>
              <hr></hr><br /><br />
            </form>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <div className='right'>
              <p>Click Here To...<Link to={'/registration'+this.state.id}><button className='btn-large btn green'>Register A Business Name</button></Link></p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReserve: (id,reg_id,cname,address, email, phone) => { dispatch({ type: 'CREATE_RESERVATION', id: id, reg_id:reg_id, cname:cname,address:address, email: email, phone:phone }) }
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Reservation)