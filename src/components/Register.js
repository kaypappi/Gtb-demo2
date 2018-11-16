import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends Component {
    


    onSignin = (e) => {
        e.preventDefault()
        let user_id = document.getElementById('user_id').value
        let password = document.getElementById('spassword').value
        console.log(this.props.users, user_id, password)

        let id = this.props.users.find(user => user.email === user_id && user.password === password).id
        return this.props.history.push('/profile' + id)
    }

    addUser = (id, email, password) => {
        this.props.createUser(id, email, password)
    }

    onSignup = (e) => {
        e.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let cpassword = document.getElementById('cpassword').value

        let id = this.props.users.length + 1

        if (password === cpassword) {
            this.addUser(id, email, password)
        }
        return this.props.history.push('/reservation' + id)
    }

    render() {
        const { users } = this.props
        const getfield = (id, field) => {
            let user = users.find(user => user.id === id)
            return user[field];
        }



        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h4>Sign In</h4>
                        <div className='row'>
                            <div className='col s12 m8'>
                                <form onSubmit={this.onSignin}>
                                    <label>User-ID/E-mail</label>
                                    <input id='user_id' type='text' ></input>
                                    <label>Password</label>
                                    <input id='spassword' type='password'  ></input>
                                    <button className='btn green'>Proceed</button>
                                </form>
                            </div>
                            <div className='col s12 m4'>
                                <h6>Sign in with your existing GTBank Internet banking log in details</h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col s12 m8'>
                                <h4>Create A Profile</h4>
                                <form onSubmit={this.onSignup}>
                                    <label>Email</label>
                                    <input id='email' type='email'></input>
                                    <label>Password</label>
                                    <input id='password' type='password'></input>
                                    <label>Confirm Password</label>
                                    <input id='cpassword' type='password'></input>
                                    <button className='btn green'>Submit</button>
                                </form>
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
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (id, email, password) => { dispatch({ type: 'CREATE_USER', id: id, email: email, password: password }) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Register)