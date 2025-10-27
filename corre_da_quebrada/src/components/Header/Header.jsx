import { useState } from 'react';
import style from './Header.module.css';
import logo_mi from '../../assets/logo_mi.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <a href="#about" className={style.logoLink} onClick={handleLinkClick}>
        <img src={logo_mi} alt="Logo Maria Izabelly" className={style.logo_mi_header} />
      </a>

      {/* Menu Hambúrguer */}
      <button 
        className={`${style.hamburger} ${menuOpen ? style.hamburgerOpen : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu de Navegação */}
      <nav className={`${style.navMenu} ${menuOpen ? style.navOpen : ''}`}>
        <a href="#servicos" className={style.link_header} onClick={handleLinkClick}>Serviços</a>
        <a href="#portfolio" className={style.link_header} onClick={handleLinkClick}>Galeria</a>
        <a href="#depoimentos" className={style.link_header} onClick={handleLinkClick}>Depoimentos</a>
        <a 
          href="https://wa.me/5511993288288" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={style.agendar_header}
          onClick={handleLinkClick}
        >
          Agendar
        </a>
      </nav>
    </header>
  );
}

export default Header;