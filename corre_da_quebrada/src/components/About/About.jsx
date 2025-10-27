import style from './About.module.css'

function About(){
  return(
    <section className={style.about} id="about">
        <div className={style.aboutContent}>
            <h1>Maria Izabelly</h1>
            <h2>A Arte da Perfeição em Suas Unhas</h2>
            <p>Da elegância clássica à criatividade vibrante, encontre seu estilo único.</p>
            <a href="https://wa.me/5511993288288" target="_blank" rel="noopener noreferrer" className={style.agendar_about}>Agendar Meu Horário</a>
        </div>
        <a href="#servicos" className={style.scrollDown}>
            <span>↓</span>
        </a>
    </section>
  )
}

export default About