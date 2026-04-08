import emailjs from '@emailjs/browser'
import Button from "../Button/Button";
import { useForm} from 'react-hook-form'
type Dados ={
  nome:string,
  email:string,
  mensagem:string
};
const Form = () => {

  const {register,handleSubmit,formState:{errors}} = useForm<Dados>();
  const onSubmit = (dados : Dados) => {
      emailjs.send(
    'service_q9dfxqw', 
    'template_t7xoggo', 
    dados, 
    't3UoE6zFXQWjxhhxX'
  ).then(() => alert("E-mail enviado com sucesso!"));}
  
  return (
    <>
      <div className="lg:w-[50%] w-full m-auto">
    <h2 className="text-center">Fale comigo!</h2>
  <form className="bg-white shadow-md shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 text-left" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Nome
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nome" {...register('nome', {required:true})}/>
       {errors.nome && <span>Digite um Nome</span>}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        E-mail
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder="digite seu email"  {...register('email', {required:true})}/>
     {errors.email && <span>Digite um email</span>}
    </div>
     <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Mensagem
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   placeholder="digite sua mensagem"  {...register('mensagem', {required:true})}/>
       {errors.mensagem && <span>Digite uma mensagem</span>}
    </div>
    <div className="flex items-center justify-center">
     <Button >Enviar</Button>
    
    </div>
  </form>
 
</div>
    </>
  );
}

export default Form;

