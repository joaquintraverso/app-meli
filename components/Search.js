import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';

export default function Search( {setSearch} ) {

  const router = useRouter();
  
  const [inputValue, setInputValue] = useState('');

  const handleChange= (e) =>{
    setInputValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1){
      setSearch(inputValue);
      setInputValue('');
    }
  }
  
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        value={inputValue}
        type="search"
        placeholder="Busca un producto"
        className="search-input"
        onChange={handleChange}
      />
      <Button variant="outline-success" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch}/>
      </Button>
    </Form>
  )
}