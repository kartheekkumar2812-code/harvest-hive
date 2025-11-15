import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { SiteShell } from './components/SiteShell'

export default function App(){
  return (
    // <SiteShell>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/market" element={<Marketplace/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    // </SiteShell>
  )
}
