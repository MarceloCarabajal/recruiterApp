import React from 'react'

const Candidato = ({valor, index, onBuscarUno, onGuardarUno}) => {
  return (
    <>
        <div className='usuario' key={index}>
            <div className='foto'>
                <img src={valor.picture.large} alt="" />
            </div>
            <div className='datos'>
                <div className='nombre'>{valor.name.title}. {valor.name.first} {valor.name.last}</div>
                <div>Ubicacion: {valor.location.city} ({valor.location.country})</div>
                <div><a href='#'>{valor.email}</a></div>
                <div><a href='#'>{valor.phone}</a></div>
            </div>
            <div className='botones'>
                <button onClick={() => onBuscarUno(index)} className='negro'>Ocultar</button>
                <button onClick={() => onGuardarUno(valor)}  className='violeta'>Guardar</button>            </div>
            
        </div>
    </>
  )
}

export default Candidato