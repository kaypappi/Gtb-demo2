import React, { Component } from 'react'

class MainOption extends Component {

  render() {
    const { title } = this.props
    return (
      <div className='col s12 m6'>
        <div className='card orange darken-4'>
          <div className='card-content'><h4 className='center white-text'>{title}</h4></div>
        </div>
      </div>
    )
  }
}

export default MainOption