import React from 'react'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contacts from './pages/Contacts'
import Education from './pages/Education'

export default function 
() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/experience' element = {<Experience />} />
        <Route path='skills/' element = {<Skills />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/education' element = {<Education />} />
        <Route path='/blog' element = {<Blogs />} />
        <Route path='/contact-me' element = {<Contacts />} />
      </Routes>
      <Footer />
    </>
  )
}
