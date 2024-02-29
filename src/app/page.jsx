import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="signup">Sign Up</Link>
      <Link href="contact">Contect Us</Link>
      <Link href="about">About Us</Link>
      <h1>My React App</h1>
      <button>Some Button</button>
    </div>
  )
}

export default Home