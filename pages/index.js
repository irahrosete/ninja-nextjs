import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi quae, aspernatur rerum possimus odit laudantium ut error vero magni, hic omnis consectetur eveniet blanditiis. Molestias corporis nostrum nulla quaerat?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi quae, aspernatur rerum possimus odit laudantium ut error vero magni, hic omnis consectetur eveniet blanditiis. Molestias corporis nostrum nulla quaerat?</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
