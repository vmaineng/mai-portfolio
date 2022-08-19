import React from "react";
import { Image } from "cloudinary-react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  IconButton,
  Checkbox,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Project({ project }) {

  return (
    
    <>
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        bg={'white'}
      >
      Projects
      <Stack>
            <Text
              color={'blue.300'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {project.name} 
              </Text>
              </Stack>
      <Image
        style={{ width: 200 }}
        cloudName="v1660780825"
        publicId="https://res.cloudinary.com/vmaineng/image/upload/v1660780825/tiny_m9ymqr.png"
      />
       <Stack direction={'column'} fontSize={'sm'}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        Description
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
      {project.description}
      </AccordionPanel>
      </AccordionItem>
              </Accordion>
            </Stack>
      {project.created}
      {project.deployed}
   
          
      </Box>
      </Center>
    </>
  );
}

export default Project;
