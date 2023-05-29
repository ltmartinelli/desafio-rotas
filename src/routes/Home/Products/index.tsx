import './styles.css'
import { NavLink, Outlet } from "react-router-dom";

export default function Products()
{
    return (
        <main>
            <div className="container">
                <nav className="products-menu">
                    <NavLink to="/products/computers" className={({ isActive }) => isActive ? "menu-item-active" : "menu-item"}>Computadores</NavLink>
                    <NavLink to="/products/electronics" className={({ isActive }) => isActive ? "menu-item-active" : "menu-item"}>Eletrônicos</NavLink>
                    <NavLink to="/products/books" className={({ isActive }) => isActive ? "menu-item-active" : "menu-item"}>Livros</NavLink>
                </nav>
                <Outlet />
            </div>
        </main>
    );
}