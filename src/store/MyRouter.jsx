
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listado from '../components/Listado'
import Gestion from '../components/Gestion'

const MyRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Listado />} />
            <Route path="/candidatos" element={ <Listado />} />
            <Route path="/gestion" element={ <Gestion />} />
            <Route path="*" element={ <Listado />} />
        </Routes>
    </Router>
  )
}

export default MyRouter