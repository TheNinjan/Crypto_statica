import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import Exchanges from "./components/Exchanges"
import CoinDetails from "./components/CoinDetails"
import Coins from "./components/Coins"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coins" element={<Coins/>}/>
          <Route path="/coin/:id" element={<CoinDetails/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
        </Routes>
        <Footer/>
      </Router>
      </>
  )
}

export default App
