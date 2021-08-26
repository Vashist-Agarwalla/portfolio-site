import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/HomePage/Home/Home'
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <div className='bg-main'>
      <Home />
    </div>
  )
}

export default HomePage;
