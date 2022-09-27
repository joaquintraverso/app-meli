import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';

export default function Search() {

  const router = useRouter();
  
  const [inputValue, setInputValue] = useState('');

  const handleChange= (e) =>{
    setInputValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1){
      router.push({
        pathname: '/search/[input]',
        query: { input: inputValue },
      })
      setInputValue('');
    }
  }
  
  return (
    <Form className="d-flex" onSubmit={handleSubmit} style={{width:'70%', padding:'10px'}}>
      <Form.Control
        value={inputValue}
        type="search"
        placeholder="Busca un producto"
        className="me-2"
        onChange={handleChange}
      />
      <Button variant="secondary" onClick={handleSubmit}>Buscar</Button>
    </Form>
  )
}