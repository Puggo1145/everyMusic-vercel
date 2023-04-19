import React, { Component } from 'react'

import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Footer from './components/Footer/Footer'

import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Main/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
      </div>
    )
  }
}
