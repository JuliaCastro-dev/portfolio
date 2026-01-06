import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
      brand: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      artistic: {
        pink: '#FF69B4',
        purple: '#9370DB',
        blue: '#4169E1',
        teal: '#20B2AA',
        green: '#32CD32',
        yellow: '#FFD700',
        orange: '#FF6347',
        red: '#DC143C',
      },
      rainbow: {
        1: '#FF0000', // Red
        2: '#FF7F00', // Orange
        3: '#FFFF00', // Yellow
        4: '#00FF00', // Green
        5: '#0000FF', // Blue
        6: '#4B0082', // Indigo
        7: '#9400D3', // Violet
      }
    },
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: {
        body: {
          bg: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #1a1a2e 100%)',
          backgroundAttachment: 'fixed',
        }
      }
    }
  })