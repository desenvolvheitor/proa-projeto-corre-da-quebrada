import style from './CTA.module.css';

const CTA = () => {
  return (
    <section className={style.ctaContainer}>
      <h2>Pronta para a <span>Transformação?</span></h2>
      <p>
        Suas unhas são o seu melhor acessório. Clique no botão abaixo,
        fale diretamente comigo pelo WhatsApp e vamos agendar o seu
        momento.
      </p>
      <a 
        href="https://wa.me/5511993288288" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={style.ctaButton}
      >
        Quero Agendar Agora!
      </a>
    </section>
  );
};

export default CTA;