import React, { Component } from 'react'

import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-center'>
            <div className='footer-logo'>
                <img src={require('../../static/Nav/LOGO.png')} alt='resource-lost'/>
            </div>
            <div className='footer-logo-contact'>
                <span>加入我们：puggoo1145@gmail.com</span>
            </div>
        </div>
      </div>
    )
  }
}
