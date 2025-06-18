import { 
    Box
  } from '@chakra-ui/react'
  import { keyframes } from '@emotion/react'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`

const gradient = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`

const rainbowFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  25% { transform: translateY(-15px) rotate(90deg) scale(1.1); }
  50% { transform: translateY(-30px) rotate(180deg) scale(0.9); }
  75% { transform: translateY(-15px) rotate(270deg) scale(1.05); }
`

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`

export const AnimatedBackground = () => (
    
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={-1}
      bg="linear-gradient(-45deg, #0f0f23, #1a1a2e, #16213e, #0f3460, #533483, #2d1b69)"
      backgroundSize="400% 400%"
      animation={`${gradient} 20s ease infinite`}
    >
      {/* Rainbow gradient orbs */}
      <Box
        position="absolute"
        top="15%"
        left="15%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(255,105,180,0.08) 0%, rgba(147,112,219,0.06) 30%, rgba(65,105,225,0.04) 60%, transparent 80%)"
        borderRadius="full"
        animation={`${rainbowFloat} 25s ease-in-out infinite`}
        filter="blur(20px)"
      />
      
      <Box
        position="absolute"
        top="50%"
        right="20%"
        w="300px"
        h="300px"
        bg="radial-gradient(circle, rgba(147,112,219,0.08) 0%, rgba(65,105,225,0.06) 30%, rgba(32,178,170,0.04) 60%, transparent 80%)"
        borderRadius="full"
        animation={`${rainbowFloat} 30s ease-in-out infinite reverse`}
        filter="blur(15px)"
      />
      
      <Box
        position="absolute"
        bottom="25%"
        left="25%"
        w="250px"
        h="250px"
        bg="radial-gradient(circle, rgba(65,105,225,0.08) 0%, rgba(32,178,170,0.06) 30%, rgba(50,205,50,0.04) 60%, transparent 80%)"
        borderRadius="full"
        animation={`${rainbowFloat} 35s ease-in-out infinite`}
        filter="blur(25px)"
      />

      {/* Sparkle elements */}
      <Box
        position="absolute"
        top="30%"
        right="10%"
        w="20px"
        h="20px"
        bg="linear-gradient(45deg, #FFD700, #FFA500)"
        borderRadius="full"
        animation={`${sparkle} 4s ease-in-out infinite`}
        boxShadow="0 0 20px rgba(255,215,0,0.6)"
      />
      
      <Box
        position="absolute"
        top="70%"
        left="10%"
        w="15px"
        h="15px"
        bg="linear-gradient(45deg, #FF69B4, #9370DB)"
        borderRadius="full"
        animation={`${sparkle} 6s ease-in-out infinite 1s`}
        boxShadow="0 0 15px rgba(255,105,180,0.6)"
      />
      
      <Box
        position="absolute"
        top="20%"
        left="60%"
        w="25px"
        h="25px"
        bg="linear-gradient(45deg, #20B2AA, #4169E1)"
        borderRadius="full"
        animation={`${sparkle} 5s ease-in-out infinite 2s`}
        boxShadow="0 0 25px rgba(32,178,170,0.6)"
      />

      {/* Subtle rainbow accent lines */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="2px"
        bg="linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)"
        opacity="0.1"
        animation={`${gradient} 10s ease infinite`}
      />
      
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="2px"
        bg="linear-gradient(90deg, #9400D3, #4B0082, #0000FF, #00FF00, #FFFF00, #FF7F00, #FF0000)"
        opacity="0.1"
        animation={`${gradient} 12s ease infinite reverse`}
      />
    </Box>
  )