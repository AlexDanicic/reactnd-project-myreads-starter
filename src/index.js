import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
// Add BrowseRouter
import {BrowserRouter} from 'react-router-dom'

// Wrap the App inside BrowserRouter
ReactDOM.render(
   <BrowserRouter><App /></BrowserRouter>,
   document.getElementById('root'))
