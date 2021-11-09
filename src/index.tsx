import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './components/App'
import reportWebVitals from './reportWebVitals'

const layouts = ['XL', '2XL', '4L', 'XL/2L', 'XL/L/2SM']

ReactDOM.render(
  <React.StrictMode>
    <App layouts={layouts} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
