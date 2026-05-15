
interface  Props{
  children: React.ReactNode;
}


const Tags = ({children }:Props) => {
  return (
    <div className="capitalize  min-w-10 lg:w-60 h-6 my-2 text-sm lg:text-lg lg:h-10  flex justify-center items-center p-2 shadow-sm shadow-gray-400 rounded-full font-50 font-sans border bg-gray-100/70 font-100">
      {children}
    </div>
  );
}

export default Tags;
