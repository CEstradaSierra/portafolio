import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Flex, Box, Heading, Text,Icon } from "@chakra-ui/react";
import {DiAndroid,DiWebplatform} from "react-icons/di"

const Profile = () => {
  const[isNotSmallerScreen]=useMediaQuery("(min-width: 600px)")
  return (
      <Flex direction={isNotSmallerScreen ? "row": "column"}>

      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          7+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          {" "}
          Projects
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl"> React Developer</Text>
        <Flex direction={isNotSmallerScreen ? "row": "column"} mt={8}>
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg:"green.400"}}>
            <Icon color="white"p="4" fontSize="xl" as={DiWebplatform} w="24" h="24"></Icon> 
            <Text color="white"p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg:"green.400"}}>
            <Icon color="white"p="4" fontSize="xl" as={DiAndroid} w="24" h="24"></Icon> 
            <Text color="white"p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
        </Flex>
          
        </Flex>
      </Box>
      </Flex>
 
  );
};

export default Profile;
