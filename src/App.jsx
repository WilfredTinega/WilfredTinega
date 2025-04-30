import React from 'react'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { ToastContainer } from 'react-toastify'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

export default function () {
  return (
    <>
      <Navbar />
      <ToastContainer/>
      
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/contacts' element = {<Contacts />} />
        <Route path='*' element = {<NotFound/>} />
      </Routes>

      <Footer />
    </>
  )}