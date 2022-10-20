import React from 'react'
import Header from '../components/Header'
import BlockCategory from '../components/BlockCategory'
import moviesImage from '../images/movies.png'
import seriesImage from '../images/series.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
        <>
            <Header />
            <div className="content_app">
                <BlockCategory image={moviesImage} textCategory="Movies"/>
                <BlockCategory image={seriesImage} textCategory="Series"/>
            </div>
            <Footer />
        </>
  )
}

export default Home
