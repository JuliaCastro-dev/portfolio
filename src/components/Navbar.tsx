import { Box, Flex, Link, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Julia Castro
        </Link>

        <Flex alignItems="center" gap={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            About
          </Link>
          <Link as={RouterLink} to="/projects" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Projects
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 