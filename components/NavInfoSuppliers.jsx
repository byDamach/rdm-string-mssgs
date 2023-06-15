import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "@styles/NavInfoSuppliers.scss";

const NavInfoSuppliers = () => {
    const [activeLink, setActiveLink] = useState('');
    
    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <nav className="nav-info-suppliers">
            <div className='navigation-menu'>
                <Link
                    to="SupplierObjectives"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    active={activeLink === 'SupplierObjectives'}
                >
                    Objetivos
                </Link>
                <Link
                    to="PointOfSaleStaff"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    active={activeLink === 'PointOfSaleStaff'}
                >
                    Personal
                </Link>
                <Link
                    to="Procedures"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    active={activeLink === 'Procedures'}
                >
                    Procedimientos
                </Link>
                <Link
                    to="Contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    active={activeLink === 'Contacts'}
                >
                    Contactos
                </Link>
                <Link
                    to="Branches"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    active={activeLink === 'Branches'}
                >
                    Sucursales
                </Link>
            </div>
        </nav>
    );
}

export default NavInfoSuppliers;