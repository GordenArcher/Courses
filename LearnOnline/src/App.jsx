import './App.css'
import About from './About'
import BackToTop from './components/BackToTop'
import Courses from './Courses'
import Header from './Header'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer'


function App() {

  return (
    <>
    <div className="app">
      <div className="app_container">
        <Header />


        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </div>

    <BackToTop />

    </>
  )
}

export default App
