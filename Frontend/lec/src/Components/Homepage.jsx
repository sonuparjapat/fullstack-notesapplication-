import React from 'react'
import { Box, Button, Heading, Image } from '@chakra-ui/react'
import styles from "../Components/Homepage.module.css"
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div>
        <Box   className={styles.container}>
        <Image  width="100%" height="100vh" src="https://cdn.pixabay.com/photo/2017/10/02/21/31/cat-2810383_960_720.jpg"/>
        
        <Heading className={styles.text}>Welcome</Heading>
        <Heading className={styles.text2} fontSize="20px" fontWeight={"light"}>Start Creating Your own Data/Notes</Heading></Box>
      <Box className={styles.container2} ><Button backgroundColor={"pink.300"}><Link to="/login">Login</Link></Button><Button backgroundColor="green.300"><Link to="/register">Register</Link></Button></Box>
    </div>
  )
}
