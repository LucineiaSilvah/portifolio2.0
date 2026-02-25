const Home = () => {
  return (
    <section id="home"  className="border-2 h-screen w-[80%] m-auto flex flex-col text-center font-poppins">
      <div className="flex flex-col gap-20">
        <h2 className="text-4xl pt-40 text-center font-heading ">
          Olá, Eu sou a Luh <br></br>
          Seja Bem Vindo ao meu Portifólio
        </h2>

       <div>
         <h3 className="text-3xl italic">Eu sou Desenvolverdora Front End</h3>

        <p className="pt-2">"Acredito que a tecnologia pode e deve simplificar a vida das pessoas."</p>
       </div>
      </div>
    </section>
  );
};

export default Home;
