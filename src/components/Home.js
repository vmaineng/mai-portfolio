import React from 'react'
import {
  Box,
  Textarea,
  Text,
} from "@chakra-ui/react";
 import { Image } from "cloudinary-react";


function Home() {
 

  return (
    <div>
      <Box className="intro">
      <Text>
        Hello! My name is Mai!  Front-end Software Engineer
      </Text>
      <Textarea className="rotate"> About Me: 
      I graduate from Flatiron School, a full-stack web development program in August 2022.</Textarea>
      
        <Image
        cloudName="v1660870107"
        publicId="https://res.cloudinary.com/vmaineng/image/upload/v1660870107/Travel_Agency_Plane_Animated_Logo_1920_1920_px_Website_kyxutr.png"
      />
</Box>

    </div>
  )
}

export default Home