import style from './Footer.module.css'
import butterfly from '../../assets/butterfly.svg'
import insta from '../../assets/insta.png'

function Footer(){
  return(
    <footer id="id_footer">
        <div className={style.container_footer}>
            <img src={butterfly} alt="Borboleta" className={style.butterfly} />
            <div className={style.container_instagram}>
                <p>Conecte-se comigo</p>
                <a href="https://instagram.com/izabelly.beauty"><img src={insta} alt="Instagram" className={style.instagram_img}/></a>
            </div>
            <div className={style.localizacao_footer}>
                <h3>Localização</h3>
                <p>Jardim Nossa Senhora do Carmo - Zona Leste</p>
                <p>São Paulo, SP</p>
            </div>
        </div>
        <hr />
        <p>© 2025 Maria Izabelly. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer