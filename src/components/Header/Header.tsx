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

const handleMenu = ()=>
{
 
  if(!isOpen){

    setisOpen(true);
  }
  if(isOpen){

    setisOpen(false);
  }
   
}

  return (
    <header className="border-2 flex flex-col lg:flex-row justify-around lg:h-[15vh] h-20 bg-white w-full items-center fixed p-4 z-50">
        <p className="absolute left-4 lg:static p-2">
          <img src={logo} alt="" width={80}  />
        </p>
        <nav className="font-sans">
          <p className="w-10 h-6 absolute right-4 top-6 lg:hidden cursor-pointer" onClick={handleMenu}>
            {!isOpen ? <RiMenu5Line  size={30}/>:     <MdOutlineClose size={30} />}
           
      

          </p>
     <ul className={isOpen ? `hidden justify-between  lg:gap-10  lg:flex-row gap-4 top-5 lg:static lg:mt-0 lg:w-auto w-screen text-center item-center bg-white/90 flex-col  mt-14 absolute right-0 ` :'flex justify-between  lg:gap-10  lg:flex-row gap-4 top-5 lg:static lg:mt-0 lg:w-auto w-screen text-center item-center bg-white/90 flex-col  mt-14 absolute right-0 left-0 p-4 ' }>
            <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700  border-b-white flex justify-center items-center w-auto cursor-pointer' onClick={()=> scrollToComponent('home')} >inicio</li>
                   <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('about')}>Quem Sou</li>
                 <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('projects')}>Projetos</li>
                  <li className='font-semibold capitalize border-b-4 hover:border-b-purple-700   border-b-white flex justify-center items-center w-auto cursor-pointer'  onClick={()=> scrollToComponent('about')}>Estudos</li>
      
           
          </ul>
        </nav>
    <div className='pl-4'>

        <Button >
          <span  onClick={()=> scrollToComponent('contact')}>Contato</span>
        </Button>
    </div>
    
        {/* <button onClick={()=>scrollToComponent('contact')}  className="absolute right-0 top-6 left-0  lg:static bg-purple-800 text-white p-2 mr-4 w-20 h-20 rounded-b-full cursor-pointer">Contato</button> */}
    </header>
  );
}

export default Header;
