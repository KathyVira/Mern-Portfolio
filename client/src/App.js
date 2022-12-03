import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Loader from './components/Loader'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { useDispatch, useSelector } from 'react-redux'
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from './redux/rootSlice'
import Login from './pages/Admin/Login'

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root,
  )
  const disatch = useDispatch()
  const getPortfolioData = async () => {
    try {
      disatch(ShowLoading(true))
      const response = await axios.get('/api/portfolio/get-portfolio-data')
      disatch(SetPortfolioData(response.data))
      disatch(ReloadData(false))
      disatch(HideLoading())
    } catch (error) {
      disatch(HideLoading())
      console.log(error)
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData()
    }
  }, [portfolioData])

  useEffect(() => {
    console.log(portfolioData)
  }, [portfolioData])

  useEffect(() => {
    if (!reloadData) {
      getPortfolioData()
    }
  }, [reloadData])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
