import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'


const middlawares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlawares))

export default store