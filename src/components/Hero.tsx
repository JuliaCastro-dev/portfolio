import { Box, Heading, Text, Button, Stack, Avatar, Badge, Container, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { Github, ExternalLink, Trophy, Code, User, Mail, Palette, Heart, Sparkles } from 'lucide-react'
import { keyframes } from '@emotion/react'

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`

const rainbowRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const Hero = () => (
<Box minH="100vh" display="flex" alignItems="center" pt={20} position="relative" overflow="hidden">
    {/* Rainbow accent elements */}
    <Box
      position="absolute"
      top="10%"
      left="5%"
      w="100px"
      h="100px"
      borderRadius="full"
      bg="linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)"
      opacity="0.1"
      animation={`${rainbowRotate} 20s linear infinite`}
    />
    <Box
      position="absolute"
      bottom="20%"
      right="10%"
      w="80px"
      h="80px"
      borderRadius="full"
      bg="linear-gradient(45deg, #9400D3, #4B0082, #0000FF, #00FF00, #FFFF00, #FF7F00, #FF0000)"
      opacity="0.08"
      animation={`${rainbowRotate} 15s linear infinite reverse`}
    />
    
    <Container maxW="1200px">
      <VStack spacing={8} textAlign="center">
        <Box position="relative">
          <Avatar
            size="2xl"
            src="/api/placeholder/150/150"
            border="4px solid"
            borderColor="transparent"
            background="linear-gradient(45deg, #FF69B4, #9370DB, #4169E1, #20B2AA, #32CD32, #FFD700, #FF6347)"
            backgroundClip="padding-box"
            boxShadow="0 0 40px rgba(255,105,180,0.4)"
            animation={`${float} 3s ease-in-out infinite`}
          />
          <Box
            position="absolute"
            top="-15px"
            right="-15px"
            w="50px"
            h="50px"
            bg="linear-gradient(45deg, #FF69B4, #9370DB, #4169E1)"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation={`${pulse} 2s ease-in-out infinite`}
            boxShadow="0 0 20px rgba(255,105,180,0.6)"
          >
            <Sparkles size={24} color="white" />
          </Box>
        </Box>
        
        <VStack spacing={4}>
          <Heading
            as="h1"
            size="3xl"
            bgGradient="linear(to-r, #FF69B4, #9370DB, #4169E1, #20B2AA, #32CD32, #FFD700, #FF6347)"
            bgClip="text"
            fontWeight="bold"
            letterSpacing="tight"
          >
            Olá, eu sou a Julia ✨
          </Heading>
          <Text fontSize="xl" color="gray.300" maxW="700px" lineHeight="1.6">
            <Heart size={20} style={{ display: 'inline', marginRight: '8px', color: '#FF69B4' }} />
            Desenvolvedora Fullstack apaixonada por criar experiências únicas e impactantes
            <br />
            <Palette size={20} style={{ display: 'inline', marginRight: '8px', marginLeft: '8px', color: '#9370DB' }} />
            Artista digital que transforma ideias em código e código em arte
          </Text>
        </VStack>

        <HStack spacing={6} flexWrap="wrap" justify="center">
          <Button
            size="lg"
            bg="linear-gradient(45deg, #FF69B4, #9370DB)"
            color="white"
            _hover={{ 
              transform: "translateY(-3px) scale(1.05)", 
              boxShadow: "0 20px 40px rgba(255,105,180,0.4)",
              bg: "linear-gradient(45deg, #9370DB, #4169E1)"
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            leftIcon={<Code size={20} />}
            borderRadius="full"
            px={8}
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="transparent"
            bg="linear-gradient(45deg, #4169E1, #20B2AA)"
            color="white"
            _hover={{ 
              transform: "translateY(-3px) scale(1.05)",
              boxShadow: "0 20px 40px rgba(65,105,225,0.4)"
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            leftIcon={<User size={20} />}
            borderRadius="full"
            px={8}
          >
            Sobre mim
          </Button>
        </HStack>

        {/* Tech Stack with artistic colors */}
        <Box mt={12}>
          <Text fontSize="sm" color="gray.400" mb={4} display="flex" alignItems="center" justifyContent="center">
            <Sparkles size={16} style={{ marginRight: '8px', color: '#FFD700' }} />
            Tecnologias que uso para criar magia
            <Sparkles size={16} style={{ marginLeft: '8px', color: '#FFD700' }} />
          </Text>
          <Wrap justify="center" spacing={4}>
            {[
              { name: 'Python', color: '#32CD32' },
              { name: 'Java', color: '#FF6347' },
              { name: 'C#', color: '#9370DB' },
              { name: 'TypeScript', color: '#4169E1' },
              { name: 'React', color: '#20B2AA' },
              { name: '.NET', color: '#FF69B4' },
              { name: 'Node.js', color: '#32CD32' },
              { name: 'SQL', color: '#FFD700' }
            ].map((tech) => (
              <WrapItem key={tech.name}>
                <Badge
                  px={4}
                  py={2}
                  bg={`linear-gradient(45deg, ${tech.color}20, ${tech.color}40)`}
                  color={tech.color}
                  borderRadius="full"
                  border={`2px solid ${tech.color}40`}
                  _hover={{ 
                    bg: `${tech.color}30`,
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: `0 10px 20px ${tech.color}30`
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  cursor="pointer"
                  fontWeight="semibold"
                >
                  {tech.name}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </VStack>
    </Container>
  </Box>
)

export default Hero 