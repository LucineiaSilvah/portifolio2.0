import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Studies from "./components/Studies/Studies"

function App() {


  return (
    <>
    <Header/>
    <main className=" w-auto ">
    <Home/>
   <Projects/>
   <About/>
   <Studies/>
   <Contact/>
    </main>
    </>
  )
}

export default App
