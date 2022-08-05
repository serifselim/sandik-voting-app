import { Button, Center, Container, Image, Input, Text, Link } from "@chakra-ui/react"
import { React, useState } from "react"
import { register } from "../../firebase"
import logo from '../../assets/logo.png';

export default function Register() {

  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault() 
    const user = await register(email, password)
    console.log(user)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Center h='800px'>
        <Container maxW='300px' color='black'>
          <Center>
            <Image boxSize='170px' src={logo}></Image>
          </Center>
          <Input border='2px' borderColor='brand.grayBlack' type='text' value={userName} placeholder='Kullanıcı Adı' mt={4} mb={4} onChange={e => setUserName(e.target.value)} />
          <Input border='2px' borderColor='brand.grayBlack' type='text' value={email} placeholder='E-Mail' onChange={e => setEmail(e.target.value)} />
          <Input border='2px' borderColor='brand.grayBlack' type='password' value={password} mt={4} mb={4} placeholder='Şifre' onChange={e => setPassword(e.target.value)} />
          <Input border='2px' borderColor='brand.grayBlack' type='password' value={againPassword} mb={4} placeholder='Şifre Tekrarı' onChange={e => setAgainPassword(e.target.value)} />
          <Center>
            <Button type="submit" disabled={!email || !password || !userName || !againPassword} colorScheme='red' size='md'>
              Kayıt Ol
            </Button>
          </Center>
          <Text fontSize='sm' mt={4} color=''>
            Hesabın zaten var mı ? O zaman <Link color="red" href='/login'>Giriş Yap</Link>
          </Text>
        </Container>
      </Center>
    </form>
  )
  }