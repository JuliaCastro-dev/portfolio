import { Button, Box, Text, HStack } from '@chakra-ui/react'
import { MessageCircle } from 'lucide-react'
import { keyframes } from '@emotion/react'

const rainbowGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.5); }
  14% { box-shadow: 0 0 20px rgba(255, 127, 0, 0.5); }
  28% { box-shadow: 0 0 20px rgba(255, 255, 0, 0.5); }
  42% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.5); }
  57% { box-shadow: 0 0 20px rgba(0, 0, 255, 0.5); }
  71% { box-shadow: 0 0 20px rgba(75, 0, 130, 0.5); }
  85% { box-shadow: 0 0 20px rgba(148, 0, 211, 0.5); }
  100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.5); }
`

const ContactButton = () => {
  const handleWhatsAppClick = () => {
    // IMPORTANTE: Substitua pelo seu número real do WhatsApp (formato: 5511999999999)
    const phoneNumber = '5511999999999' 
    const message = 'Olá Julia! Vi seu portfólio e gostaria de conversar sobre oportunidades de colaboração! ✨'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Box position="fixed" bottom={6} right={6} zIndex={1000}>
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        bg="linear-gradient(45deg, #25D366, #128C7E)"
        color="white"
        borderRadius="full"
        px={6}
        py={4}
        _hover={{
          transform: "translateY(-3px) scale(1.05)",
          animation: `${rainbowGlow} 3s ease-in-out infinite`,
        }}
        _active={{
          transform: "translateY(-1px) scale(1.02)",
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        boxShadow="0 10px 30px rgba(37, 211, 102, 0.3)"
        leftIcon={<MessageCircle size={24} />}
      >
        <HStack spacing={2}>
          <Text fontWeight="bold">Vamos conversar?</Text>
        </HStack>
      </Button>
    </Box>
  )
}

export default ContactButton 