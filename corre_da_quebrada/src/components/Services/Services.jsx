import style from './Services.module.css';

const servicesData = [
  {
    icon: '⭐',
    title: 'Alongamento em Fibra de Vidro',
    description: 'Técnica premium para unhas longas, naturais e resistentes que você sempre sonhou.',
  },
  {
    icon: '🛡️',
    title: 'Banho de Gel & Blindagem',
    description: 'Proteção e fortalecimento das unhas naturais com acabamento impecável e duradouro.',
  },
  {
    icon: '💅',
    title: 'Esmaltação em Gel',
    description: 'Cores vibrantes e duradouras com secagem instantânea e brilho de salão por semanas.',
  },
  {
    icon: '💎',
    title: 'Nail Art Personalizada',
    description: 'Da elegância clássica ao artístico ousado. Criamos a arte perfeita para você.',
  },
];

const Services = () => {
  return (
    <section className={style.servicesContainer} id="servicos">
      <div className={style.servicesHeader}>
        <h2><span>Serviços Exclusivos</span> para Você</h2>
        <p>Arte, cuidado e perfeição em cada detalhe</p>
      </div>
      <div className={style.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={style.serviceCard}>
            <div className={style.iconContainer}>
              <span className={style.icon}>{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;