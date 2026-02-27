import Tags from "../tags/Tags";

const About = () => {
  return (
    <section id="about" className="border-2 h-auto min-h-screen w-[80%] m-auto flex flex-col text-center">
      <div className="flex flex-col gap-20 pt-20 ">
        <h2 className="text-4xl pt-10 text-center">
         Quem Sou
        </h2>
       <p className="px-4">Oi, sou a Luh.

Passei mais de 10 anos no atendimento ao cliente em redes de fast-food onde comecei como atendente e cheguei a subgerente. E olha, foi ali que aprendi na prática o que hoje levo para a tecnologia: resolver problema de gente real, com clareza e agilidade.

Sou Graduada em Gestão de TI e formada em Desenvolvimento Front-End pelo programa ONE 2023 da Oracle.

Atualmente curso Bacharelado em Engenharia de Software.
Minha missão é unir essa bagagem de atendimento com código para criar soluções que realmente ajudem pessoas.</p>
       <div>
        <h2 className="text-3xl font-bold p-4 text-center">skills adquiridas</h2>
        <div className=" ">
          <h4 className="text-left pl-10 text-2xl italic">Soft</h4>
          <ul className="grid lg:grid-cols-4 gap-4 p-2 grid-cols-2 lg:p-4 ">
            <li><Tags nome='trabalho em equipe'/></li>
            <li><Tags nome='paciência'/></li>
            <li><Tags nome='Agilidade'/></li>
            <li><Tags nome='flexibilidade'/></li>
            <li><Tags nome='gestão de tempo'/></li>
            <li><Tags nome='organização'/></li>
            <li><Tags nome='comprometimento'/></li>
            <li><Tags nome='empatia'/></li>
          
          
          </ul>
        </div>
        <div className="">
          <h4 className="text-left pl-10 text-2xl italic">Hard</h4>
          <ul className="grid lg:grid-cols-4 gap-4 p-2 grid-cols-2 lg:p-4 ">
            <li><Tags nome='html'/></li>
            <li><Tags nome='css'/></li>
            <li><Tags nome='js'/></li>
            <li><Tags nome='node.js'/></li>
            <li><Tags nome='bootstrap'/></li>
            <li><Tags nome='react.js'/></li>
            <li><Tags nome='next.js'/></li>
            <li><Tags nome='php'/></li>
            <li><Tags nome='sql'/></li>
            <li><Tags nome='git'/></li>
          
          
          </ul>
        </div>
       
       </div>
      </div>
    </section>
  );
};

export default About;
