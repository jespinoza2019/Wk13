import React, { Component } from 'react'

import Footer from '../components/Footer'

import Form from '../components/Form'

import Navbar from '../components/Navbar'

export default class Home extends Component {
  render() {
    return (
        //Call ing my Component on my home page
      <div className='body'>
        <Navbar/>   
        <main className='container'>
        
            <h1>Week 13 Create-react-app</h1>
            <h3 className='heading'> Log In</h3>
        </main> 
        <Form/>
        <Footer/>
     </div>
    )
  }
}
