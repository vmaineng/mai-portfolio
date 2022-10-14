import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
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
      .sendForm(
        "gmail",
        "template_rd8odvc",
        e.target,
        "0lDHd1ZLy0iOCA9pS"
      )
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

  return (
    <div>
      {/* <form action="" onSubmit={sendEmail}>
        <Flex
          bg={useColorModeValue("gray.100", "gray.900")}
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
                    md: "5xl",
                  }}
                >
                  Get in Touch
                </Heading>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
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
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Send Message
                    </Button>
                    {result ? <Result /> : null}
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </form> */}

      <form action="" onSubmit={sendEmail}>
        <h2> Ask us a question</h2>
        <span> Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span> Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Enter Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
      <br /> 
      <span> Message</span>
      <br />
      <textarea name="message" required></textarea>
      <br />
    <Button> Submit</Button>
{result ? <Result /> : null }

      </form>
    </div>
  );
}

export default ContactForm;
