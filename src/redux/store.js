import { createStore } from 'redux'
import app from './app'

const store = createStore(app)
console.log('Getstate: ', store.getState())

export default store
