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
   <div className="border  h-100 rounded-2xl overflow-hidden group lg:relative  ">
           <div className='lg:absolute z-10 w-full h-full flex-col  justify-around gap-1 p-10  lg:hidden  group-hover:flex transition-discrete  delay-100 '>

          <h2 className="lg:text-2xl text-lg text-left uppercase">{titulo}</h2>
          <p className="font-sans text-left text-sm lg:text-md py-2 ">{descricao}</p>
         
           <ul className="flex justify-around">
     
        <div className="flex  h-auto gap-0  items-center flex-col lg:flex-row  w-full m-auto" >
         <p className="w-full mt-2">techs utilizadas </p>
           <div className="text-left captalize italic grid grid-cols-3 lg:flex"> {children}</div>
        </div>
           </ul>
          <div className="flex justify-around w-full ">
   <Button>
   
    <a href={demo} target="_blank"> Ver Projeto</a>
   </Button>
   <Button>
   <a href={repo} target="_blank"> Ver Repositório</a></Button>
      
          </div>
          </div>
          <img  src={imagem} alt=" foto site passatempo educativo" className='lg:h-80 p-2 lg:group-hover:hidden rounded-3xl  '/>
         
          </div>
  );
}

export default Card;
