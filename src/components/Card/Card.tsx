
import Button from "../Button/Button";

type Props = {
imagem:string;
titulo:string;
descricao:string;
children: React.ReactNode;
demo?:string;
repo?:string;
}
const Card = ({imagem,titulo,descricao,demo,repo,children}:Props) => {


 
  return (
   <div className="border h-auto min-h-80 bg-white shadow-md shadow-gray-600 rounded   overflow-hidden group lg:relative m-auto ">
    <div className="">

    <img  src={imagem} alt=" foto site passatempo educativo" className='lg:h-80 lg:block hidden p-2 lg:group-hover:hidden rounded '/>
    </div>
           <div className='lg:absolute z-10 w-full h-full flex-col  justify-around gap-1 lg:p-10 px-6 pt-4 lg:hidden  group-hover:flex transition-discrete  delay-100 '>

          <h2 className="lg:text-2xl text-lg text-left uppercase font-bold">{titulo}</h2>
          <p className="font-sans text-left text-sm lg:text-md py-2 ">{descricao}</p>
         
           <ul className="flex justify-around">
     
        <div className="flex  h-auto gap-0  items-center flex-col lg:flex-row  w-full m-auto" >
         <p className="w-full mt-2">techs utilizadas </p>
           <div className="text-left captalize italic grid grid-cols-4 lg:flex"> {children}</div>
        </div>
           </ul>
          <div className="flex justify-around lg:w-full  lg:flex-row flex-col lg:gap-12 gap-2 p-4 w-[80%] m-auto ">
   <Button>
   
    <a href={demo} target="_blank"> Ver Projeto</a>
   </Button>
  
   {repo?.startsWith('http') || repo?.startsWith('https') || repo?.startsWith('www') ? (
    <Button > <a href={repo} target="_blank"> Ver Repositório</a>  </Button>
   ): 
   
 (<span className="hidden"></span>)}
      
          </div>
          </div>
          
         
          </div>
  );
}

export default Card;
