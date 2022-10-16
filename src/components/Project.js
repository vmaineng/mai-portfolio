import React from "react";
import { Image } from "cloudinary-react";
import {
  Box,
  Center,
  Text,
  Stack,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Project({ project }) {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"500px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          bg={"#CBD5E0"}
        >
          <Stack>
            <Text
              color={"orange.900"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"3xl"}
              letterSpacing={1.1}
            >
               {project.name}
            </Text>
          </Stack>
          <Stack>
            <Text
              color={"orange.900"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Created with: {project.created}
            </Text>
          </Stack>
          <Image cloudName="v1660780825" publicId="{project.image}"/>
          {/* <Image
            style={{ width: 200 }}
            cloudName="v1660780825"
            publicId="https://res.cloudinary.com/vmaineng/image/upload/v1660780825/tiny_m9ymqr.png"
          /> */}
          <Stack direction={"column"} fontSize={"sm"}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      <Text
                        color={"orange.900"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"2xl"}
                        letterSpacing={1.1}
                      >
                        {" "}
                        Description
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    color={"orange.900"}
                    textTransform={"uppercase"}
                    fontWeight={400}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {project.description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>

          <Text
            color={"orange.900"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Project deployed: {project.deployed} 
            </Text>
            <Text 
            color={"blue"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}>
          <Link href={project.link}> Click here to see website</Link>
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default Project;
