
const Form = () => {
  return (
    <>
      <div className="lg:w-[50%] w-full m-auto">
    <h2 className="text-center">Fale comigo!</h2>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Nome
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nome"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        E-mail
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder="digite seu email"/>
     
    </div>
     <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Mensagem
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   placeholder="digite sua mensagem"/>
     
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Enviar
      </button>
    
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2026 Lucineia R.Silva . All rights reserved.
  </p>
</div>
    </>
  );
}

export default Form;
