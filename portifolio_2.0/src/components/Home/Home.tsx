import foto from '../../assets/foto.png'

const Home = () => {
  return (
    <section id="home"  className="border-2 lg:h-screen w-[80%] m-auto flex lg:flex-row flex-col  text-center font-poppins">
      <div className="flex flex-col lg:gap-16">
        <h2 className="lg:text-4xl lg:pt-50 pt-20 text-2xl text-center font-heading ">
          Olá, Eu sou a Luh <br></br>
          Seja Bem Vindo ao meu Portifólio
        </h2>

       <div>
         <h3 className="lg:text-3xl text:lg italic">Eu sou Desenvolverdora Front End</h3>
<p className='italic'>&</p>
        <p className="pt-2 text-sm lg:text-md">"Acredito que a tecnologia pode e deve simplificar a vida das pessoas."</p>
       </div>
      </div>
      <div className="rounded-t-4xl  w-[50%] m-auto lg:h-100 h-50 pt-20 lg:pt-50 flex items-center justify-center overflow-hidden">
        <img src={foto} alt="" className='drop-shadow-lg drop-shadow-purple-700' />

      </div>
    </section>
  );
};

export default Home;
