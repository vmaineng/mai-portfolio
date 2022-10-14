import React from 'react'
import {NavLink} from "react-router-dom";
import {   Breadcrumb,
  Flex,
  HStack,
  BreadcrumbItem,
  Icon,
  Link,
  Button
 } from '@chakra-ui/react';
import { GoMarkGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';

function Navbar() {
  return (
    <Breadcrumb bg='#8a663f' px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <HStack spacing={8} alignItems={'right'}>
        <BreadcrumbItem>Mai's Portfolio</BreadcrumbItem>
        <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/" className='nav-link'> Home</NavLink>
        </HStack>
          <HStack as={'nav'} spacing={4} display={{ base: 'flex', md: 'flex' }}>
        <NavLink to="/projects" className='nav-link'> Projects</NavLink>
        </HStack>
        </HStack>
        <HStack className="socials" alignItems={'right'}>
         <Link href="https://github.com/vmaineng"><Icon as={GoMarkGithub} w={8} h={8}/></Link>
         <Link href="https://www.linkedin.com/in/mai-vang-software-engineer/"><Icon as={GrLinkedin} w={8} h={8}/></Link>
        </HStack>
        <NavLink to="/contact">
        <Button classname="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></Button>
        </NavLink>
      </Flex>
    </Breadcrumb>
  )
}

export default Navbar