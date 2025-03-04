import React from 'react'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contacts from './pages/Contacts'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Frontend from './projects/Frontend'
import ReactProjects from './projects/ReactProjects'
import VanillaJS from './projects/VanillaJS'
import HtmlCss from './projects/HtmlCss'
import { ToastContainer } from 'react-toastify'

export default function () {
  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path='/' element = {<Home />} />

        <Route path='/about' element = {<About />}>
          <Route path='experience' element = {<Experience/>}/>
          <Route path='skills' element = {<Skills/>}/>
          <Route path='education' element = {<Education/>}/>
        </Route>

        <Route path='education' element = {<Education/>}/>

        <Route path='/projects' element = {<Projects />}>
          <Route path='front-end' element = {<Frontend/>}/>
          <Route path='react-projects' element = {<ReactProjects/>}/>
          <Route path='vanillajs' element = {<VanillaJS/>}/>
          <Route path='htmlcss' element = {<HtmlCss/>}/>
        </Route>
        
        <Route path='/blog' element = {<Blogs />} />
        <Route path='/contacts' element = {<Contacts />} />
      </Routes>
      <Footer />
    </>
  )}