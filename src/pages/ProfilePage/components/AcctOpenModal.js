import React, { Component } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Simi from '../../images/simi.jpg'
import Img4 from '../../images/737.png'
import Img1 from '../../images/firs.jpg'
import Img2 from '../../images/nafdac.png'
import Img3 from '../../images/efcc.jpg'
import MainOption from './components/MainOption'

Modal.setAppElement(document.getElementById('root'))

class Profile extends Component {
  state = {
    selectedPaymentMethod: "cashout",
    openAcctModalIsOpen: false,
    paymentModalIsOpen: false,
    currentForm: "form1",
    showNafdacBtn: false,
    showEfccBtn: false,
    showFirsBtn: false,
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

  render() {
    const {
      currentForm,
      selectedPaymentMethod,
      showNafdacBtn,
      showEfccBtn,
      showFirsBtn
    } = this.state
    return (
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
                                        onChange={this.handlePaymentMethodChange} />
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
    )
  }
}

export default Profile