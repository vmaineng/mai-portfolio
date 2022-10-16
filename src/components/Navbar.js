import React from 'react'
import {NavLink} from "react-router-dom";
import { Box, Flex, Button, Icon, Link, HStack} from '@chakra-ui/react';
import { GoMarkGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';

function Navbar() {
  return (
    <Box bg='#8a663f' px={4}>
    <Flex h={16} align={'center'} justifyContent={'space-between'}>
      <HStack spacing={8} alignItems={'right'}>
        <Box>Mai's Portfolio</Box>
        <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/"> Home</NavLink>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/projects"> Projects</NavLink>
        </HStack>
         <HStack className="socials" justify="flex-end" >
         <Link href="https://github.com/vmaineng"><Icon as={GoMarkGithub} w={8} h={8}/></Link>
         <Link href="https://www.linkedin.com/in/mai-vang-software-engineer/"><Icon as={GrLinkedin} w={8} h={8}/></Link>
        </HStack>
        </HStack>
        <NavLink to="/contact">
        <Button classname="vvd" ><span>Let's Connect</span></Button>
        </NavLink>
      </Flex>
    </Box>
  )
}

export default Navbar