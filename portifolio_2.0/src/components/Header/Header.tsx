
const Header = () => {

   const scrollToComponent = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="border-2 flex justify-around h-[15vh] w-full items-center fixed">
        <p>logo</p>
        <nav >
          <ul className="flex justify-between border-2 w-120">
            <li onClick={()=> scrollToComponent('home')}>inicio</li>
            <li onClick={()=> scrollToComponent('about')}>Quem Sou</li>
            <li onClick={()=> scrollToComponent('projects')}>Projetos</li>
            <li onClick={()=> scrollToComponent('about')}>Estudos</li>
      
           
          </ul>
        </nav>
        <button onClick={()=>scrollToComponent('contact')} >Contato</button>
    </header>
  );
}

export default Header;
