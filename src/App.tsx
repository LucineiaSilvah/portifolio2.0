import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Studies from "./components/Studies/Studies"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';
function App() {

  useEffect(()=>{//inicializa animacao

    setTimeout(()=>{
      AOS.init({
      
       mirror:true
      });

    },100)
  },[])

  return (
    <>
    <Header/>
    <main className="w-full flex flex-col justify-center items-center m-auto text-center">
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
