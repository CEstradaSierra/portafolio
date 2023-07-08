import { Flex, VStack, Heading } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";
  const onSocial = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <VStack>
        <Flex w="100%" mt={5}>
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            camilo ES
          </Heading>
          <Spacer></Spacer>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={8}
            icon={<FaGithub />}
            isRound="true"
            onClick={() =>
              onSocial("LInkedin.com/in/camilo-estrada-sierra-882bb0221/")
            }
          ></IconButton>
          <IconButton
            ml={8}
            icon={<FaLinkedin />}
            isRound="true"
            onClick={() =>
              onSocial("LInkedin.com/in/camilo-estrada-sierra-882bb0221/")
            }
          ></IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile/>
      </VStack>
    </>
  );
}

export default App;
