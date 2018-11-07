import React, { Component } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import Simi from '../../images/simi.jpg'
import Img4 from '../../images/737.png'
import Img1 from '../../images/firs.jpg'
import Img2 from '../../images/nafdac.png'
import Img3 from '../../images/efcc.jpg'
import Img5 from '../../images/SON.png'
import MainOption from './components/MainOption'
import FirsModal from'./components/FirsModal'
import NafdacModal from './components/NafdacModal'
import Sculm from './components/Sculm'
import SonModal from'./components/SonModal'

Modal.setAppElement(document.getElementById('root'))

class Profile extends Component {
  state = {
    selectedPaymentMethod: "cashout",
    openAcctModalIsOpen: false,
    paymentModalIsOpen: false,
    firsModalIsOpen: false,
    nafdacModalIsOpen: false,
    efccModalIsOpen: false,
    sonModalIsOpen: false,
    currentForm: "form1",
    showNafdacBtn: false,
    showEfccBtn: false,
    showFirsBtn: false,
    showSonBtn:false,
    id:null
  }

  

  openModal = (modalContext) => {
    this.setState({ [modalContext]: true });
  }

  closeModal = (modalContext) => {
    this.setState({ [modalContext]: false });
  }

  handleValidateClick = (e) => {
    this.setState({ currentForm: "form2" })
  }

  handlePaymentMethodChange = (e) => {
    this.setState({ selectedPaymentMethod: e.target.value })
  }
  getfield = (id, field) => {
    let pro=this.props.pro.proprietors
    let user = pro.find(user => user.id === id.toString())
    return user[field];
}

getfield2 = (id, field) => {
  
  let comp=this.props.pro.company
  console.log(comp)
  let user = comp.find(user => user.id === id.toString())
  return user[field];
}

  
  getfield3 = (id, field) => {
    let reserve=this.props.pro.Reservation
    console.log(reserve)
      
    let user = reserve.find(user => user.id === id.toString())
    return user[field];
  }

  render() {
    const {
      currentForm,
      selectedPaymentMethod,
      showNafdacBtn,
      showEfccBtn,
      showFirsBtn,
      showSonBtn
    } = this.state

    const pro=this.props.pro.proprietors
    
    
    const id=this.props.match.params.user_id.toString()
    console.log(id,pro)
    const cname=this.getfield3(id,'cname')
    const address=this.getfield2(id,'address');
    const business=this.getfield2(id,'business')
    const email=this.getfield3(id,'email')
    const phone=this.getfield3(id,'cphone')
    const pname=pro.filter(pros=>pros.reg_id===id).map(pros=>{
      return pros.surname+' '+pros.firstname+' '+ pros.othernames
    }).join(',')
    const pemail=pro.find(pros=>pros.id===id).email
    const pPhone=pro.find(pros=>pros.id==id).phone
    
    console.log(cname,address,business,pname,pemail,pPhone)

    const getfield = (id, field) => {
      
      let user = pro.find(user => user.id === id.toString())
      return user[field];
  }

  



    return (
      <div className='row'>
        <div className='col s3 push-s1'>
          <h6>Welcome,<p className='orange-text text-darken-4'>{getfield(id,'surname')+' '+getfield(id,'firstname')+' '+getfield(id,'othernames')}</p></h6>
          <img className='responsive-img' src={getfield(id,'photo')} alt="" />
          <button className='btn btn-large green'>Update Bio</button>
        </div>
        <div className='col s7 push-s1'>
          <div className='row'>
            <MainOption title="GTBank Products" />
            <MainOption title="Library" />
          </div>
          <div className='row'>
            <MainOption title="FAQs" />
            <MainOption title="Branch Locations" />
          </div>
          <div className='row'>
            <div className='col s12 m6'>
              <button className='btn btn-large orange darken-4' onClick={() => this.openModal('openAcctModalIsOpen')}>Open a Business Account Now!</button>
              <Modal
                isOpen={this.state.openAcctModalIsOpen}
                onRequestClose={() => this.closeModal('openAcctModalIsOpen')}
                contentLabel="Account Form"
              >
                <div className='grey lighten-3'>
                  <h4 className='center'>Account Opening Web Engine</h4>
                  <p className='center'>Welcome to the Guaranty Trust Bank Onlie Account Opening Web Engine, Where You can Initiate The Process Of Account Opening And Get an Account Number Instantly</p>
                  <div className='container'>
                    <div className='card' style={{ display: `${currentForm === 'form1' ? 'block' : 'none'}` }}>
                      <div className='card-content'>
                        <h6>Step 1 of 6: Account Choices</h6><hr /><br />
                        <div className='row'>
                          <div className='col s12 m4'><h6>What would you like to do?</h6></div>
                          <div className='col s12 m6'><input type='text' placeholder='Open an Account'></input></div>
                        </div><br /><br />
                        <h6>Step 2 of 6: RC Number Validation</h6><hr /><br />
                        <div className='row'>
                          <div className='col s12 m4'><h6>Business Account Product</h6></div>
                          <div className='col s12 m6'><input type='text' placeholder=''></input></div>
                        </div>
                        <div className='row'>
                          <div className='col s12 m4'><h6>Account Currency</h6></div>
                          <div className='col s12 m6'><input type='text' placeholder=''></input></div>
                        </div>
                        <div className='divider'></div>
                        <div className='row'>
                          <div className='col s12 m4'><h6>RC Number</h6></div>

                          <div className='col s12 m6'><input type='text' placeholder=''></input></div>
                        </div>
                        <button className='btn btn-large orange darken-3' onClick={this.handleValidateClick}>Validate</button>
                      </div>
                    </div><br />
                    <div className='card' style={{ display: `${currentForm === 'form2' ? 'block' : 'none'}` }}>
                      <div className='card-content'>
                        <div className='row'>
                          <div className='col s4'>
                            <h4 className='orange-text text-darken-4'>Your Business Account Opening Is All set</h4><br />
                            <p>Account Name</p>
                            <h6>Team Ferrari</h6><br />
                            <p>Account Number</p>
                            <h6>0120889012</h6><br />
                          </div>
                          <div className='col s8'>
                            <div className='row'>
                              <h4>Choose Account Officer</h4>
                              <div className='col s12 m4'>
                                <h6>Account Officer</h6>
                              </div>
                              <div className='col s12 m8'>
                                <input type='text'></input>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col s12 m4'>
                                <h6>Contact Email</h6>
                              </div>
                              <div className='col s12 m8'>
                                <input type='text'></input>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col s12 m4'>
                                <h6>Phone No</h6>
                              </div>
                              <div className='col s12 m8'>
                                <input type='text'></input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className=' btn btn-large orange darken-4' onClick={() => { this.openModal('paymentModalIsOpen'); this.setState({ showFirsBtn: true }) }}>Fund Account Now!</button>
                        <Modal
                          isOpen={this.state.paymentModalIsOpen}
                          onRequestClose={() => this.closeModal('paymentModalIsOpen')}
                          contentLabel="Account Form"
                        >
                          <div className='container grey lighten-3'><br /><br />
                            <div className='container '><br />
                              <div className='card '>
                                <h4 className='card-title'>Section C: Please Select a payment Method</h4>
                                <div className='card-content'>
                                  <form action="#">
                                    <div id="paymentContainer" name="paymentContainer" className="paymentOptions">
                                      <div className='row'>
                                        <div className='col s12 m4'>
                                          <div id="payCC" className="floatBlock left">
                                            <label>
                                              <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="cashout"
                                                checked={selectedPaymentMethod === 'cashout'}
                                                onChange={this.handlePaymentMethodChange} />
                                              <span><img className='responsive-img' src={Img4} alt=""></img></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className='col s12 m4'>
                                          <div id="payCC" className="floatBlock">
                                            <label>
                                              <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="card"
                                                checked={selectedPaymentMethod === 'card'}
                                                onChange={this.handlePaymentMethodChange } />
                                              <span><FontAwesomeIcon icon='credit-card' color='#e65100' size='6x'></FontAwesomeIcon></span>
                                            </label>
                                          </div>
                                        </div>
                                        <div className='col s12 m4'>
                                          <div id="payCC" className="floatBlock right">
                                            <label>
                                              <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="bank"
                                                checked={selectedPaymentMethod === 'bank'}
                                                onChange={this.handlePaymentMethodChange} />
                                              <span><FontAwesomeIcon icon='university' color='#e65100' size='6x'></FontAwesomeIcon></span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className='card test' id="" style={{ display: `${selectedPaymentMethod === 'card' ? 'block' : 'none'}` }}>
                                <div className='card-content'>
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Status</th>
                                        <th>Reference</th>
                                        <th>Transaction Information</th>
                                        <th>Date</th>
                                      </tr>
                                    </thead>

                                    <tbody>
                                      <tr>
                                        <td><span class="new badge" data-badge-caption="Success"></span></td>
                                        <td>Biz_Starter_Demo_Pay</td>
                                        <td>N10,000 from Shola</td>
                                        <td>Feb,21,2018 8:53 AM</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <button onClick={()=>{this.closeModal('openAcctModalIsOpen'); this.closeModal('paymentModalIsOpen')}} className='btn btn-large green'>Close</button>
                              </div>
                              <br /><br />
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div><br />
                  </div>
                </div>
              </Modal>
            </div>
            <div className='col s12 m6'>
              <div className='row'>
                <div className='col s3' onClick={() => this.openModal('firsModalIsOpen')} style={{ display: `${showFirsBtn ? 'block' : 'none'}` }}>
                  <img src={Img1} className='responsive-img' alt="" />
                </div>
                <Modal
                  isOpen={this.state.firsModalIsOpen}
                  onRequestClose={() => this.closeModal('firsModalIsOpen')}
                  contentLabel="FIRS Form">
                  <div className='container'>
                    <FirsModal cname={cname} address={address } business={business} pname={pname} email={email} phone={phone}></FirsModal>
                    <button className='btn btn-large green' onClick={() => {this.setState({ showNafdacBtn: true }); this.closeModal('firsModalIsOpen') }}>Submit</button>
                  </div>
                  
                </Modal>
                <div className='col s3' onClick={() => this.openModal('nafdacModalIsOpen')} style={{ display: `${showNafdacBtn ? 'block' : 'none'}` }}>
                  <img src={Img2} className='responsive-img' alt="" />
                </div>
                <Modal
                  isOpen={this.state.nafdacModalIsOpen}
                  onRequestClose={() => this.closeModal('nafdacModalIsOpen')}
                  contentLabel="NAFDAC Form">
                  <div className='container'>
                    <NafdacModal cname={cname} address={address } business={business} email={email} ></NafdacModal>
                    <button className='btn green' onClick={() => {this.setState({ showEfccBtn: true });this.closeModal('nafdacModalIsOpen')}}>Submit</button>
                  </div>
                  
                </Modal>
                <div className='col s3' onClick={() => this.openModal('efccModalIsOpen')} style={{ display: `${showEfccBtn ? 'block' : 'none'}` }}>
                  <img src={Img3} className='responsive-img' alt="" />
                </div>
                <Modal
                  isOpen={this.state.efccModalIsOpen}
                  onRequestClose={() => this.closeModal('efccModalIsOpen')}
                  contentLabel="EFCC Form">
                  <div className=''>
                    <Sculm cname={cname} address={address } business={business} pname={pname} email={email} phone={phone} pemail={pemail} pPhone={pPhone}></Sculm>
                    <button onClick={() => {this.setState({ showSonBtn: true });this.closeModal('efccModalIsOpen')}} className='btn green'>Submit</button>
                  </div>
                </Modal>
                <div className='col s3' onClick={() => this.openModal('sonModalIsOpen')} style={{ display: `${showSonBtn ? 'block' : 'none'}` }}>
                  <img src={Img5} className='responsive-img' alt="" />
                </div>
                <Modal
                  isOpen={this.state.sonModalIsOpen}
                  onRequestClose={() => this.closeModal('sonModalIsOpen')}
                  contentLabel="SON Form">
                  <div className='container'>
                    <SonModal cname={cname} address={address } business={business} email={email}></SonModal>
                    <button onClick={()=>this.closeModal('sonModalIsOpen')} className='btn green' >Submit</button>
                  </div>
                  
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pro: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReserve: (id,reg_id,cname,address, email, phone) => { dispatch({ type: 'CREATE_RESERVATION', id: id, reg_id:reg_id, cname:cname,address:address, email: email, phone:phone }) }
  }

}

export default connect(mapStateToProps)(Profile)