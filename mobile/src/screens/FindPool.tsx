import { Heading, VStack, Text } from 'native-base'
import React from 'react'
import { Header } from '../components/Header'
import LogoImg from '../assets/logo.svg';
import { Input } from '../components/Input';
import Button from '../components/Button';

export default function FindPool() {
  return (
    <VStack flex={1} bgColor= 'gray.900'>
      <Header title='Burcar por código' showBackButton />

      <VStack mt={8} mx={5} alignItems='center'>
        <Heading fontFamily='heading' color='white' fontSize='xl' mb={8}  textAlign='center'>
          Encontrar um bolão através de seu codigo único
        </Heading>

        <Input
        mb={2}
        placeholder='Qual seu código de bolão?'
        />

        <Button 
        type='PRIMARY'
        title='BUSCAR BOLÂO'
        />
      </VStack>
    </VStack>
  )
}
