import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider ,theme } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
    <App />
     </ChakraProvider>
  
)
export const server='https://api.coingecko.com/api/v3'
