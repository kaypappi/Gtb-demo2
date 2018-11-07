import React, {Component} from 'react'

class FirsModal extends Component{
  state={
    cname:null,
    address:null,
    business:null,
    pname:null,
    email:null,
    phone:null,
    store:false
  }

  handleValidateClick = () => {
    this.setState({ store:true })
  }

  componentDidMount(){
    this.setState({
      cname:this.props.cname,
      address:this.props.address,
      business:this.props.business,
      pname:this.props.pname,
      email:this.props.email,
      phone:this.props.phone
    })
  }

  render(){
  return(
    <div className='card'>
      <div className='card-content'>
        <div className='row'>
          <div className='col s3'>
          <h3 style={{ display: `${this.state.store === false ? 'block' : 'none'}` }}>Company Name</h3>
            <h3 style={{ display: `${this.state.store === true ? 'block' : 'none'}` }}>{this.state.cname}</h3>
          </div>
          <div className='col s9 '>
            <div className='right'>
            <h3 style={{ display: `${this.state.store === false ? 'block' : 'none'}` }}>Company Details</h3>
            <p style={{ display: `${this.state.store === true ? 'block' : 'none'}` }}>{this.state.phone}</p>
            <p style={{ display: `${this.state.store === true ? 'block' : 'none'}` }}>{this.state.email}</p>
            <p style={{ display: `${this.state.store === true ? 'block' : 'none'}` }}>{this.state.address}</p>
            </div>
            
          </div>
        </div><div className='divider'></div>
        <p>Task Controller,<br/>Federal Inland Revenue Service,<br/>Ikoyi MSTO, 24 Adeniyi Jones,<br/>Ikeja Lagos</p>
        <h5 className='center'>Application For Company Income Task Registration</h5><br/>
        <p>1.{this.state.store=== true ? this.state.cname : 'Company\'s Name'}<br/>2. {this.state.store=== true ? this.state.address : 'Company\'s Address'}.<br/>3. Not Applicable<br/>4. BN 123456<br/>5. Not Applicable<br/>
        6. {this.state.store=== true ? this.state.business : 'Product or Services'}<br/>7. Not Applicable<br/>8.Not Applicable<br/>9. {this.state.store=== true ? this.state.pname : 'Company Directors'}
        <br/>10. Not Applicable<br/>11. {this.state.store=== true ? this.state.pname : 'Company Directors'}<br/>12. GTBank<br/>13. Not Applicable
        <br/>14. Not Applicable<br/>
        </p>
        <button  className='btn orange darken-4'>Edit</button><br/><br/>
        <button onClick={this.handleValidateClick} className='btn orange darken-4'>Get Details From Profile</button>

      </div>
    </div>
  )
}
}

export default FirsModal