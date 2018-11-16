import React, { Component } from 'react'
import Img4 from '../images/cac.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Notification from './Notification'
import Modal from 'react-modal'

class Reservation extends Component {
  state = {
    id: null,
    messageModalIsOpen: false,
    block2:'hide',
    ref_no:null
  }

  openModal = (modalContext,e) => {
    e.preventDefault()
    this.setState({ [modalContext]: true });
  }

  closeModal = (modalContext) => {
    this.setState({ [modalContext]: false });
  }

  componentDidMount() {
    let id = this.props.match.params.user_id
    this.setState({
      id: id
    })
  }

  handleClick=()=>{
    this.setState({
      block2:'show'
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let cname = document.getElementById('cname').value
    let address = document.getElementById('address').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let reg_id = this.state.id
    let id = this.props.store.Reservation.length + 1
    let ref_no=Math.floor(Math.random()*10000000000)
    this.setState({
      ref_no:ref_no
    })

    this.props.addReserve(id, reg_id, ref_no, cname, address, email, phone)
    console.log('sucess')


  }

  render() {
    const users = this.props.store.users
    const reserve = this.props.store.Reservation
    const block2=this.state.block2
    
    const message='Dear customer, your business name reservation with CAC was successful. Your Reference Number is: '+ this.state.ref_no
    console.log(users, reserve)

    return (
      <div className=''>

        <div className='row'>
          <div className='col s6 '><h4>Reservation Form</h4></div>
          <div className='s6'><img className='responsive-img' src={Img4} alt=""></img></div>

        </div>
        <div className='row'>
          <div className='col s12 m8'>
            <form onSubmit={(e) => { this.onSubmit(e); this.openModal('messageModalIsOpen',e)  }}>
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
            <Modal
                isOpen={this.state.messageModalIsOpen}
                onRequestClose={() => this.closeModal('messageModalIsOpen')}
                contentLabel="Account Form"
                style={{
                  overlay: {
                    backgroundColor: 'papayawhip',
                    width:'60%',
                    height:'60%',
                    top:'20%',
                    left:'20%'
                  },
                  content: {
                    color: 'lightsteelblue'

                  }
                }}
              >
              <Notification message={message}></Notification>
              <button className='btn ntn-large green' onClick={()=>{this.closeModal('messageModalIsOpen'); this.handleClick()}}>Next</button>
              </Modal>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <div className='right' style={{ display: `${block2 === 'show' ? 'block' : 'none'}` }}>
              <p>Click Here To...<Link to={'/registration' + this.state.id}><button className='btn-large btn green'>Register A Business Name</button></Link></p>
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
    addReserve: (id, reg_id, ref_no, cname, address, email, phone) => { dispatch({ type: 'CREATE_RESERVATION', id: id, reg_id: reg_id, ref_no: ref_no, cname: cname, address: address, email: email, phone: phone }) }
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Reservation)