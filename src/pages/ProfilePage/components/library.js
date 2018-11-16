import React, { Component } from 'react'
import Modal from 'react-modal'
import Img1 from '../../../images/CAC.jpg'
import Img2 from '../../../images/Form2.png'

class Library extends Component {
  state = {
    content: 'normal',
    firsModalIsOpen: false,
    form2ModalIsOpen: false
  }

  handleClick1 = () => {
    this.setState({
      content: 'list1'
    })
  }

  handleClick2 = () => {
    this.setState({
      content: 'list2'
    })
  }
  handleClick3 = () => {
    this.setState({
      content: 'normal'
    })
  }

  openModal = (modalContext) => {
    this.setState({ [modalContext]: true });
  }

  closeModal = (modalContext) => {
    this.setState({ [modalContext]: false });
  }



  render() {
    const content = this.state.content
    return (
      <div className='col s12 m6'>
        <div className='card orange darken-4'>
          <div className='card-content'>
            <h4 className='center white-text' onClick={this.handleClick1} style={{ display: `${content === 'normal' ? 'block' : 'none'}` }}>Library</h4>
            <div className='' style={{ display: `${content === 'list1' ? 'block' : 'none'}` }}>
              <ul class="collection">
                <li class="collection-item">AOP</li>
                <li onClick={this.handleClick2} class="collection-item">CAC</li>
                <li class="collection-item">ID card history</li>
              </ul>
            </div>
            <div className='' style={{ display: `${content === 'list2' ? 'block' : 'none'}` }}>
              <ul class="collection">
                <li onClick={() => this.openModal('firsModalIsOpen')} class="collection-item">Certificate Of Registration</li>
                <li onClick={() => this.openModal('form2ModalIsOpen')} class="collection-item">Form CAC2</li>
              </ul>
            </div>
            <Modal
              isOpen={this.state.firsModalIsOpen}
              onRequestClose={() => this.closeModal('firsModalIsOpen')}
              contentLabel="FIRS Form">
              <div className='container'>
                <button className='btn btn-small red right' onClick={() => { this.closeModal('firsModalIsOpen'); this.handleClick3() }}>Close</button>
                <img className='responsive-img' src={Img1}></img>
              </div>

            </Modal>
            <Modal
              isOpen={this.state.form2ModalIsOpen}
              onRequestClose={() => this.closeModal('form2ModalIsOpen')}
              contentLabel="FIRS Form">
              <div className='container'>
                <button className='btn btn-small red right' onClick={() => { this.closeModal('form2ModalIsOpen'); this.handleClick3() }}>Close</button>
                <img className='responsive-img' src={Img2}></img>
              </div>

            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default Library