import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const persons = []

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
