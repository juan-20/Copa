import { StatusBar } from 'expo-status-bar'
import { Center, Text } from 'native-base'
import React from 'react'

export default function Signin() {
  return (
    <Center flex={1} bgColor='gray.900'>
    <Text color='white'>Log in</Text>
    <StatusBar style="auto" />
  </Center>
  )
}
