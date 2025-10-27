import React, { useState, useEffect } from 'react';
import style from './Testimonials.module.css';

const testimonialsData = [
  {
    quote: "Belly, muito obrigada pelo atendimento hoje. Eu amei demais a minha unha. Foi a melhor que fiz até hoje!",
    author: "Cliente Satisfeita"
  },
  {
    quote: "Belly, estou encantada com seu excelente trabalho. Parabéns pelo seu dom, fiquei deslumbrante.",
    author: "Cliente Encantada"
  },
  {
    quote: "Você arrasa bely, parabéns pelo seu excelente trabalho, super indico sempre.",
    author: "Cliente Fiel"
  },
  {
    quote: "Mas adorei muito as unhas sério. Amei seu trabalho, e adorei te conhecer. Já tô pensando no próximo designer.",
    author: "Sabrina Cliente"
  },
  {
    quote: "Belly, eu amei as minhas unhas, meu Deuuus. Estão perfeitas. To me achando. Seu trabalho é incrível.",
    author: "Cliente Feliz"
  },
  {
    quote: "Obrigada Belly amei. Você é uma profissional incrível que exerce com amor e excelência o seu trabalho.",
    author: "Cliente Realizada"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const updateItemsPerPage = () => {
    if (window.innerWidth <= 768) {
      setItemsPerPage(1);
    } else if (window.innerWidth <= 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className={style.testimonialsContainer} id="depoimentos">
      <div className={style.testimonialsHeader}>
        <h2>O que <span>Minhas Clientes</span> Dizem</h2>
      </div>
      <div className={style.carousel}>
        <button onClick={handlePrev} className={`${style.arrow} ${style.left}`}>‹</button>
        <div className={style.carouselInner}>
          <div 
            className={style.carouselTrack} 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className={style.testimonialSlide}>
                <div className={style.testimonialCard}>
                  <div className={style.stars}>★★★★★</div>
                  <p className={style.quote}>"{testimonial.quote}"</p>
                  <p className={style.author}>— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className={`${style.arrow} ${style.right}`}>›</button>
      </div>
    </section>
  );
};

export default Testimonials;