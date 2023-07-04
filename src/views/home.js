import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Web Specialist</title>
        <meta property="og:title" content="International Web Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
