import logo from '../../assets/logo-transp.png'
const Header = () => {

   const scrollToComponent = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="border-2 flex flex-col lg:flex-row justify-around lg:h-[15vh] h-20 bg-white w-full items-center fixed p-4 z-50">
        <p className="absolute left-4 lg:static p-2">
          <img src={logo} alt="" width={80}  />
        </p>
        <nav className="">
          <p className="w-10 h-6 absolute right-6 top-8 lg:hidden ">menu</p>
          <ul className="flex justify-between  lg:gap-20 flex-col lg:flex-row absolute right-0 gap-4 top-5 mt-14 lg:static lg:mt-0 lg:w-auto w-screen text-center bg-white/90 p-2
          ">
            <li onClick={()=> scrollToComponent('home')}>inicio</li>
            <li onClick={()=> scrollToComponent('about')}>Quem Sou</li>
            <li onClick={()=> scrollToComponent('projects')}>Projetos</li>
            <li onClick={()=> scrollToComponent('about')}>Estudos</li>
      
           
          </ul>
        </nav>
        <button onClick={()=>scrollToComponent('contact')}  className="absolute right-0 top-6 left-0  lg:static bg-purple-800 text-white p-2 mr-4 w-20 h-20 rounded-b-full cursor-pointer">Contato</button>
    </header>
  );
}

export default Header;
