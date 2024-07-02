import React , { useState , useEffect } from 'react'

import { Card, CardHeader , ButtonGroup , Button , Image , Text , CardBody, CardFooter, Stack, Heading, Divider } from '@chakra-ui/react'
const Products = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
  
     useEffect(() => {
      fetchData()
    }, [])
  return (
    <>
       <div className='w-[100vw] flex justify-evenly space-y-2 border-2 border-red-900 flex-wrap items-center  ' >

{products.map((product) => (
  <Card key={product.id} maxW='sm'>
      <CardBody>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.title}</Heading>
          <details>
            <summary>Details</summary>
         
          <Text>{product.description}</Text>
          </details>
          <Text color='blue.600' fontSize='2xl'>
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))}
      </div>
    </>
  )
}

export default Products