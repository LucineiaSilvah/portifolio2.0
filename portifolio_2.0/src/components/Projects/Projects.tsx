// import { PiFileJsBold } from "react-icons/pi";
// import { FaCss3 } from "react-icons/fa6";
// import { FaReact } from "react-icons/fa";
// import { FaPhp } from "react-icons/fa6";
// import { TbEyeCode } from "react-icons/tb";
// import { TbEyeShare } from "react-icons/tb";

import passatempo from "../../assets/passatempo.webp";
import futebol from "../../assets/fec.webp";
import barbearia from "../../assets/vanhalla.webp";
import site from "../../assets/sitepessoal.webp";
import Card from "../Card/Card";
const data = [
  {
    destaque: [
      {
        imagem: passatempo,
        titulo: "passatempo educativo",
        descricao:
          "Nesse projeto voluntario criei algumas paginas fiz alguns ajustes nos layout e ainda realizo manutenções pontuais ",
        techs: "HTML | CSS | JS | PHP",
        repo: "#",
        demo: "https://passatempoeducativo.org.br/",
      },
      {
        imagem: futebol,
        titulo: "Futebol e Ciência",
        descricao: "trabalho voluntariado onde contribui na implementação da parte responsiva do site, tablet e celular",
        techs: "Techs: NEXT.JS | SCSS ",
        repo: "#",
        demo: "https://www.futebolciencia.com.br/",
      },
      {
        imagem: barbearia,
        titulo: "Barbearia",
        descricao: "Barbearia Vanhalla é um site fictício pensado em uma barbearia, inspirada em um tema viking",
        techs: "Techs:HTML5 | TAILWIND CSS | REACT ",
        repo: "https://github.com/LucineiaSilvah/barbearia/tree/main",
        demo: "https://barbearia-sage-eight.vercel.app/",
      },
      {
        imagem: site,
        titulo: "Site Pessoal",
        descricao: "Projeto Pessoal desenvolvido para mostrar meu trabalho online, e aprender a trabalhar com a parte de hospedagem do site",
        techs: "Techs:REACT | TAILWINCSS ",
        repo: "#",
        demo: "https://site-es1ppeyy4-lucineiasilvahs-projects.vercel.app/",
      },
      // {
      //   imagem: "img2",
      //   titulo: "Ipsom Ong",
      //   descricao: "Projeto Pessoal",
      //   techs: "Techs:HTML5 | CSS3 | REACT",
      //   repo: "https://github.com/LucineiaSilvah/ong",
      //   demo: "https://ong-beta.vercel.app/",
      // },
      // {
      //   imagem: "img3",
      //   titulo: "Mortal Figther",
      //   descricao: "Challange DIO Modelo blog",
      //   techs: "Techs:TS | ANGULAR | CSS",
      //   repo: "https://github.com/LucineiaSilvah/angular-blog",
      //   demo: "https://angular-blog-rust-three.vercel.app/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Projeto Buzzfeed",
      //   descricao: "Projeto estilo buzzfeed",
      //   tech: "Techs:TS | ANGULAR | CSS",
      //   repo: "https://github.com/LucineiaSilvah/angular-buzzfeed",
      //   demo: "https://angular-buzzfeed-three.vercel.app/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Lista tarefas em React",
      //   descricao: "LISTA DE TAREFA SIMPLES EM REACT",
      //   tech: "Techs:HTML | REACT | CSS",
      //   repo: "https://github.com/LucineiaSilvah/lista-de-tarefas",
      //   demo: "https://lista-de-tarefas-two-cyan.vercel.app/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Decodificador de texto",
      //   descricao: "Challange Alura Codificador",
      //   tech: "Techs: HTML | CSS | JS |FIGMA | TRELLO",
      //   repo: "https://github.com/LucineiaSilvah/Challange-Codificador-Decodificador/tree/master",
      //   demo: "https://lucineiasilvah.github.io/Challange-Codificador-Decodificador/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Lista de Tarefas",
      //   descricao: "Projeto Pessoal",
      //   tech: "Techs: HTML CSS JS",
      //   repo: "https://github.com/LucineiaSilvah/to-go-list-main/tree/master/to-go-list-main",
      //   demo: "https://lista-tarefas-luh.netlify.app/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Horas do Dia",
      //   descricao: "Challange Guanabara",
      //   tech: "Techs: HTML CSS JS",
      //   repo: "https://github.com/LucineiaSilvah/horasdodia/tree/master",
      //   demo: "https://wondrous-seahorse-8b368c.netlify.app/",
      // },
      // {
      //   imagem: "alurag",
      //   titulo: "E-commerce",
      //   descricao: "Challange Alura geek",
      //   tech: "Techs: HTML CSS JS |FIGMA TRELLO",
      //   repo: "https://github.com/LucineiaSilvah/alura-geek",
      //   demo: "https://alurageekv1.netlify.app/",
      // },
      // {
      //   imagem: "gametech",
      //   titulo: "E-commerce game tech",
      //   descricao: "Projeto pessoal",
      //   tech: "Techs: HTML | CSS | JS",
      //   repo: "https://github.com/LucineiaSilvah/loja-tech",
      //   demo: "https://gametechecommerce.netlify.app/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Filmes Guide",
      //   descricao: "Challange organo",
      //   tech: "Techs: HTML | CSS | JS | REACT | FIGMA | TRELLO",
      //   repo: "https://github.com/LucineiaSilvah/melhoresFilmes",
      //   demo: "https://melhores-filmes.vercel.app/",
      // },
      // {
      //   imagem: "padrao",
      //   titulo: "Lading Page",
      //   descricao: "Projeto curso Web",
      //   tech: "Techs: HTML | BOOTSTRAP",
      //   repo: "https://github.com/LucineiaSilvah/gamePage",
      //   demo: "https://gamespage.netlify.app/",
      // },
    ],
  },
  // {
  //   plus: [
  //     {
  //       imagem: "/src/img/clima.png",
  //       titulo: "Previão do tempo",
  //       descricao: "Projeto Pessoal",
  //       tech: "Techs: HTML | CSS | JS",
  //       repo: "https://github.com/LucineiaSilvah/previsao-tempo",
  //       demo: "https://creative-pasca-acad28.netlify.app/",
  //     },
  //     {
  //       imagem: "/src/img/digimon.png",
  //       titulo: "Digimon Fetch",
  //       descricao: "Projeto Pessoal",
  //       tech: "Techs: HTML | CSS | JS",
  //       repo: "https://github.com/LucineiaSilvah/digimon",
  //       demo: "https://digimonfetch.netlify.app/",
  //     },
  //     {
  //       imagem: "/src/img/r3.png",
  //       titulo: "Regra de 3 simple",
  //       descricao: "Projeto Pessoal",
  //       tech: "Techs: HTML CSS JS",
  //       repo: "https://github.com/LucineiaSilvah/regra-de-3",
  //       demo: "https://regra-de-3-calculadora.netlify.app/",
  //     },
  //     {
  //       imagem: "/src/img/music.png",
  //       titulo: "Play List",
  //       descricao: "Projeto Pessoal",
  //       tech: "Techs: HTML CSS JS",
  //       repo: "https://github.com/LucineiaSilvah/player",
  //       demo: "https://playlist24.netlify.app/",
  //     },
  //     {
  //       imagem: "/src/img/sl.png",
  //       titulo: "Salmos",
  //       descricao: "Projeto Pessoal",
  //       tech: "Techs: HTML CSS JS",
  //       repo: "",
  //       demo: "https://salmos.netlify.app/",
  //     },
  //     {
  //       imagem: "/src/img/age.png",
  //       titulo: "Calculadora de Idade",
  //       descricao: "FrontEndMentor",
  //       tech: "Techs: HTML CSS JS",
  //       repo: "https://github.com/LucineiaSilvah/age-calculator",
  //       demo: "https://calculatoragefree.netlify.app/",
  //     },
  //     {
  //       imagem: "/src/img/calc.png",
  //       titulo: "Calculadora em React",
  //       descricao: "Projeto Pessoal",
  //       tech: "Techs: HTML CSS JS REACT",
  //       repo: "https://vercel.com/lucineiasilvah/calculadora-react/CsChENtjLmUkVEJYmYgx3CP5DtxR",
  //       demo: "https://calculadora-react-git-master-lucineiasilvah.vercel.app/",
  //     },
  //     {
  //       imagem: "/src/img/trocaFundo.png",
  //       titulo: "Trocador de Background",
  //       descricao: "Projeto Freecode Camp",
  //       tech: "Techs: HTML CSS JS",
  //       repo: "https://github.com/LucineiaSilvah/trocadorCorDeFundo",
  //       page: "https://trocadordecordefundo.netlify.app/",
  //     },
  //   ],
  // },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="border-2 h-auto w-[80%] m-auto flex flex-col text-center"
    >
      <div className="flex flex-col gap-14 pt-20">
        <h2 className="text-4xl pt-10 text-center">Projetos</h2>

        <div className="border-amber-300 border-3 h-auto grid grid-cols-2 gap-6 ">
          {/* <div className="300 grid grid-cols-6  gap-6 ">
            <Card />
            <p className="border-2 col-span-3 h-80 rounded-2xl">
              <Card />
            </p>

            <p className="border-2 col-span-2 h-60 rounded-2xl">
              {" "}
              <Card />
            </p>
            <p className="border-2 col-span-2 h-60 rounded-2xl">
              {" "}
              <Card />
            </p>
            <p className="border-2 col-span-2 h-60 rounded-2xl">
              {" "}
              <Card />
            </p>
          </div> */}

          {data &&
            data[0].destaque.map((p, i) => {
              return (
                <div className=" " >

                     <p className="  h-80 rounded-2xl">
   <Card
                    key={i}
                    imagem={p.imagem}
                    titulo={p.titulo}
                    descricao={p.descricao}
                    techs={p.techs}
                    demo={p.demo}
                    repo={p.repo}
                  />
                     </p>
               
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
