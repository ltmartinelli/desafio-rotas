import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import homeImg from '../../assets/home.svg'

export default function Header(){
    return(
        <header>
            <div className="header-content-container container">
                <nav className="navbar">
                    <NavLink to="/home" className={({isActive}) => isActive ? "menu-item menu-item-active" : "menu-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "menu-item menu-item-active" : "menu-item"}>
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "menu-item menu-item-active" : "menu-item"}>
                        Sobre nós
                    </NavLink>
                </nav>
                <Link to="/">
                    <img src={homeImg} alt="home" />
                </Link>
            </div>
        </header>
    );
}