
interface Props{

  children: React.ReactNode,

}


const Button = ({children}:Props) => {
  return (
    <button className="border bg-purple-700 text-white font-semibold text-center cursor-pointer hover:bg-purple-700/60 hover:border-black transition-colors delay-75 min-w-10 lg:px-4 px-2 rounded-full  flex items-center justify-center flex-row gap-2 text-md lg:text-lg w-[70%] m-auto lg:w-full h-12" >
      {children}
    </button>
  );
}

export default Button;
