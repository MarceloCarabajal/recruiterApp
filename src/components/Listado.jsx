import React, { useEffect, useState } from 'react'
import Candidato from './Candidato';

const Listado = () => {
  const [candidato, setCandidato] = useState([])
  
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

  const guardarUno = (valor) => {

  }

  return (
    <>
    <div className="presentacion">
      {
        candidato.map( (valor, index) => {
          return(
            <Candidato valor={valor} index={index} onBuscarUno={buscarUno} onGuardarUno={guardarUno}/>
          )
        })
      }
    </div>
    </>
  )
}

export default Listado