import React, { Component } from 'react'
import Img4 from '../images/cac.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import M from "materialize-css/dist/js/materialize.min.js";
import { Button, Card, Row, Col, Input, Icon } from 'react-materialize';
import $ from 'jquery'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Proprietor from './proprietor'
import Preview from './preview'

class Registration extends Component {
    state = {
        currentForm: 'form1',
        firsModalIsOpen: false,
        ref_no: null,
        business: null,
        cname: null,
        address: null,
        email: null,
        id: null,
        uploadedIdUrl: '',
        uploadedIdFile: '',
        uploadedPhotoUrl: '',
        uploadedPhotoFile: '',
        value: [], count: 1

    }

    openModal = (modalContext) => {
        this.setState({ [modalContext]: true });
    }

    closeModal = (modalContext) => {
        this.setState({ [modalContext]: false });
    }



    componentDidMount() {

        console.log(M);
        M.AutoInit();

        console.log('ftcvygvbyg')
        let id = this.props.match.params.user_id.toString()
        let cname = this.getfield1(id, 'cname')
        let address = this.getfield1(id, 'address')
        let ref_no = this.getfield1(id, 'ref_no')
        let email = this.getfield1(id, 'email')

        this.setState({
            cname: cname,
            address: address,
            email: email,
            ref_no: ref_no,
            id: id
        })

        console.log(this.state, id, cname, ref_no)
    }


    onImageDropId = (files) => {
        this.setState({
            uploadedIdFile: files[0]
        });

        this.handleImageUploadId(files[0]);
    }

    onImageDropPhoto = (files) => {
        this.setState({
            uploadedPhotoFile: files[0]
        });

        this.handleImageUploadPhoto(files[0]);
    }

    handleImageUploadId = (file) => {
        const CLOUDINARY_UPLOAD_PRESET = 'kaypappi';
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kaypappi/image/upload/';
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedIdUrl: response.body.secure_url
                });
            }
        });
    }

    handleImageUploadPhoto = (file) => {
        const CLOUDINARY_UPLOAD_PRESET = 'kaypappi';
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/kaypappi/image/upload/';
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedPhotoUrl: response.body.secure_url
                });
            }
        });
    }

    handleValidateClick = (e) => {

        this.setState({ currentForm: "form2" })
    }

    handleChange = (field, value) => {
        this.setState({
            [field]: value
        })

    }

    handleChange2 = (field, value) => {

    }


    onSubmitA = (e) => {
        e.preventDefault()
        let id = this.state.id
        let address = this.state.address
        let email = this.state.email
        let ref_no = this.state.ref_no
        let business = this.state.business
        let reg_id = this.state.id

        this.props.addCompany(id, reg_id, ref_no, business, address, email)
        console.log(this.props)
        this.setState({ currentForm: "form2" })


    }


    onSubmitB = () => {
        let id = this.props.match.params.user_id.toString()
        return this.props.history.push('/Sectionc' + id)
    }

    on

    addMore() {
        this.setState({ count: this.state.count + 1 })//on click add more forms
    }
    removeClick() {
        this.setState({ count: this.state.count - 1 })
    }

    displayForm() {
        let forms = [];
        let id = this.props.match.params.user_id.toString()
        let c_id = this.getfield1(id, 'reg_id')
        for (let i = 0; i < this.state.count; i++) {
            forms.push(
                <div key={i}>
                    <Proprietor reg_id={id} c_id={c_id}></Proprietor>

                </div>
            )
        }
        return forms || null;
    }

    getfield1 = (id, field) => {
        const reserve = this.props.store.Reservation
        console.log(reserve)
        let user = reserve.find(user => user.reg_id === id)
        return user[field];
    }

    getfield2 = (id, field) => {
        const users = this.props.store.users
        let user = users.find(user => user.reg_id === id)
        return user[field];
    }
    getfield3 = (id, field) => {
        const pro = this.props.store.proprietor
        let user = pro.find(user => user.reg_id === id)
        return user[field];
    }



    render() {
        const currentForm = this.state.currentForm
        const users = this.props.store.users
        const reserve = this.props.store.Reservation
        const id = this.props.match.params.user_id.toString()
        const c_id = this.getfield1(id, 'reg_id')
        const CLOUDINARY_UPLOAD_PRESET = 'kaypappi';
        const CLOUDINARY_UPLOAD_URL = 'http://res.cloudinary.com/kaypappi/image/upload/kaypappi';
        console.log(users, reserve)
        const getfield = (id, field) => {
            let user = users.find(user => user.id === id)
            return user[field];
        }

        return (
            <div className='container grey lighten-3' >
                <div className='row'>
                    <div className='col s6'>
                        <h4>Registration Form</h4>
                    </div>
                    <div className='col s6'>
                        <img src={Img4} alt="" className='responsive-img'></img>
                    </div>
                </div>
                <div className='container'>
                    <div className='card' style={{ display: `${currentForm === 'form1' ? 'block' : 'none'}` }}>
                        <h4 className='card-header'>Section A:Company Details</h4>
                        <div className='card-content'>
                            <form onSubmit={this.onSubmitA}>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Company Name:</h6></div>
                                    <div className='col s12 m8'><input onChange={(e) => this.handleChange('cname', e.target.value)} id='cname' defaultValue={this.state.cname} type='text'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Ref No:</h6></div>
                                    <div className='col s12 m8'><input onChange={(e) => this.handleChange('ref_no', e.target.value)} id='ref_no' type='number' defaultValue={this.state.ref_no}></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Nature Of Business:</h6></div>
                                    <div className='col s12 m8 input-field'>

                                        <select onChange={(e) => this.handleChange('business', e.target.value)} ref="dropdown" defaultValue="1">
                                            <option value="" disabled>Choose your option</option>
                                            <option value="Education">Education</option>
                                            <option value="Farming">Farming</option>
                                            <option value="Importation">Importation</option>
                                            <option value="Haulage">Haulage</option>
                                            <option value="Hospitality">Hospitality</option>
                                            <option value="Pharmaceuticals">Pharmaceuticals</option>
                                            <option value="Real Estate">Real Estate</option>
                                            <option value="Transportation">Transportation</option>
                                        </select>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Address:</h6></div>
                                    <div className='col s12 m8'><input onChange={(e) => this.handleChange('address', e.target.value)} id='address' defaultValue={this.state.address} type='text'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Email:</h6></div>
                                    <div className='col s12 m8'><input onChange={(e) => this.handleChange('email', e.target.value)} id='email' defaultValue={this.state.email} type='email'></input></div>
                                </div>
                                <button className='btn btn-large green' >Next</button>
                            </form>

                        </div>
                    </div>
                </div> <br />

                <div className='container' style={{ display: `${currentForm === 'form2' ? 'block' : 'none'}` }}>
                    <h4 className='card-header ' >Section B:Proprietor Details</h4>



                    {this.displayForm()}



                </div>

                <div className='' style={{ display: `${currentForm === 'form2' ? 'block' : 'none'}` }}>
                    <br />
                    <div className='row'>
                        <div className='col s4 left'><button className='btn btn-large green' onClick={this.addMore.bind(this)}><FontAwesomeIcon icon='plus'></FontAwesomeIcon>Add Proprietor</button></div>
                        <div className='col s4 center'>
                            <button className='btn btn-large orange  darken-4' onClick={() => this.openModal('firsModalIsOpen')} >Preview</button>

                        </div>
                        <div className='col s4 right'><button className='btn btn-large red' onClick={this.removeClick.bind(this)}>Remove Proprietor</button></div>
                    </div>
                    <Modal
                        isOpen={this.state.firsModalIsOpen}
                        onRequestClose={() => this.closeModal('firsModalIsOpen')}
                        contentLabel="FIRS Form">
                        <div className='container green'>
                            <Preview id={id}></Preview>
                            <button className='btn btn-large left red' onClick={() => { this.closeModal('firsModalIsOpen')}}>Submit</button>
                            <button className='btn btn-large right orange darken-4' onClick={() => { this.closeModal('firsModalIsOpen'); this.onSubmitB() }}>Submit</button>
                        </div>

                    </Modal>


                    <br /><br />
                </div>


            </div >
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
        addCompany: (id, reg_id, ref_no, business, address, email) => { dispatch({ type: 'CREATE_COMPANY', id: id, reg_id: reg_id, ref_no: ref_no, address: address, email: email, business: business }) },
        addProp: (id, reg_id, c_id, surname, firstname, othernames, address, phone, email, Mid, id_card, photo, bvn) => {
            dispatch({
                type: 'ADDPROP',
                id: id, reg_id: reg_id, c_id: c_id, surname: surname, firstname: firstname, othernames: othernames,
                address: address, phone: phone, email: email, Mid: Mid, id_card: id_card, photo: photo, bvn: bvn
            })
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Registration)