import React, { Component } from 'react'
import { connect } from 'react-redux'

class Preview extends Component {
  state = {
    reservation: [],
    company: [],
    proprietors: [],
    users: []


  }

  componentDidMount() {
    console.log(this.props.store)
    let reservation = this.props.store.Reservation
    let company = this.props.store.company
    let proprietors = this.props.store.proprietors
    let users = this.props.store.users

    this.setState({
      reservation: [...reservation],
      company: [...company],
      proprietors: [...proprietors],
      users: [...users]
    })

    console.log(this.state.reservation, reservation)
  }

  getfield = (id, field) => {
    let pro = this.props.store.proprietors
    let user = pro.find(user => user.id === id.toString())
    return user[field];
  }

  getfield2 = (id, field) => {

    let comp = this.props.store.company
    console.log(comp)
    let user = comp.find(user => user.id === id.toString())
    return user[field];
  }


  getfield3 = (id, field) => {
    let reserve = this.props.store.Reservation
    console.log(reserve)

    let user = reserve.find(user => user.id === id.toString())
    return user[field];
  }

  pname = () => {
    let pro = this.props.store.proprietors
    let id = this.props.id
    console.log(pro.filter(pros => pros.reg_id === id))
    const pnames = pro.filter(pros => pros.reg_id === id).map(pros => {
      return (
        <div>
          <div className='col s12 m4'>Proprietor</div>
          <div className='col s12 m4 ' >
            <p>{pros.surname + ', ' + pros.firstname + ' ' + pros.othernames}</p><br />
            <p>{pros.address}</p><br />
            <p>{pros.phone}</p><br />
            <p>{pros.email}</p><br />
            <p>{pros.Mid}</p>
            <p>Electronic Signature</p>
          </div>
          <div className='col s12 m4'>
            <img className='responsive-img' src={pros.photo}></img>
          </div>
        </div>
      )
    })

    return pnames

  }

  render() {
    console.log(this.state.reservation)
    const pro = this.props.store.proprietors

    const id = this.props.id
    const cname = this.getfield3(id, 'cname')
    const address = this.getfield2(id, 'address');
    const business = this.getfield2(id, 'business')
    const email = this.getfield3(id, 'email')

    console.log(cname, address, business, email)
    return (
      <div className='container white-text'>
        <h3>Company Details</h3>
        <div className='row'>
          <div className='col s12 m4 offset-m4'>
            <h5>{cname}</h5><br />
            <p>{business}</p><br />
            <p>{address}</p><br />
            <p>{email}</p><br />
          </div>

        </div>
        <h3>proprietors Details</h3>
        <div className='row'>
          {this.pname()}
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

export default connect(mapStateToProps)(Preview)