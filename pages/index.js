import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/index.module.scss'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
    )
  }
}

export default Home
