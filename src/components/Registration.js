import React, { Component } from 'react'
import Img4 from '../images/cac.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone';
import request from 'superagent';

class Registration extends Component {
    state = {
        currentForm: 'form1',
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

        Proprietor: [
            {
                surname: null,
                firstname: null,
                othernames: null, address: null, phone: null, email: null, Mid: null,
                bvn: null, idcard: null, photo: null
            }
        ]


    }

    componentDidMount() {
        console.log('ftcvygvbyg')
        let id = this.props.match.params.user_id.toString()
        let cname = this.getfield1(id, 'cname')
        let address = this.getfield1(id, 'address')
        let email = this.getfield1(id, 'email')

        this.setState({
            cname: cname,
            address: address,
            email: email,
            id: id
        })

        console.log(this.state, id, cname)
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
    onSubmitB = (e) => {
        e.preventDefault()
        console.log(this.props.store)
        let id = this.props.store.proprietors.length + 1
        let reg_id = this.state.id
        let c_id = this.state.cname
        let surname = document.getElementById('surname').value
        let firstname = document.getElementById('firstname').value
        let othernames = document.getElementById('othernames').value
        let address = document.getElementById('address').value
        let phone = document.getElementById('phone').value
        let email = document.getElementById('email').value
        let Mid = document.getElementById('Mid').value
        let id_card = this.state.uploadedIdUrl
        let photo = this.state.uploadedPhotoUrl
        let bvn = document.getElementById('bvn').value

        console.log(id, reg_id, c_id, surname, firstname, othernames, address, phone, email, Mid, id_card, photo, bvn)

        this.props.addProp(id.toString(), reg_id, c_id, surname, firstname, othernames, address, phone, email, Mid, id_card, photo, bvn)

        return this.props.history.push('/Sectionc' + id)




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
                                    <div className='col s12 m8'><input onChange={(e) => this.handleChange('ref_no', e.target.value)} id='ref_no' type='text'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Nature Of Business:</h6></div>
                                    <div className='col s12 m8'><input onChange={(e) => this.handleChange('business', e.target.value)} id='business' type='text'></input></div>
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

                <div className='container'>
                    <div className='card' style={{ display: `${currentForm === 'form2' ? 'block' : 'none'}` }}>
                        <h4 className='card-header'>Section B:Proprietor Details</h4>
                        <div className='card-content'>
                            <form onSubmit={this.onSubmitB}>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Name:</h6></div>
                                    <div className='col s12 m8'>
                                        <div className='row'>
                                            <div className='col s4'><input id='surname' onChange={(e) => this.handleChange2('surname', e.target.value)} type='text' placeholder='Surname'></input></div>
                                            <div className='col s4'><input id='firstname' onChange={(e) => this.handleChange2('firstname', e.target.value)} type='text' placeholder='First name'></input></div>
                                            <div className='col s4'><input id='othernames' onChange={(e) => this.handleChange2('othernames', e.target.value)} type='text' placeholder='Other names'></input></div>
                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Address:</h6></div>
                                    <div className='col s12 m8'><input id='address' onChange={(e) => this.handleChange2('address', e.target.value)} type='text'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Phone No:</h6></div>
                                    <div className='col s12 m8'><input id='phone' onChange={(e) => this.handleChange2('phone', e.target.value)} type='number'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Email:</h6></div>
                                    <div className='col s12 m8'><input id='email' onChange={(e) => this.handleChange2('email', e.target.value)} type='email'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Means of Identification:</h6></div>
                                    <div className='col s12 m8'>
                                        <div className='row'>
                                            <div className='col s3'><input id='Mid' onChange={(e) => this.handleChange2('Mid', e.target.value)} type='text'></input></div>
                                            <div className='col s9'>
                                                <Dropzone
                                                    multiple={false}
                                                    accept="image/*"
                                                    onDrop={this.onImageDropId}>

                                                    <div>
                                                        {this.state.uploadedIdUrl === '' ? <p className='center orange-text text-darken-4'>Drop an image or click to select a file to upload.</p> :
                                                            <div>
                                                                <p>{this.state.uploadedIdFile.name}</p>
                                                                <img className='responsive-img' src={this.state.uploadedIdUrl} />
                                                            </div>}
                                                    </div>
                                                </Dropzone>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><h6 className='left'>Signature<br />(Input Your BVN):</h6></div>
                                    <div className='col s12 m8'><input id='bvn' onChange={(e) => this.handleChange2('bvn', e.target.value)} type='number'></input></div>
                                </div>
                                <div className='row'>
                                    <div className='col s12 m4'><img className='responsive-img' src={Img4} alt="" /></div>
                                    <div className='col s12 m8'>
                                        <Dropzone
                                            multiple={false}
                                            accept="image/*"
                                            onDrop={this.onImageDropPhoto}>

                                            <div>
                                                {this.state.uploadedPhototUrl === '' ? <p className='center orange-text text-darken-4'>Drop an image or click to select a file to upload.</p> :
                                                    <div>
                                                        <p>{this.state.uploadedPhotoFile.name}</p>
                                                        <img className='responsive-img' src={this.state.uploadedPhotoUrl} />
                                                    </div>}
                                            </div>
                                        </Dropzone>
                                    </div>
                                </div>
                                <div className='left'>
                                    <a className='btn btn-large orange  darken-4' href="/">Preview</a>

                                </div>
                                <div className='right'>
                                    <button className='btn btn-large green'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='' style={{ display: `${currentForm === 'form2' ? 'block' : 'none'}` }}>
                    <br />
                    <div className='left'><button className='btn btn-large green'><FontAwesomeIcon icon='plus'></FontAwesomeIcon>Add Proprietor/Director</button></div>
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