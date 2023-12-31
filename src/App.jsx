import React from 'react'
import './App.css'
import { Article, CTA, Brand ,Navbar,Feature} from "./components";
import { Blog, Features, Footer, Header, Possibility, WhatGpt3} from "./containers";
const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
      
      
    </div>
    
  )
}

export default App