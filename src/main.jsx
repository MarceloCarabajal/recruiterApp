import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyRouter from './router/MyRouter.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"

import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRouter>
        <App />
      </MyRouter>
    </Provider>
  </React.StrictMode>,
)
