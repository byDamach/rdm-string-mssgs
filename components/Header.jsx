import React, { useState, useContext } from 'react';
import "@styles/Header.scss";
import Menu from '@components/Menu';
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo_mercafam from "@logos/logo_mercafam.png";
import AppContext from '@context/AppContext';
import shoppingCartLogo from "@icons/icon_shopping_cart.svg";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="nav">
            <img src={menu} alt="menu" className="menu"/>
                <img src={logo_mercafam} alt="logo" className="nav-logo"/>
            <div className="navbar-search">
                <input type="text" placeholder="Buscar" className='search-icon'/>
                <img src={shoppingCartLogo} alt="logo" className="logo-icon"/>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>email@example.com</li>
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCartLogo} alt="shopping_cart"/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;