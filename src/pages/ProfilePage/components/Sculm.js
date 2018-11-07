import React, {Component} from 'react'

class Sculm extends Component{
  state={
    cname:null,
    address:null,
    business:null,
    pname:null,
    email:null,
    phone:null,
    pemail:null,
    pPhone:null,
    store:false
  }

  componentDidMount(){
    this.setState({
      cname:this.props.cname,
      address:this.props.address,
      business:this.props.business,
      pname:this.props.pname,
      email:this.props.email,
      phone:this.props.phone,
      pemail:this.props.pemail,
      pPhone:this.props.pPhone
    })
  }

  handleValidateClick = () => {
    this.setState({ store:true })
  }

  render(){

  return (
    <div className='card'>
      <div className='row'>
        <div className='col s12 m6'>
          <h4>SCULM REGISTRATION FORM</h4>
          <div className='row'>
            <div className='col s12 m8'><label>Incoporation/Registration/Business Name</label><input type='text'defaultValue={this.state.store=== true ? this.state.cname : ''}></input></div>
            <div className='col s12 m4'><label>CAC type</label><input type='text' ></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><label>RC No or BN No</label><input type='number'></input></div>
            <div className='col s12 m4'><label>Date Of Company Registration</label><input type='date'></input></div>
            <div className='col s12 m4'><label>Tin Number</label><input type='number'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><label>Company's Trade Name</label><input type='text' defaultValue={this.state.store=== true ? this.state.cname : ''}></input></div>
            <div className='col s12 m8'><label>DNFI Category</label><input type='text'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m12'><label>Brief Description Of Business</label><input type='text' defaultValue={this.state.store=== true ? this.state.business : ''}></input></div>

          </div>
          <div className='row'>
            <div className='col s12 m12'><label>Head Office Address(Physical Address)</label><input type='text' defaultValue={this.state.store=== true ? this.state.address : ''}></input></div>

          </div>
          <div className='row'>
            <div className='col s12 m4'><label>State</label><input type='text'></input></div>
            <div className='col s12 m4'><label>Phone No</label><input type='number' defaultValue={this.state.store=== true ? this.state.phone : ''}></input></div>
            <div className='col s12 m4'><label>ITB No</label><input type='number'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m8'><label>Brach Office Address</label><input type='text'></input></div>
            <div className='col s12 m4'><label>Website Address</label><input type='text'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><label>Directors Name</label><input type='text' defaultValue={this.state.store=== true ? this.state.pname : ''}></input></div>
            <div className='col s12 m4'><label>Directors Name2</label><input type='text'></input></div>
            <div className='col s12 m4'><label>Directors Name3</label><input type='text'></input></div>
          </div>
          <form action="#">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input type="file" multiple />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" placeholder="Upload one or more files" />
              </div>
            </div>
            <p>please scan all your documents as one pdf file. File size should not exceed 2MB</p>
          </form>
        </div>
        <div className='col s12 m6'>
          <div className='row'>
            <div className='col s12 m12'><label>Indicate nearest SCULM office to pick up certificate</label><input type='text'></input></div>

          </div>
          <div className='row'>
            <div className='col s12 m6'><label>Email Address</label><input type='email' defaultValue={this.state.store=== true ? this.state.pemail : ''}></input></div>
            <div className='col s12 m6'><label>Password</label><input type='password'></input></div>
          </div><br /><h6>Contact Person for the Organization</h6><br />

          <div className='row'>
            <div className='col s12 m6'><label>Name of Contact Person</label><input type='text' defaultValue={this.state.store=== true ? this.state.pname : ''}></input></div>
            <div className='col s12 m6'><label>Email</label><input type='email' defaultValue={this.state.store=== true ? this.state.pemail : ''}></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><label>Contact Phone No</label><input type='number' defaultValue={this.state.store=== true ? this.state.pPhone : ''}></input></div><br />
            <p>
              <label>
                <input type="checkbox" />
                <span>I read and understood the registration guidlines on the home page</span>
              </label>
            </p><br/><br/>
            <button onClick={this.handleValidateClick} className='btn green'>Get Details from Profile</button><br/><br/>
            


          </div>

        </div>
      </div>
    </div>
  )
}
}

export default Sculm