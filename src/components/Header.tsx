import { Flex, Box, Link, Button, Spacer, Container, Heading, HStack } from '@chakra-ui/react'
import { MessageCircle } from 'lucide-react'

const Header = () => {
  const handleWhatsAppClick = () => {
    // IMPORTANTE: Substitua pelo seu número real do WhatsApp (formato: 5511999999999)
    const phoneNumber = '5511999999999'
    const message = 'Olá Julia! Vi seu portfólio e gostaria de conversar sobre oportunidades de colaboração! ✨'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
  <Box
  position="fixed"
  top={0}
  w="100%"
  bg="rgba(15, 15, 35, 0.95)"
  backdropFilter="blur(15px)"
  borderBottom="1px solid rgba(255,105,180,0.2)"
  zIndex={1000}
  py={4}
>
  <Container maxW="1200px">
    <Flex justify="space-between" align="center">
      <Heading 
        size="md" 
        color="white" 
        fontWeight="bold"
        bgGradient="linear(to-r, #FF69B4, #9370DB, #4169E1)"
        bgClip="text"
      >
        Julia Castro ✨
      </Heading>
      <HStack spacing={6}>
        <Link 
          href="#sobre" 
          color="gray.300" 
          _hover={{ 
            color: "#FF69B4",
            transform: "translateY(-2px)"
          }} 
          transition="all 0.3s"
        >
          Sobre
        </Link>
        <Link 
          href="#projetos" 
          color="gray.300" 
          _hover={{ 
            color: "#9370DB",
            transform: "translateY(-2px)"
          }} 
          transition="all 0.3s"
        >
          Projetos
        </Link>
        <Link 
          href="#hackathons" 
          color="gray.300" 
          _hover={{ 
            color: "#4169E1",
            transform: "translateY(-2px)"
          }} 
          transition="all 0.3s"
        >
          Hackathons
        </Link>
        <Button
          size="sm"
          bg="linear-gradient(45deg, #25D366, #128C7E)"
          color="white"
          _hover={{ 
            transform: "translateY(-2px) scale(1.05)", 
            boxShadow: "0 10px 25px rgba(37,211,102,0.4)",
            bg: "linear-gradient(45deg, #128C7E, #25D366)"
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          leftIcon={<MessageCircle size={16} />}
          borderRadius="full"
          onClick={handleWhatsAppClick}
        >
          Contato
        </Button>
      </HStack>
    </Flex>
  </Container>
</Box>
)
}

export default Header 