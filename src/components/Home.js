import React, { useState, useEffect } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Image } from "cloudinary-react";
//import { GrTicket } from 'react-icons/gr';

function Home() {
  //set up for typing out "Developer"
  const [loop, setLoop] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState("");
  const bio = ["Software Engineer", "Front End Developer", "Web Developer"];
  const [typing, setTyping] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let writeCode = setInterval(() => {
      tick();
    }, typing);
    return () => {
      clearInterval(writeCode);
    };
  }, [message]);

  const tick = () => {
    let i = loop % bio.length;
    let word = bio[i];
    let updatedWord = deleting
      ? word.substring(0, message.length - 1)
      : word.substring(0, message.length + 1);

    setMessage(updatedWord);

    if (deleting) {
      setTyping((prevType) => prevType / 2);
    }

    if (!deleting && updatedWord === word) {
      setDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setTyping(period);
    } else if (deleting && updatedWord === "") {
      setDeleting(false);
      setLoop(loop + 1);
      setIndex(1);
      setTyping(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <Box mx="3">
        <Box
          as="section"
          m={100}
          maxW="1000px"
          ml="80px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          textAlign="center"
        >
          <Flex direction={["column", "column", "row"]}>
            <Box bg="#F7FAFC">
              <Image
                cloudName="v1660870107"
                publicId="https://res.cloudinary.com/vmaineng/image/upload/v1665846816/me_wkw40d.png"
              />
            </Box>
            <Box>
              <Text fontSize={32}>
                Hello! My name is Mai! Front-end Software Engineer
              </Text>
              <Text fontSize={25}>
                {message}
                About Me: I graduate from Flatiron School, a full-stack web
                development program in August 2022.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
