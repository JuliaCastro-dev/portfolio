import { Box, Heading, Text, Container, Divider, HStack, Icon, VStack, SimpleGrid } from '@chakra-ui/react'
import { Heart, TargetIcon, Code, Award, Notebook } from 'lucide-react'

const About = () => (
  <Box id="sobre" py={20} position="relative" overflow="hidden">
    {/* Subtle rainbow background elements */}
    <Box
      position="absolute"
      top="10%"
      right="5%"
      w="200px"
      h="200px"
      borderRadius="full"
      bg="linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)"
      opacity="0.03"
      filter="blur(40px)"
    />
    <Box
      position="absolute"
      bottom="20%"
      left="10%"
      w="150px"
      h="150px"
      borderRadius="full"
      bg="linear-gradient(45deg, #9400D3, #4B0082, #0000FF, #00FF00, #FFFF00, #FF7F00, #FF0000)"
      opacity="0.04"
      filter="blur(30px)"
    />
    
    <Container maxW="1200px">
      <VStack spacing={12}>
        <VStack spacing={4} textAlign="center">
          <HStack>
        {/*     <Icon as={Sparkles} color="#FF69B4" w={8} h={8} /> */}
            <Heading
              size="xl"
              bg="#20B2AA"
              bgClip="text"
              fontWeight="bold"
            >
              Sobre mim
            </Heading>
           {/*  <Icon as={Sparkles} color="#4169E1" w={8} h={8} /> */}
          </HStack>
        </VStack>

        <Box
          bg="rgba(255,255,255,0.05)"
          backdropFilter="blur(15px)"
          borderRadius="2xl"
          border="1px solid rgba(255,105,180,0.2)"
          p={8}
          maxW="5xl"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #FF69B4, #9370DB, #4169E1, #20B2AA, #32CD32, #FFD700, #FF6347)',
            borderRadius: '2xl 2xl 0 0'
          }}
        >
          <VStack spacing={8}>
            <Text color="gray.300" fontSize="xl" lineHeight="tall" textAlign="center" fontWeight="medium">
              <Notebook size={20} style={{ display: 'inline', marginRight: '8px', color: '#FF69B4' }} />
              Engenharia de Software (FIAP, 2022-2026) <br /> Técnico em Desenvolvimento de Sistemas (ETEC, 2020-2021)
            </Text>
            
            <Divider borderColor="rgba(255,105,180,0.3)" />
            
            <Text color="gray.300" textAlign="center" maxW="4xl" fontSize="lg" lineHeight="tall">
              <Code size={20} style={{ display: 'inline', marginRight: '8px', color: '#9370DB' }} />
              Engenheira de software com mais de 4 anos de experiência, buscando especialização em arquitetura de software e desenvolvimento backend.
              <br /><br />
              <Code size={20} style={{ display: 'inline', marginRight: '8px', color: '#4169E1' }} />
              Minha jornada na tecnologia é movida pela paixão 
              por criar mudanças positivas na sociedade através da inovação.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full" mt={8}>
              <VStack spacing={3} p={6} bg="rgba(255,105,180,0.1)" borderRadius="xl" border="1px solid rgba(255,105,180,0.2)">
                <Icon as={Heart} color="#FF69B4" w={8} h={8} />
                <Text color="gray.300" fontSize="sm" textAlign="center" fontWeight="medium">
                  Apaixonada por impacto social e diversidade
                </Text>
              </VStack>
              
              <VStack spacing={3} p={6} bg="rgba(65,105,225,0.1)" borderRadius="xl" border="1px solid rgba(65,105,225,0.2)">
                <Icon as={Award} color="#4169E1" w={8} h={8} />
                <Text color="gray.300" fontSize="sm" textAlign="center" fontWeight="medium">
                  Vencedora de hackathons e desafios criativos
                </Text>
              </VStack>

                <VStack spacing={3} p={6} bg="#32cd3224" borderRadius="xl" border="1px solid rgba(65,105,225,0.2)">
                <Icon as={TargetIcon} color="#32CD32" w={8} h={8} />
                <Text color="gray.300" fontSize="sm" textAlign="center" fontWeight="medium">
                  Movida por desafios 
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Box>
      </VStack>
    </Container>
  </Box>
)

export default About 