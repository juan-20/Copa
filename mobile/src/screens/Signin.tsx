import { StatusBar } from 'expo-status-bar'
import { Center, Text, Icon } from 'native-base'
import { Fontisto } from '@expo/vector-icons'
import React from 'react'

import LogoImg from '../assets/logo.svg';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export default function Signin() {
  const { signIn, user } = useAuth()
  return (
    <Center flex={1} bgColor='gray.900' p={7}>
      <LogoImg width={212} height={40}/>

      <Button 
      type='SECONDARY'
      title='ENTRAR COM GOOGLE'
      leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
      mt={12}
      onPress={signIn}
      />
      <Text color='white' textAlign='center' mt={4}>
      Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
      </Text>
    <StatusBar style="auto" />
  </Center>
  )
}
