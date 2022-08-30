import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search( {setProduct} ) {
  
  const [search, setSearch]= useState("");

  const handleChange= (e) =>{
    setSearch(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim().length > 2){
      setProduct(search);
      setSearch('');
    }
  }
  
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Busca un producto"
        className="search-input"
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Button variant="outline-success" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch}/>
      </Button>
    </Form>
  )
}