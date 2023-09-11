import React from "react";
import { useSelector } from "react-redux";

const Trabajador = ({ valor, index, onActualizar, onEliminar }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  );
  return (
    <>
      <div className="columna">
        <div className="fotoUsuario">
          <img src={valor.picture.large} alt="" />
        </div>

        <div className="nombreUsuarios">
          <strong>
            {valor.name.last}, {valor.name.first}
          </strong>
        </div>
        <div>
          <div>{valor.location.city}</div>
          <div>({valor.location.country})</div>
        </div>
        <div>
          <select onChange={(event) => onActualizar(event.target.value, index)}>
            <option>Selecciona:</option>
            {departamentos.map((esteValor, i) =>
              valor.departamento === esteValor ? (
                <option selected key={i}>
                  {esteValor}
                </option>
              ) : (
                <option key={i}>{esteValor}</option>
              )
            )}
          </select>
        </div>
        <div>
            <button className="negro" onClick={()=>onEliminar(valor)}>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default Trabajador;
