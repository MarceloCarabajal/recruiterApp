import React, { useEffect, useState } from 'react'
import Candidato from './Candidato';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { agregarUnValor } from '../store/miSlice.js'


const Listado = () => {
  const [candidato, setCandidato] = useState([])
  const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
    .then((response) => response.json())
    .then((data) => setCandidato(data.results))
  }, []);

  const buscarUno = (indice) => {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then((data) => {
      const provisional = [...candidato]
      provisional[indice] = {...data.results[0]}
      setCandidato(provisional)
    })
  }

  const guardarUno = (valor, index) => {
    const nuevoValor={...valor, departamento:""}
    dispatch(agregarUnValor(nuevoValor))
    buscarUno(index)
  }

  return (
    <>
    <h1>Candidatos: </h1>
    <Link to="/gestion"><button>Trabajadores</button></Link>
    <div className="presentacion">
      {
        candidato.map( (valor, index) => 
          <Candidato valor={valor} index={index} onBuscarUno={buscarUno} onGuardarUno={guardarUno}/>   
        )
      }
    </div>
    <hr/>
    <div className='candidatos'>
        {
          listaTrabajadores.map((valor, i) => (
            <Link key={i} to="/gestion"><button>{valor.name.first}</button></Link>
          ))
        }
    </div>
    </>
  )
}

export default Listado