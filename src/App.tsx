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
    <div className="bg-gray-50">
    <Header/>
    <main className="w-auto flex flex-col justify-center items-center m-auto text-center">
    <Home/>
   <Projects/>
   <About/>
   <Studies/>
   <Contact/>
    </main>
      <p className="text-center text-gray-500 text-xs w-full bg-white  py-1">
    &copy;2026 Lucineia R.Silva . All rights reserved.
  </p>
    </div>
  )
}

export default App
