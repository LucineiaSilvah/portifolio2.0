import Button from "../Button/Button";

type Props = {
imagem:string;
titulo:string;
descricao:string;
children: React.ReactNode;
demo:string;
repo:string;
}
const Card = ({imagem,titulo,descricao,demo,repo,children}:Props) => {
  return (
   <div className="border-2 col-span-3 h-80 rounded-2xl overflow-hidden group relative  ">
           <div className='absolute z-10 w-full h-full flex-col  justify-around gap-1 p-10  hidden group-hover:flex transition-discrete  delay-100 '>

          <h2 className="text-2xl text-left uppercase">{titulo}</h2>
          <p className="font-sans text-left">{descricao}</p>
         
           <ul className="flex justify-around">
     
        <p className="flex h-auto  items-center" >
           <span className="text-left captalize italic flex  items-center ">techs utilizadas  </span>{children}
        </p>
           </ul>
          <div className="flex justify-around">
   <Button>
   
    <a href={demo} target="_blank"> Ver Projeto</a>
   </Button>
   <Button>
   <a href={repo} target="_blank"> Ver Repositório</a></Button>
      
          </div>
          </div>
          <img  src={imagem} alt=" foto site passatempo educativo" className='h-80 p-2 group-hover:hidden rounded-3xl'/>
         
          </div>
  );
}

export default Card;
