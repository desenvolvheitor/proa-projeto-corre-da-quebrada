import React, { useState } from 'react';
import style from './Portfolio.module.css';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const initialImages = allImages.slice(0, 6);

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const imagesToShow = showAll ? allImages : initialImages;

  return (
    <section className={style.portfolio_container} id="portfolio">
      <div className={style.portfolio_header}>
        <h2>
          Inspire-se: <span>Nosso Portfólio</span>
        </h2>
      </div>
      <div className={style.portfolio_grid}>
        {imagesToShow.map((image, index) => (
          <div key={index} className={style.image_wrapper}>
            <img src={image} alt={`Portfolio item ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={style.button_container}>
        <button onClick={() => setShowAll(!showAll)} className={style.portfolio_button}>
          {showAll ? 'Ver Menos' : 'Ver Mais'}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;