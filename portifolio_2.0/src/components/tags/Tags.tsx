
interface  Props{
  children: React.ReactNode;
}


const Tags = ({children }:Props) => {
  return (
    <div className="min-w-20 h-10  flex justify-center items-center p-1 shadow-sm shadow-gray-400 rounded-full font-50 font-roboto border bg-gray-100/70 font-semibold">
      {children}
    </div>
  );
}

export default Tags;
