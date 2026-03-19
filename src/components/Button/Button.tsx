
interface Props{
  children: React.ReactNode,

}


const Button = ({children}:Props) => {
  return (
    <button className="border-2 border-purple-700 text-black font-semibold cursor-pointer hover:bg-purple-700/50 hover:text-white transition-colors delay-75 min-w-10 px-4 rounded-full  flex items-center  gap-2" >
      {children}
    </button>
  );
}

export default Button;
