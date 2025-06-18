import { ChakraProvider, Box } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Hackathons from './components/Hackathons'
import ProjectsCarousel from './components/ProjectsCarousel'
import About from './components/About'  
import Footer from './components/Footer'
import { AnimatedBackground } from './components/AnimatedBackground'
import ContactButton from './components/ContactButton'
import { theme } from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
   <Box minH="100vh" minW="100vw" color="white" position="relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Hackathons />
      <ProjectsCarousel />
      <About />
      <Footer />
      <ContactButton />
    </Box>
    </ChakraProvider>
  )
}

export default App
