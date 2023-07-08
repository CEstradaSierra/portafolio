import {
  Stack,
  useColorMode,
  useMediaQuery,
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Image
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I'm
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400,blue.500, purple.600)"
            bgClip="text"
          >
            Camilo Estrada{" "}
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            JavaScript Full Stack Web Developer
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open("LInkedin.com/in/camilo-estrada-sierra-882bb0221/")
            }
          >
            Hire Me
          </Button>
        </Box>
        <Image alignSelf="center"
        mt={isNotSmallerScreen ? "0":"12"}
        mb={isNotSmallerScreen ? "0": "12"}
        borderRadius="full"
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="300px"
        src="https://media.licdn.com/dms/image/C4E03AQHi42V-FcayCQ/profile-displayphoto-shrink_800_800/0/1660769205811?e=1694044800&v=beta&t=RlKh2v4Y_ijKkGMyCRzH1MCckxrpD2UhayKdj-5BSnM" />
      </Flex>
    </Stack>
  );
}

export default Header;
