import './app.scss'
import React from 'react'
import Header from './components/Header'
import BlockCategory from './components/BlockCategory'
import moviesImage from './images/movies.png'
import seriesImage from './images/series.png'

const App = () => {
  return (
        <>
            <Header />
            <div className="content_app">
              <BlockCategory image={moviesImage} textCategory="Movies"/>
              <BlockCategory image={seriesImage} textCategory="Series"/>
            </div>
        </>
  )
}

export default App
