import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

globalStyles()

import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/> 
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
