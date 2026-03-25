
interface  Props{
  children: React.ReactNode;
}


const Tags = ({children }:Props) => {
  return (
    <div className="min-w-20 h-12 lg:h-8  flex justify-center items-center p-2 shadow-sm shadow-gray-400 rounded-full font-50 font-sans border bg-gray-100/70 font-100">
      {children}
    </div>
  );
}

export default Tags;
