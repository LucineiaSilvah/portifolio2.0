import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"

function App() {


  return (
    <>
    <Header/>
    <main className="border-2 border-amber-500 w-auto ">
    <Home/>
   <Projects/>
   <About/>
   <Contact/>
    </main>
    </>
  )
}

export default App
