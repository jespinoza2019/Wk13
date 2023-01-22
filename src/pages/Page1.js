import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default class Home extends Component {
  render() {
    return (
        //Call ing my Component on my home page
      <div>
        <Navbar/>   
        <main className='container'>
          <h1> The links does NOT works   </h1>
            <h3 className='heading'> Log In</h3>
        </main> 
        <Footer/>
     </div>
    )
  }
}
