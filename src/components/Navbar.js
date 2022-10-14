import React from 'react'
import {NavLink} from "react-router-dom";
import { Box, Flex, HStack} from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg='#8a663f' px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <HStack spacing={8} alignItems={'right'}>
        <Box>Mai's Portfolio</Box>
        <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/" className='nav-link'> Home</NavLink>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/projects" className='nav-link'> Projects</NavLink>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/profile" className='nav-link'> Profile</NavLink>
        </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar