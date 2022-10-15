import React from 'react'
import {NavLink} from "react-router-dom";
import {   Breadcrumb,
  Flex,
  HStack,
  BreadcrumbItem,
  Icon,
  Link,
  Button,
 } from '@chakra-ui/react';
import { GoMarkGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';
import {BrowserRouter as Router } from 'react-router-dom';


function Navbar() {
  return (
    <Router>
    <Breadcrumb bg='#8a663f' px={4}>
    <Flex h={16} align={'center'} justify={'space-between'}>
      <HStack spacing={8} alignItems={'right'}>
        <BreadcrumbItem>Mai's Portfolio</BreadcrumbItem>
        <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/" className='nav-link'> Home</NavLink>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/projects" className='nav-link'> Projects</NavLink>
        </HStack>
        </HStack>
        {/* <HStack className="socials" justify="flex-end" > */}
         <Link href="https://github.com/vmaineng"><Icon as={GoMarkGithub} w={8} h={8}/></Link>
         <Link href="https://www.linkedin.com/in/mai-vang-software-engineer/"><Icon as={GrLinkedin} w={8} h={8}/></Link>
        {/* </HStack> */}
        <NavLink to="/contact">
        <Button classname="vvd" ><span>Let's Connect</span></Button>
        </NavLink>
        
      </Flex>
    </Breadcrumb>
    </Router>
  )
}

export default Navbar