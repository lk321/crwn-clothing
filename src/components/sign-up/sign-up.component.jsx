import React, { Component } from "react"

import FormInput from "component/form-input"
import CustomButton from "component/custom-button"

import { auth, createUserProfileDocument } from "util/firebase.utils"

import "./sign-up.styles.scss"

class SignIn extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }

        console.log('Values', this.state)
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className="sign-in">
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        label="Display name"
                        value={displayName}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={password}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn