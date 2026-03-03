


import Button from "../Button/Button";
import Tags from "../tags/Tags";
import passatempo from '../../assets/passatempo.webp'

const Card = ({imagem,titulo,descricao,techs,demo,repo}) => {
  return (
   <div className="border-2 col-span-3 h-80 rounded-2xl overflow-hidden group relative  ">
           <div className='absolute z-10 w-full h-full flex-col  justify-around gap-4 p-10  hidden group-hover:flex transition-discrete  delay-75 '>

          <h2 className="text-2xl text-left ">{titulo}</h2>
          <p className="">{descricao}</p>
          <span className="text-left captalize italic">techs utilizadas</span>
           <ul className="flex justify-around">
     
        <Tags >
          {techs}
        </Tags>
           </ul>
          <div className="flex justify-around">
   <Button>
   
    <a href={demo} target="_blank"> Ver Projeto</a>
   </Button>
   <Button>
   <a href={repo} target="_blank"> Ver Repositório</a></Button>
      
          </div>
          </div>
          <img  src={passatempo} alt=" foto site passatempo educativo" className='h-80 group-hover:hidden'/>
         
          </div>
  );
}

export default Card;
