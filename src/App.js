import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import HomePage from "page/home"
import ShopPage from "page/shop"
import SignInAndUpPage from "page/sign-in-and-up"

import Header from "component/header"
import { auth, createUserProfileDocument } from "util/firebase.utils"
import { setCurrentUser } from "rdx/user/user.action";

const HatsPage = () => (
    <div>
        <h1>TOPICS PAGE</h1>
    </div>
)

const HatDetail = ({ match: { params } }) => (
    <div>
        <h1>TOPICS DETAILS PAGE {params.hatId}</h1>
    </div>
)

class App extends Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }

            setCurrentUser(user)
        })
    }

    componentWillUnmount = () => this.unsubscribeFromAuth()

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/hats" component={HatsPage} />
                    <Route path="/hats/:hatId" component={HatDetail} />
                    <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to="/" />) : <SignInAndUpPage />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
