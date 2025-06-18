import { Box, Heading, Text, Image, Link, Button, Flex, useBreakpointValue, Code, Container, HStack, Icon, VStack } from '@chakra-ui/react'
import { Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(0)
  const showArrows = useBreakpointValue({ base: false, md: true })

  const projects = [
    {
      title: 'SafeHaven',
      description: 'Um aplicativo móvel para conectar pessoas em situação de vulnerabilidade com abrigos e oportunidades de ajuda. O SafeHaven facilita a localização de abrigos disponíveis, doações e trabalho voluntário.',
      features: ['Localização de abrigos', 'Sistema de doações', 'Trabalho voluntário', 'Interface móvel intuitiva'],
      github: 'https://github.com/JuliaCastro-dev/SafeHaven',
      image: '/safehaven.png'
    },
    {
      title: 'GreenHub',
      description: 'Uma plataforma interativa para os colaboradores, a fim de incentivá-los a aprimorar e acelerar sua jornada de descarbonização.',
      features: ['Dashboard interativo', 'Tracking de emissões', 'Gamificação sustentável', 'Relatórios de impacto'],
      github: 'https://github.com/JuliaCastro-dev/GreenHub',
      image: '/greenhub.jpeg'
    }
  ]

  const getVisibleProjects = () => {
    const extendedProjects = [...projects, ...projects, ...projects] // Triplica para loop suave
    const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 3
    const startIndex = index + projects.length // Começa do meio da lista estendida
    return extendedProjects.slice(startIndex, startIndex + cardsPerView)
  }

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1))

  const visibleProjects = getVisibleProjects()
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 3
  
  return (
    <Box id="projetos" py={20} w="100%">
      <Container maxW="1400px">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <HStack>
              <Icon as={Code} color="cyan.400" w={8} h={8} />
              <Heading
                size="xl"
                bgGradient="linear(to-r, cyan.400, purple.400)"
                bgClip="text"
              >
                Principais Projetos
              </Heading>
            </HStack>
            <Text color="gray.400" maxW="600px">
              Soluções desenvolvidas com foco em impacto e inovação
            </Text>
          </VStack>

          <Flex align="center" justify="center" gap={6} w="100%">
            {showArrows && (
              <Button
                onClick={prev}
                variant="ghost"
                color="cyan.400"
                _hover={{ bg: "rgba(0,212,255,0.1)" }}
                size="lg"
                minW="50px"
              >
                &lt;
              </Button>
            )}

            <Flex gap={6} w="100%" justify="center" overflow="hidden">
              {visibleProjects.map((project, i) => (
                <Box
                  key={`${project.title}-${i}`}
                  flex="1"
                  maxW={{ base: "100%", md: "400px", lg: "350px" }}
                  bg="rgba(255,255,255,0.05)"
                  backdropFilter="blur(10px)"
                  borderRadius="xl"
                  border="1px solid rgba(255,255,255,0.1)"
                  overflow="hidden"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(0,212,255,0.3)"
                  }}
                  transition="all 0.4s"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="100%"
                    h="180px"
                    objectFit="cover"
                  />
                  
                  <VStack p={6} spacing={4} align="start">
                    <Heading size="md" color="white" noOfLines={2}>
                      {project.title}
                    </Heading>
                    
                    <Text color="gray.300" fontSize="sm" noOfLines={3}>
                      {project.description}
                    </Text>
                    
                    <VStack align="start" spacing={1} w="100%">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <HStack key={featureIndex}>
                          <Box w="4px" h="4px" bg="cyan.400" borderRadius="full" />
                          <Text fontSize="xs" color="gray.400" noOfLines={1}>
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                    
                    <Button
                      as={Link}
                      href={project.github}
                      isExternal
                      bg="linear-gradient(45deg, #00d4ff, #9f40ff)"
                      color="white"
                      size="sm"
                      w="100%"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(0,212,255,0.3)"
                      }}
                      transition="all 0.3s"
                      leftIcon={<Github size={14} />}
                      rightIcon={<ExternalLink size={14} />}
                    >
                      Ver no GitHub
                    </Button>
                  </VStack>
                </Box>
              ))}
            </Flex>

            {showArrows && (
              <Button
                onClick={next}
                variant="ghost"
                color="cyan.400"
                _hover={{ bg: "rgba(0,212,255,0.1)" }}
                size="lg"
                minW="50px"
              >
                &gt;
              </Button>
            )}
          </Flex>

          {/* Indicadores do carousel */}
          <HStack spacing={2}>
            {projects.map((_, i) => (
              <Box
                key={i}
                w="8px"
                h="8px"
                borderRadius="full"
                bg={i === index ? "cyan.400" : "gray.600"}
                cursor="pointer"
                transition="all 0.2s"
                onClick={() => setIndex(i)}
                _hover={{ transform: "scale(1.2)" }}
              />
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default ProjectsCarousel