import React, { Component } from 'react'
import Logo from '../../images/MOVIEDOM1.png'
import FooterNav from './FooterNav'
import Fac from '../../images/Vector (7).png';
import Ins from '../../images/Vector (1).png';
import Tw from '../../images/Vector (5).png';
import You from '../../images/Vector (6).png';




export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer_container">
                        <div className="header_logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="links">
                   <FooterNav/>
                        </div>
                        <div className="social_media">
                            <ul className="row">
                                <li><img src={Tw} alt="" srcset=""/></li>
                                <li><img src={You} alt="" srcset=""/></li>
                                <li><img src={Fac} alt="" srcset=""/></li>
                                <li><img src={Ins} alt="" srcset=""/></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer