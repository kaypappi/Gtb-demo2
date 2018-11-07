import React, { Component } from 'react'
import '../index.css'
import Img4 from '../images/737.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'


class SectionC extends Component {
  state = {
    selectedPaymentMethod: "cashout",
    id:null
  }
  componentDidMount(){
    let id=this.props.match.params.user_id
    this.setState({
      id:id
    })
  }

  handleOptionChange = (e) => {
    this.setState({ selectedPaymentMethod: e.target.value })
  }

  render() {
    const { selectedPaymentMethod } = this.state
    const store=this.props
    console.log(store)
    console.log(this.state)
    return (
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
                            onChange={this.handleOptionChange} />
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
                            onChange={this.handleOptionChange} />
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
                            onChange={this.handleOptionChange} />
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
              <div className='row'>
                <div className='col s12 m6'>
                  <form>
                    <div className='row'>
                      <div className='col s12 m4'>
                        <h6>Card No</h6>
                      </div>
                      <div className='col s12 m8'>
                        <input type='number'></input>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col s12 m4'>
                        <h6>Expiry Date</h6>
                      </div>
                      <div className='col s12 m8'>
                        <input type='date'></input>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col s12 m4'>
                        <h6>CCV</h6>
                      </div>
                      <div className='col s12 m8'>
                        <input type='number' max='999'></input>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col s12 m6'>
                  <h6>CAC.GOV.NG REGISTRATION</h6>
                  <p className=''>Amount:10,000.00</p><br />
                  <h6>REGISTRATION FEE</h6>
                  <p className=''>Amount:1,000.00</p><br />
                  <h6>COMMISSION</h6>
                  <p className=''>Amount:1,000.00</p><br />
                </div>
              </div>
              <form>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>I Accept the payment terms and confirm that my account should be debited for the corresponding changes</span>
                  </label>
                </p>
                <Link to={'/profile'+this.state.id}><button className='btn btn-large green'>Submit</button></Link>
              </form>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      users: state.proprietors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      createUser: (id, email, password) => { dispatch({ type: 'CREATE_USER', id: id, email: email, password: password }) }
  }

}

export default connect(mapStateToProps)(SectionC)