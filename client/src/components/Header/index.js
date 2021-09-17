import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

import { Content, MainLogo, NavLink } from './Header.styles';

const Header = () => (
    <Content>
        <NavLink to='/'>
            <MainLogo src={Logo} alt='main-logo' />
        </NavLink>
        <NavLink to='/portfolio'>
            Portfolio
        </NavLink>
        <NavLink to='/about'>
            About
        </NavLink>
    </Content>
);

export default Header;