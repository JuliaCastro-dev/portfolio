import { 
  Flex, 
  Box, 
  Link, 
  Button, 
  Container, 
  Heading, 
  HStack, 
  VStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue
} from '@chakra-ui/react'
import { MessageCircle, Menu } from 'lucide-react'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const handleWhatsAppClick = () => {
    // IMPORTANTE: Substitua pelo seu número real do WhatsApp (formato: 5511999999999)
    const phoneNumber = '5511999999999'
    const message = 'Olá Julia! Vi seu portfólio e gostaria de conversar sobre oportunidades de colaboração! ✨'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId)
    if (isMobile) {
      onClose()
    }
  }

  const NavLinks = () => (
    <>
      <Link 
        href="#sobre" 
        color="gray.300" 
        transition="all 0.3s"
        onClick={(e) => {
          e.preventDefault()
          handleLinkClick('sobre')
        }}
        fontSize={{ base: "lg", md: "md" }}
        py={{ base: 3, md: 0 }}
        px={{ base: 4, md: 0 }}
        borderRadius={{ base: "md", md: "none" }}
        _hover={{ 
          bg: { base: "rgba(255,105,180,0.1)", md: "transparent" },
          color: "#FF69B4",
          transform: { base: "none", md: "translateY(-2px)" }
        }}
      >
        Sobre
      </Link>
      <Link 
        href="#projetos" 
        color="gray.300" 
        transition="all 0.3s"
        onClick={(e) => {
          e.preventDefault()
          handleLinkClick('projetos')
        }}
        fontSize={{ base: "lg", md: "md" }}
        py={{ base: 3, md: 0 }}
        px={{ base: 4, md: 0 }}
        borderRadius={{ base: "md", md: "none" }}
        _hover={{ 
          bg: { base: "rgba(147,112,219,0.1)", md: "transparent" },
          color: "#9370DB",
          transform: { base: "none", md: "translateY(-2px)" }
        }}
      >
        Projetos
      </Link>
      <Link 
        href="#hackathons" 
        color="gray.300" 
        transition="all 0.3s"
        onClick={(e) => {
          e.preventDefault()
          handleLinkClick('hackathons')
        }}
        fontSize={{ base: "lg", md: "md" }}
        py={{ base: 3, md: 0 }}
        px={{ base: 4, md: 0 }}
        borderRadius={{ base: "md", md: "none" }}
        _hover={{ 
          bg: { base: "rgba(65,105,225,0.1)", md: "transparent" },
          color: "#4169E1",
          transform: { base: "none", md: "translateY(-2px)" }
        }}
      >
        Hackathons
      </Link>
      <Button
        size={{ base: "md", md: "sm" }}
        bg="linear-gradient(45deg, #25D366, #128C7E)"
        color="white"
        _hover={{ 
          transform: { base: "scale(1.05)", md: "translateY(-2px) scale(1.05)" }, 
          boxShadow: "0 10px 25px rgba(37,211,102,0.4)",
          bg: "linear-gradient(45deg, #128C7E, #25D366)"
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        leftIcon={<MessageCircle size={isMobile ? 20 : 16} />}
        borderRadius="full"
        onClick={() => {
          handleWhatsAppClick()
          if (isMobile) {
            onClose()
          }
        }}
        w={{ base: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
      >
        Contato
      </Button>
    </>
  )

  return (
    <>
      <Box
        position="fixed"
        top={0}
        w="100%"
        bg="rgba(15, 15, 35, 0.95)"
        backdropFilter="blur(15px)"
        borderBottom="1px solid rgba(255,105,180,0.2)"
        zIndex={1000}
        py={{ base: 3, md: 4 }}
      >
        <Container maxW="1200px">
          <Flex justify="space-between" align="center">
            <Heading 
              size={{ base: "sm", md: "md" }}
              color="white" 
              fontWeight="bold"
              bgGradient="linear(to-r, #FF69B4, #9370DB, #4169E1)"
              bgClip="text"
            >
              Julia Castro ✨
            </Heading>
            
            {/* Desktop Navigation */}
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <NavLinks />
            </HStack>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              icon={<Menu size={24} />}
              variant="ghost"
              color="white"
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
              aria-label="Abrir menu"
            />
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="rgba(15, 15, 35, 0.98)" backdropFilter="blur(20px)">
          <DrawerCloseButton color="white" size="lg" />
          <DrawerHeader 
            borderBottom="1px solid rgba(255,105,180,0.2)"
            bg="rgba(15, 15, 35, 0.95)"
          >
            <Heading 
              size="md"
              color="white" 
              fontWeight="bold"
              bgGradient="linear(to-r, #FF69B4, #9370DB, #4169E1)"
              bgClip="text"
            >
              Julia Castro ✨
            </Heading>
          </DrawerHeader>
          <DrawerBody pt={8}>
            <VStack spacing={4} align="stretch">
              <NavLinks />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header 