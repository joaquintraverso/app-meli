import React from 'react'
import Search from './Search';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  
  return (
    <div className='header'>
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand href="/" style={{padding:'10px'}}>MercadoLibre</Navbar.Brand>
        <Search/>
      </Navbar>
    </div>
  )
}
