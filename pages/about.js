import Head from 'next/head'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
  return (<>
    <Head>
      <title>Ninja List | About</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia velit reiciendis, nesciunt numquam inventore facere nemo ipsa quo eum minus. Suscipit earum obcaecati aut esse harum ipsa doloremque quas impedit?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia velit reiciendis, nesciunt numquam inventore facere nemo ipsa quo eum minus. Suscipit earum obcaecati aut esse harum ipsa doloremque quas impedit?</p>
    </div>
    </>
  )
}

export default About