
interface  Props{
  children: React.ReactNode;
}


const Tags = ({children }:Props) => {
  return (
    <div className="w-40 p-2 shadow-sm shadow-gray-400 rounded-full font-medium bg-purple-200/70">
      {children}
    </div>
  );
}

export default Tags;
