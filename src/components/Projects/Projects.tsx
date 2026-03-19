import passatempo from "../../assets/passatempo.webp";
import futebol from "../../assets/fec.webp";
import barbearia from "../../assets/vanhalla.webp";
import site from "../../assets/sitepessoal.webp";
import Card from "../Card/Card";
import { FaHtml5, FaJs } from "react-icons/fa";
import { FaCss3Alt, FaPhp } from "react-icons/fa6";
import { 
  SiNextdotjs,    
  SiTailwindcss,  
  SiBootstrap,     
  SiGit,   
  SiVercel,          
  SiFigma,          
  SiSass,
  SiFirebase,
  SiTypescript,
  SiReact
} from 'react-icons/si'
const iconMap = {
  html: <FaHtml5 className="w-8 h-8 text-orange-500" />,
  css: <FaCss3Alt className="w-8 h-8 text-blue-500" />,
  js: <FaJs className="w-8 h-8 text-yellow-500" />,
    react: <SiReact className="w-8 h-8 text-cyan-400" />,
      next: <SiNextdotjs className="w-8 h-8 text-black " />,
  nextjs: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
  vercel: <SiVercel  className="w-8 h-8 text-black" />,
  tailwind: <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
  tailwindcss: <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
  php: <FaPhp className="w-8 h-8 text-purple-500" />,
  bootstrap: <SiBootstrap className="w-8 h-8 text-purple-600" />, 
  git: <SiGit className="w-8 h-8 text-orange-600" />,
  figma: <SiFigma className="w-8 h-8 text-purple-500" />,
  scss: <SiSass className="w-8 h-8 text-pink-500" />,
  firebase: <SiFirebase className="w-8 h-8 text-yellow-500" />,
  ts: <SiTypescript className="w-8 h-8 text-blue-600" />,
  typescript: <SiTypescript className="w-8 h-8 text-blue-600" />,
};
const data = [
  {
    destaque: [
      {
        imagem: passatempo,
        titulo: "passatempo educativo",
        descricao:
          "Nesse projeto voluntario criei algumas paginas fiz alguns ajustes nos layout e ainda realizo manutenções pontuais ",
        techs: ['html','css','js','php'],
        repo: "#",
        demo: "https://passatempoeducativo.org.br/",
      },
      {
        imagem: futebol,
        titulo: "Futebol e Ciência",
        descricao: "trabalho voluntariado onde contribui na implementação da parte responsiva do site, tablet e celular",
        techs: ['next','scss','ts','git',],
        repo: "#",
        demo: "https://www.futebolciencia.com.br/",
      },
      {
        imagem: barbearia,
        titulo: "Barbearia",
        descricao: "Barbearia Vanhalla é um site fictício pensado em uma barbearia, inspirada em um tema viking",
        techs: ['react','css','js','git','vercel'],
        repo: "https://github.com/LucineiaSilvah/barbearia/tree/main",
        demo: "https://barbearia-sage-eight.vercel.app/",
      },
      {
        imagem: site,
        titulo: "Site Pessoal",
        descricao: "Projeto Pessoal desenvolvido para mostrar meu trabalho online, e aprender a trabalhar com a parte de hospedagem do site",
        techs: ['react','tailwind','js','git','vercel'],
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

        <div className="h-auto grid md:grid-cols-2 gap-6 grid-cols-1">
         

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
              
                    demo={p.demo}
                    repo={p.repo}
                  >
              {p.techs.map((tech) =>(
               
         
        
          <p key={tech} className="flex m-4">
{iconMap[tech as keyof typeof iconMap] || tech}
          </p>
           
          
      
       
              ))}
                  </Card>
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
