import React, { Component } from "react"

import FormInput from "component/form-input"
import CustomButton from "component/custom-button"

import "./sign-in.styles.scss"

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault()

        console.log('Values', this.state)
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="Email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required />

                    <CustomButton type="submit">Submit form</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn