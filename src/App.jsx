import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceIcons from './components/ServiceIcons'
import Stats from './components/Stats'
import Specialties from './components/Specialties'
import About from './components/About'
import CtaBanner from './components/CtaBanner'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'
import Doctors from './components/Doctors'
import Blog from './components/Blog'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceIcons />
        <Stats />
        <Specialties />
        <About />
        <CtaBanner />
        <Testimonials />
        <Appointment />
        <Doctors />
        <Blog />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
