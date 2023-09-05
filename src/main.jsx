import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyRouter from './store/MyRouter.jsx'


import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter>
      <App />
    </MyRouter>
  </React.StrictMode>,
)
