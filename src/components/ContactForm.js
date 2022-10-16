import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Result = () => {
  return (
    <p> Your message has been successfully sent. I will contact you soon</p>
  );
};

function ContactForm() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_rd8odvc", e.target, "0lDHd1ZLy0iOCA9pS")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {showResult(false);}, 5000);

  return (
    <div>
      <form action="" onSubmit={sendEmail}>
        <Flex
          // bg={useColorModeValue("gray.100", "gray.900")}
          align="center"
          justify="center"
          id="contact"
        >
          <Box
            borderRadius="lg"
            m={{ base: 5, md: 16, lg: 10 }}
            p={{ base: 5, lg: 16 }}
          >
            <Box>
              <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                <Heading
                  fontSize={{
                    base: "4xl",
                    md: "1rem",
                  }}
                >
                  Get in touch with me! 
                </Heading>

                <Box
                  bg={useColorModeValue("orange.50", "yellow.600")}
                  borderRadius="lg"
                  p={20}
                  color={useColorModeValue("yellow.600", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired onSubmit={sendEmail}>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="fullName"
                          placeholder="Your Name"
                          required
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={10}
                        resize="none"
                        required
                      />
                    </FormControl>
                    <button id="submit"> Send message</button>
                    {result ? <Result /> : null}
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </form>
    </div>
  );
}

export default ContactForm;