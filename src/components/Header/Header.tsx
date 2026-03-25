import logo from '../../assets/logo-transp.png'
import Button from '../Button/Button';
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import {useState} from 'react'
const Header = () => {

   const scrollToComponent = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isOpen,setisOpen] = useState(false);
const abrir = 'hidden';
const fecha = 'flex';
const handleMenu = ()=>
{
 

  if(isOpen){

    setisOpen(false);
  }
  if(!isOpen){

    setisOpen(true);
  }
   
}

  return (
    <header className="border-b-2 border-purple-700 flex flex-col lg:flex-row justify-around lg:h-[15vh] h-20 bg-white w-full items-center fixed p-4 z-50">
        <p className="absolute left-4 lg:static p-2">
          <img src={logo} alt="" width={80}  />
        </p>
        <nav className="font-sans">
          <p className="w-10 h-6 absolute right-4 top-6 lg:hidden cursor-pointer" onClick={handleMenu}>
            {!isOpen ? <RiMenu5Line  size={30}/>:     <MdOutlineClose size={30} />}
           
      

          </p>
         <ul className={`lg:flex hidden justify-between  lg:gap-10  lg:flex-row gap-4 top-5 lg:static lg:mt-0 lg:w-auto w-screen text-center item-center bg-white/90 flex-col  mt-15 absolute right-0 left-0 p-4 `}>
            <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700  border-b-white/5 flex justify-center items-center w-auto cursor-pointer' onClick={()=> scrollToComponent('home')} >inicio</li>
                   <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('about')}>Quem Sou</li>
                 <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('projects')}>Projetos</li>
                  <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('about')}>Estudos</li>
      
           
          </ul>

        {
           <ul className={`${isOpen ?  `${fecha}`:` ${abrir}`} flex lg:hidden justify-between  lg:gap-10  lg:flex-row gap-4 top-5 lg:static lg:mt-0 lg:w-auto w-screen text-center item-center bg-white/90 flex-col  mt-15 absolute right-0 left-0 p-4 `}>
            <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700  border-b-white/5 flex justify-center items-center w-auto cursor-pointer' onClick={()=> scrollToComponent('home')} >inicio</li>
                   <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('about')}>Quem Sou</li>
                 <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('projects')}>Projetos</li>
                  <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('about')}>Estudos</li>
                  <li className='border-2 border-purple-700 text-black font-semibold text-center cursor-pointer hover:bg-purple-700/50 hover:text-white transition-colors delay-75 min-w-10 lg:px-4 px-2 rounded-full  flex items-center justify-center flex-row gap-2 text-md lg:text-lg w-[70%] m-auto lg:w-full h-12' onClick={()=> scrollToComponent('contact')}>Contato</li>
      
           
          </ul>
        }
              
        </nav>
    <div className='pl-4 lg:flex hidden'>

        <Button >
          <span  onClick={()=> scrollToComponent('contact')}>Contato</span>
        </Button>
    </div>
    
    
    </header>
  );
}

export default Header;
