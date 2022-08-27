import React from 'react'
import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function () {
  const [busqueda, setBusqueda]= useState("");

  const handleChange=e=>{
    setBusqueda(e.target.value);
    console.log(e.target.value);
    //filtrar(e.target.value);
  }

  //const handleSubmit = (e) => {
  //  e.preventDefault();
//
  //  //Validar
//
  //  if (inputValue.trim().length > 2){
  //      setBusqueda(inputValue);
  //      setInputValue('');
  //      //this.props.history.Push('/');
  //  }
//}
//onSubmit={handleSubmit}

  

  return (
    <div>
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Buscar productos.."
          onChange={handleChange}
        />
        <button className="btn btn-dark">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
    </div>
  )
}
