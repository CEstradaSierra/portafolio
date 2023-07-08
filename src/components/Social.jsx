import React from 'react'
 import { HStack, Icon } from '@chakra-ui/react'
 import { FaFacebook,FaGoogle,FaSpotify,FaShopify } from 'react-icons/fa'
 
const Social = () => {
  return (
    <HStack spacing="24">
        <Icon as={FaFacebook} boxSize="10"/>
        <Icon as={FaGoogle} boxSize="10"/>
        <Icon as={FaSpotify} boxSize="10"/>
        <Icon as={FaShopify} boxSize="10"/>
    </HStack>
  )
}

export default Social