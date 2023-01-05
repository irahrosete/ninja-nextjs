import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi quae, aspernatur rerum possimus odit laudantium ut error vero magni, hic omnis consectetur eveniet blanditiis. Molestias corporis nostrum nulla quaerat?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, excepturi quae, aspernatur rerum possimus odit laudantium ut error vero magni, hic omnis consectetur eveniet blanditiis. Molestias corporis nostrum nulla quaerat?</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  </>
  )
}
