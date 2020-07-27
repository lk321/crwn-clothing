import React from "react"

import SignIn from "component/sign-in"
import SignUp from "component/sign-up"

import "./sign-in-and-up.styles.scss"

const SignInAndUpPage = () => (
    <div className="sign-in-and-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndUpPage