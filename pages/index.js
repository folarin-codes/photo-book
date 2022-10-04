import Head from 'next/head'
import styles from '../styles/Home.module.css'


import { theme } from '../theme'
import { ThemeProvider } from '@mui/material'

import { Navigation } from '../components/Navigation'
import Header from '../sections/Header'
import MainSection from '../sections/MainSection'
import Articles from '../sections/Articles'



export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        
        <Navigation />
        <Header />
        <MainSection />
        <Articles/>


      
      </div>
      </ThemeProvider>
  )
}
