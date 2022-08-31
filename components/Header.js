import React from 'react'
import Link from 'next/link';
import Search from './Search';

export default function Header({setSearch}) {
  
  return (
    <div className='header'>
      <nav className='nav'>
        <div className='logo'>
          <Link href='/'>
          <img style={{height: '100px', width: '100px' }} src='/img/logo-ml.png'/>
          </Link>
        </div>
        <Search
          setSearch={setSearch}
        />
      </nav>
    </div>
  )
}
