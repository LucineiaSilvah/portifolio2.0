

import passatempo from '../../assets/passatempo.webp'


const Projects = () => {
  return (
    <section id="projects" className="border-2 h-auto w-[80%] m-auto flex flex-col text-center">
      <div className="flex flex-col gap-14 pt-20">
        <h2 className="text-4xl pt-10 text-center">
         Projetos
        </h2>

       <div className="border-amber-300 border-3 h-auto ">
<div className="300 grid grid-cols-6  gap-6 ">

        <p className="border-2 col-span-3 h-80 rounded-2xl overflow-hidden group relative ">
           <div className='border-2 absolute z-10 w-full h-full bg-white flex flex-col  justify-around'>

          <h2>Site Ong Passatempo Educativo</h2>
          <p>Nesse projeto voluntario criei algumas paginas fiz alguns ajustes nos layout e ainda realizo manutenções pontuais </p>
          <p>technologias</p>
           <ul>
            <li>

            </li>
            <li>
              css
            </li>
            <li>
              js
            </li>
            <li>
              php
            </li>
           </ul>
          <div>
            <p>botao 1</p>
            <p>botao 2</p>
          </div>
          </div>
          <img src={passatempo}  alt=" foto site passatempo educativo" className='h-80 group-hover:border-4'/>
         
          </p>
        <p className="border-2 col-span-3 h-80 rounded-2xl">card</p>
      
          <p className="border-2 col-span-2 h-60 rounded-2xl">card</p>
          <p className="border-2 col-span-2 h-60 rounded-2xl">card</p>
          <p className="border-2 col-span-2 h-60 rounded-2xl">card</p>

     


       
</div>
       </div>
      </div>
    </section>
  );
};

export default Projects;
