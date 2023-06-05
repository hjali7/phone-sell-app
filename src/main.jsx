import React from 'react'
import {createRoot} from "react-dom/client"
import { store } from './store.jsx'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

const app = document.getElementById('root')
const root = createRoot(app)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
