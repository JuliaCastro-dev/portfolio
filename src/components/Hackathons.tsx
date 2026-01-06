import { Box, Heading, Text, Badge, Image, Container, HStack, Icon, SimpleGrid, VStack } from '@chakra-ui/react'
import { Trophy } from 'lucide-react'

const hackathons = [
  {
    title: '1º Lugar - NEXT FIAP 2025: Desafio B3',
    org: 'Promovido pela FIAP em parceria com a Rede Âncora',
    desc: 'Pela terceira vez no 1º lugar 🏆 do hackathon NEXT, apresentamos uma solução de impacto social para a B3. BetInvest, uma plataforma que traz toda a dopamina dos jogos de apostas e a segurança do investimento.',
    year: '2025',
    position: '1º Lugar',
    image: 'src/assets/h3.jpg'
  },
  {
    title: '1º Lugar - NEXT FIAP 2024: Desafio Rede Âncora',
    org: 'Promovido pela FIAP em parceria com a Rede Âncora',
    desc: 'Pela segunda vez no 1º lugar 🏆 do hackathon NEXT, apresentamos uma solução para gestão de eventos online: The Gather! criada para gerar impacto e facilitar conexões.',
    year: '2024',
    position: '1º Lugar',
    image: '/h1.jpeg'
  },
  {
    title: '1º Lugar - NEXT FIAP 2023: Desafio Schneider Electric',
    org: 'Promovido pela FIAP em parceria com a Schneider Electric',
    desc: 'No Hackathon promovido pela FIAP, conquistamos o 1º lugar entre mais de 50 equipes, desenvolvendo soluções inovadoras para o setor elétrico.',
    year: '2023',
    position: '1º Lugar',
    image: '/h2.jpeg'
  }
]

const Hackathons = () => (
  <Box id="hackathons" py={15}>
    <Container maxW="1200px">
      <VStack spacing={12}>
        <VStack spacing={4} textAlign="center">
          <HStack>
            <Icon as={Trophy} color="yellow.400" w={8} h={8} />
            <Heading
              size="xl"
              bgGradient="linear(to-r, yellow.400, orange.400)"
              bgClip="text"
            >
              Hackathons
            </Heading>
          </HStack>
          <Text color="gray.400" maxW="600px">
            Conquistas em competições de desenvolvimento e inovação
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%" alignItems={'end'}>
          {hackathons.map((hackathon, index) => (
            <Box
              key={index}
              bg="rgba(255,255,255,0.05)"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              border="1px solid rgba(255,255,255,0.1)"
              p={6}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                border: "1px solid rgba(0,212,255,0.3)"
              }}
              transition="all 0.4s"
              position="relative"
              overflow="hidden"
            >
              {/* Gradient overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="2px"
                bg="linear-gradient(90deg, #00d4ff, #9f40ff, #ff6b6b)"
              />
              
              <VStack align="start" spacing={4}>
                {/* Imagem do hackathon */}
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  borderRadius="lg"
                  border="1px solid rgba(255,255,255,0.1)"
                />
                
                <HStack justify="space-between" w="100%">
                  <Badge
                    bg="linear-gradient(45deg, #ffd700, #ffb347)"
                    color="gray.900"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontWeight="bold"
                  >
                    🏆 {hackathon.position}
                  </Badge>
                  <Text fontSize="sm" color="gray.400">{hackathon.year}</Text>
                </HStack>
                
                <Heading size="md" color="white" lineHeight="short">
                  {hackathon.title}
                </Heading>
                
                <Text fontSize="sm" color="cyan.300" fontWeight="medium">
                  {hackathon.org}
                </Text>
                
                <Text color="gray.300" lineHeight="tall">
                  {hackathon.desc}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
)

export default Hackathons