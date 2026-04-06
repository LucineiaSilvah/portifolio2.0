import Form from "./Form";
import { FaGithub, FaGoogle, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const Contact = () => {
  return (
    <section id="contact" className=" h-auto w-[90%] m-auto flex flex-col text-center" >
      <div className="flex flex-col gap-20 pt-20 ">
        <h2 className="text-4xl pt-10 text-center">
         Contato
        </h2>
       <div className="border-b-2 border-purple-700 h-20 lg:w-2/4 w-full m-auto flex justify-around items-center">
       <a href="https://github.com/LucineiaSilvah" target="_blank" rel="noopener noreferrer">
         <FaGithub size={30} color="#333" />
       </a>
       <a href="mailto:lucineiasilva.dev@gmail.com" target="_blank" rel="noopener noreferrer" >
      <FaGoogle size={30} color="#EA4335" />
       </a>
       <a href="https://www.linkedin.com/in/lucineia-r-silva-frontend" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} color="#0077B5" />
       </a>
       <a href="https://wa.me/41984536057" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={30} color="#25D366" />
       </a>
       </div>
       <div className="" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="500">
       <Form/>
       </div>
      </div>
    </section>
  );
};

export default Contact;
