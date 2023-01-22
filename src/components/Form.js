import React, { Component } from 'react'

export default class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    handlernameChange = (event) => {
        this.setState({
            userName: event.target.value,
            password: event.target.value
        })

    }
  render() {
    return (
        
        <form>
            <div className='form center bg-grey p-3'>
                <div className='mb-4 text-center center width=75% p-3' >
                    
                    <label> UserName</label>
                    <imput type="text" 
                    className="form-control center width=75% p-3"
                    value={this.state.userName} 
                    onChange = {this.handlernameChange }/>
                </div>
                <div className='mb-4 text-center center width=75% p-3' >
                    <label> Password</label>
                    <imput type="text" 
                    className="form-control center width=75% p-3"
                    value={this.state.password} 
                    onChange = {this.handlernameChange }/>
                </div>
            </div>
 
            
        </form>
        

    )
  }
}
