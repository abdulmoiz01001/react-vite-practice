import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className='bg-gray-800 text-white text-center p-4'>
            <h1 className='text-2xl font-semibold'>Fake Store</h1>
            <nav className='mt-4'>
                <ul className='flex justify-center space-x-4'>
                    <li> <Link to={'/home'} >
                Home
                    
                    </Link></li>
                    <li>
                        <Link to={'/products'} >
                    Products
                    
                    </Link>
                    </li>
                </ul>
            </nav>
        </header>


    </>
  )
}

export default Header