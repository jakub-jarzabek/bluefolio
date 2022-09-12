import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// import './global.css'
import { Amplify, Auth } from 'aws-amplify'
// @ts-ignore
import awsExports from './aws-exports'

Amplify.configure(awsExports)
Auth.configure(awsExports)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
