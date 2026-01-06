import { Box, Heading, Text, Button, Badge, Container, HStack, VStack, Wrap, WrapItem, useBreakpointValue } from '@chakra-ui/react'
import { Code, User, Palette, Heart, Sparkles } from 'lucide-react'
import { keyframes } from '@emotion/react'

/* const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`

const rainbowRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
` */

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Box minH="90vh" display="flex" alignItems="center" pt={{ base: 16, md: 20 }} position="relative" overflow="hidden">
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
          <VStack spacing={{ base: 3, md: 4 }}>
            <Box position="relative" display={'flex'} alignItems={'end'} >
              <Box
                as="img"
                src="src/assets/profilebg.png"
                borderColor="transparent"
                backgroundClip="padding-box"
                animation={`${float} 3s ease-in-out infinite`}
                objectFit="contain"
                w={{ base: "100px", md: "180px" }}
                h={{ base: "150px", md: "200px" }}
              />
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl" }}
                bg="#4169E1"
                bgClip="text"
                fontWeight="bold"
                letterSpacing="tight"
                px={{ base: 2, md: 0 }}
                marginBottom={'10'}
              >
                Olá, eu sou a Julia
              </Heading>
             
            </Box>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="700px"
              lineHeight="1.6"
              px={{ base: 2, md: 0 }}
            >
              <Heart size={isMobile ? 10 : 20} style={{ display: 'inline', marginRight: '8px', color: '#FF69B4' }} />
              Engenheira de software 
              <br />
              <Palette size={isMobile ? 10 : 20} style={{ display: 'inline', marginRight: '8px', marginLeft: '8px', color: '#9370DB' }} />
              Transformo ideias em código
            </Text>
          </VStack>

          <VStack spacing={{ base: 4, md: 6 }} w="full">
            <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap" justify="center" w="full" px={{ base: 5, md: 0 }}>
              <Button
                size={{ base: "md", md: "lg" }}
                bg="linear-gradient(45deg, #FF69B4, #9370DB)"
                color="white"
                _hover={{
                  transform: "translateY(-3px) scale(1.05)",
                  boxShadow: "0 20px 40px rgba(255,105,180,0.4)",
                  bg: "linear-gradient(45deg, #9370DB, #4169E1)"
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                leftIcon={<Code size={isMobile ? 16 : 20} />}
                borderRadius="full"
                px={{ base: 2, md: 8 }}
                w={{ base: "full", sm: "auto" }}
                onClick={() => scrollToSection('projetos')}
              >
                Ver Projetos
              </Button>
              <Button
                size={{ base: "md", md: "lg" }}
                variant="outline"
                borderColor="transparent"
                bg="linear-gradient(45deg, #4169E1, #20B2AA)"
                color="white"
                _hover={{
                  transform: "translateY(-3px) scale(1.05)",
                  boxShadow: "0 20px 40px rgba(65,105,225,0.4)"
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                leftIcon={<User size={isMobile ? 16 : 20} />}
                borderRadius="full"
                px={{ base: 2, md: 8 }}
                w={{ base: "full", sm: "auto" }}
                onClick={() => scrollToSection('sobre')}
              >
                Sobre mim
              </Button>
            </HStack>
          </VStack>

          {/* Tech Stack with artistic colors */}
          <Box mt={{ base: 8, md: 10 }} w="full">
            <Text
              fontSize={{ base: "xl", md: "sm" }}
              color="gray.400"
              mb={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              gap={2}
            >
              <Sparkles size={isMobile ? 16 : 16} style={{ color: '#FFD700' }} />
              Tecnologias que eu uso 
              <Sparkles size={isMobile ? 16 : 16} style={{ color: '#FFD700' }} />
            </Text>
            <Wrap justify="center" spacing={{ base: 2, md: 4 }} px={{ base: 2, md: 0 }}>
              {[
                { name: 'Docker', color: '#32CD32' },
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
                    px={{ base: 3, md: 4 }}
                    py={{ base: 1, md: 2 }}
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
                    fontSize={{ base: "xs", md: "sm" }}
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
}

export default Hero 