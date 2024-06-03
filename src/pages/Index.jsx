import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="absolute" top={4} right={4}>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </Box>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTc0NTIzMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | Tech Enthusiast | Lifelong Learner
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </Link>
        </HStack>
        <Button colorScheme="teal" size="lg">
          Contact Me
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
