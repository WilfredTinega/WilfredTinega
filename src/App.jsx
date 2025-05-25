import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Services from './pages/Services'

export default function () {
  return (
    <>
      <Navbar />      
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/services' element = {<Services />} />
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/contacts' element = {<Contacts />} />
        <Route path='*' element = {<NotFound/>} />
      </Routes>

      <Outlet/>

      <Footer />
    </>
  )}