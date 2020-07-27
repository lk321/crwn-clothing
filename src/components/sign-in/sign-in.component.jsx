import React, { Component } from "react"

import FormInput from "component/form-input"
import CustomButton from "component/custom-button"

import { auth, signInWithGoogle } from "util/firebase.utils"

import "./sign-in.styles.scss"

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error)
        }
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
                    <div className="buttons">
                        <CustomButton type="submit">Submit form</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn