
interface  Props{
  children: React.ReactNode;
}


const Tags = ({children }:Props) => {
  return (
    <div className="min-w-20 h-10  flex justify-center items-center p-1 shadow-sm shadow-gray-400 rounded-full font-50 font-roboto  bg-purple-100/70">
      {children}
    </div>
  );
}

export default Tags;
