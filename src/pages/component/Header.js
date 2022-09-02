import React, { Component } from 'react'
import Logo from '../../images/MOVIEDOM1.png';
import HeaderComp from './HeaderComp';
import HeaderNav from './HeaderNav';
import NavIcons from './NavIcons';

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header_shadow">
                        <div className="header_container row">

                            <div class="header_logo">
                                <a href="index.html">
                                    <img src={Logo} alt="logo" />
                                </a>
                            </div>
                            <HeaderNav />
                            <NavIcons />
                        </div>
                       <HeaderComp/>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header