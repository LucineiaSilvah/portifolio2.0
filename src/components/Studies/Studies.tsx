import { useState, useEffect, type SetStateAction } from 'react';
import uniasselvi from '../../assets/unia.jpg'
import gran from '../../assets/gran-faculdade.webp'
import udemy from '../../assets/udemy.webp'

const Studies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    { id: 0, src: uniasselvi, alt: 'Uniasselvi', title: 'Graduação em Gestao de TI',duracao:'2,5 Anos',status:'Completo' },
    { id: 1, src: gran, alt: 'Gran Faculdade', title: 'Becharelado em Engenharia de Software',duracao:'4 Anos',status:'Cursando' },
    { id: 2, src: udemy, alt: 'Udemy', title: 'Curso Web Completo',duracao:'126,5 horas',status:'Cursando' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    // Resetar o timer quando o usuário interage
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Reativa após 5 segundos sem interação
  };

  // Função de passamento automático
  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 6000); 
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="studies" className="h-auto min-h-screen w-[90%] m-auto flex flex-col text-center font-sans">
      <div className="flex flex-col gap-20 py-20">
        <h2 className="text-4xl pt-20 text-center">
          Meus Estudos
        </h2>
      </div>

      <div className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-purple-100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`duration-700 ease-in-out transition-opacity ${
                index === currentSlide ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <img
                src={slide.src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain h-full"
                alt={slide.alt}
              />
              <div className='text-sm lg:text-xl'>

              <p className='absolute lg:w-100 w-60 m-auto left-0 right-0 lg:top-10 top-5 rounded-full bg-purple-700  text-white'>{slide.title}</p>
              <p className='absolute lg:w-50 w-30 m-auto right-0 left-0 lg:bottom-18 bottom-12 rounded-full bg-purple-700  text-white'>{slide.status}</p>
              <p className='absolute lg:w-100 w-60 m-auto left-0 right-0 lg:bottom-10  bottom-6 rounded-full bg-purple-700  text-white'>Duração: {slide.duracao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              } hover:bg-white`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 5000);
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all">
            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 5000);
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all">
            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>

     
       
      </div>

    
    </section>
  );
}

export default Studies;