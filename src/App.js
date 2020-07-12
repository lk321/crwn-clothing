import React from "react"
import { Switch, Route } from "react-router-dom"

import HomePage from "page/home"

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
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hats" component={HatsPage} />
            <Route path="/hats/:hatId" component={HatDetail} />
        </Switch>
    )
}

export default App
