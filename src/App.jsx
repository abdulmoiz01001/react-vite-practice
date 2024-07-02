import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardHeader , ButtonGroup , Button , Image , Text , CardBody, CardFooter, Stack, Heading, Divider } from '@chakra-ui/react'
import Header from './Header'
import Products from './Products'

import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
function App() {


  return (

    <>
    <Header />

  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    {/* <Products /> */}


 
    </>
  )
}

export default App
