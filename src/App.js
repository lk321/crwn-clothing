import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "page/home"
import ShopPage from "page/shop"
import SignInAndUpPage from "page/sign-in-and-up"

import Header from "component/header"

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

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/hats" component={HatsPage} />
                <Route path="/hats/:hatId" component={HatDetail} />
                <Route exact path="/signIn" component={SignInAndUpPage} />
            </Switch>
        </div>
    )
}

export default App
