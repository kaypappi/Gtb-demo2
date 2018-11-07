import React, { Component } from 'react'
import Img4 from '../images/cac.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone';
import request from 'superagent';


class Proprietor extends Component {
  state = {
    uploadedIdUrl: '',
    uploadedIdFile: '',
    uploadedPhotoUrl: '',
    uploadedPhotoFile: '',
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

  render() {

    return (
      <div className='card-content'>
        <form onSubmit={this.onSubmitB}>
          <div className='row'>
            <div className='col s12 m4'><h6 className='left'>Name:</h6></div>
            <div className='col s12 m8'>
              <div className='row'>
                <div className='col s4'><input id='surname'  type='text' placeholder='Surname'></input></div>
                <div className='col s4'><input id='firstname'  type='text' placeholder='First name'></input></div>
                <div className='col s4'><input id='othernames'  type='text' placeholder='Other names'></input></div>
              </div>

            </div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><h6 className='left'>Address:</h6></div>
            <div className='col s12 m8'><input id='address'  type='text'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><h6 className='left'>Phone No:</h6></div>
            <div className='col s12 m8'><input id='phone'  type='number'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><h6 className='left'>Email:</h6></div>
            <div className='col s12 m8'><input id='email'  type='email'></input></div>
          </div>
          <div className='row'>
            <div className='col s12 m4'><h6 className='left'>Means of Identification:</h6></div>
            <div className='col s12 m8'>
              <div className='row'>
                <div className='col s3'><input id='Mid'  type='text'></input></div>
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
            <div className='col s12 m8'><input id='bvn'  type='number'></input></div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Proprietor)