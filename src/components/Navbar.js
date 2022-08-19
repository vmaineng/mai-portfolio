import React from 'react'
import {Link} from "react-router-dom";
import { Box, Flex, HStack} from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg='#8a663f' px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <HStack spacing={8} alignItems={'right'}>
        <Box>Mai's Portfolio</Box>
        <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <Link to="/"> Home</Link>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <Link to="/projects"> Projects</Link>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <Link to="/profile"> Profile</Link>
        </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar