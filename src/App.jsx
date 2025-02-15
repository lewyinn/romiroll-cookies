import About from "./components/About"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className='overflow-x-hidden text-stone-300 antialiased'>

        <div className='fixed inset-0 -z-10'>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FEB4CE)]">
          </div>
        </div>

        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <Menu />
          <About />
          <Service />
        </div>

        <div className='backdrop-blur-3xl bg-black/5 shadow-md mx-auto px-8'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
