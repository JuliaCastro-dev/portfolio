import { Box, Text, Link, Flex, Container, HStack, Icon, VStack } from '@chakra-ui/react'
import { Github, Mail, Linkedin, Instagram, Heart, Sparkles } from 'lucide-react'

const Footer = () => (
  <Box
  bg="rgba(15, 15, 35, 0.95)"
  backdropFilter="blur(15px)"
  borderTop="1px solid rgba(255,105,180,0.2)"
  py={12}
  w="100%"
  position="relative"
  _before={{
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #FF69B4, #9370DB, #4169E1, #20B2AA, #32CD32, #FFD700, #FF6347)',
  }}
>
  <Container maxW="1200px">
    <VStack spacing={6}>
      <HStack spacing={8}>
        <Link
          href="https://github.com/juliacastro"
          isExternal
          color="gray.400"
          _hover={{ 
            color: "#FF69B4",
            transform: "translateY(-3px) scale(1.1)"
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Icon as={Github} w={7} h={7} />
        </Link>
        <Link
          href="https://linkedin.com/in/juliacastro"
          isExternal
          color="gray.400"
          _hover={{ 
            color: "#9370DB",
            transform: "translateY(-3px) scale(1.1)"
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Icon as={Linkedin} w={7} h={7} />
        </Link>
        <Link
          href="https://instagram.com/juliacastro"
          isExternal
          color="gray.400"
          _hover={{ 
            color: "#4169E1",
            transform: "translateY(-3px) scale(1.1)"
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Icon as={Instagram} w={7} h={7} />
        </Link>
        <Link
          href="mailto:julia@email.com"
          color="gray.400"
          _hover={{ 
            color: "#20B2AA",
            transform: "translateY(-3px) scale(1.1)"
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Icon as={Mail} w={7} h={7} />
        </Link>
      </HStack>
      
      <Text color="gray.500" fontSize="sm" textAlign="center" display="flex" alignItems="center">
        <Sparkles size={16} style={{ marginRight: '8px', color: '#FFD700' }} />
        © 2024 Julia Castro. Feito com 
        <Heart size={16} style={{ margin: '0 4px', color: '#FF69B4' }} />
        e muito código artístico ✨
        <Sparkles size={16} style={{ marginLeft: '8px', color: '#FFD700' }} />
      </Text>
      
      <Text color="gray.600" fontSize="xs" textAlign="center">
        Celebrando diversidade, criatividade e inovação
      </Text>
    </VStack>
  </Container>
</Box>
)

export default Footer 