import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi quae, aspernatur rerum possimus odit laudantium ut error vero magni, hic omnis consectetur eveniet blanditiis. Molestias corporis nostrum nulla quaerat?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi quae, aspernatur rerum possimus odit laudantium ut error vero magni, hic omnis consectetur eveniet blanditiis. Molestias corporis nostrum nulla quaerat?</p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
