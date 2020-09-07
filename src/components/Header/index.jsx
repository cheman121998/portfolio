/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style.scss';
import { logo, dibble, behance, linkedin } from '../../assets/images';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip, Button, Drawer } from 'antd';

const link = (to, label) => (
    <NavLink
        to={to}
        // activeStyle={{
        //     textDecoration: 'underline',
        // }}
    >
        {label}
    </NavLink>
);

const linkMobile = (to, label) => (
    <NavLink
        to={to}
        activeStyle={{
            width: '100%',
            color: '#3f3d56',
            fontSize: '18px',
        }}
    >
        {label}
    </NavLink>
);
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visiable: false,
            showSearch: true,
        };
        this.showMenu = () => this.setState({ visible: true });
        this.closeMenu = () => this.setState({ visible: false });
    }
    render() {
        const { visible, showSearch } = this.state;
        return (
            <div>
                <section id="header">
                    <div className="navbar" id="mainNav">
                        <div className="container">
                            <div className="sub-navbar">
                                <Link className="navbar-brand" to="./about">
                                    <img src={logo} alt="logo" />
                                </Link>
                                <div className="nav-item">
                                    <nav className="nav-link">
                                        {link('/home', 'Work')}
                                        {link('/about', 'About')}
                                        {link('/resume', 'Resume')}

                                        <Tooltip placement="bottomLeft" title="Contact us">
                                            <button className="contactUs">Contact</button>
                                        </Tooltip>
                                    </nav>
                                </div>
                                <div className="showOnMobile">
                                    <button className="buttonMenu" onClick={this.showMenu}>
                                        <ion-icon name="menu-outline"></ion-icon>
                                    </button>

                                    <Drawer
                                        title="Menu"
                                        placement="right"
                                        closable={false}
                                        onClose={this.closeMenu}
                                        visible={this.state.visible}
                                    >
                                        {linkMobile('/home', 'Work')}
                                        {linkMobile('/about', 'About')}
                                        {linkMobile('/resume', 'Resumne')}

                                        <Tooltip placement="bottomLeft" title="Contact us">
                                            <Button className="contact">Contact</Button>
                                        </Tooltip>
                                    </Drawer>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="intro-text">
                            <h1>Hello, I'm Lisa</h1>
                            <p>
                                Multifunctional designer/developer based in Bath — a traditionally
                                trained designer who codes.
                            </p>
                            <Tooltip placement="topLeft" title="View Work">
                                <Button>View Work</Button>
                            </Tooltip>
                        </div>
                        <div className="group-icon">
                            <span>
                                <Link to="./about">
                                    <img src={dibble} alt="dibble" />
                                </Link>
                            </span>
                            <span>
                                <Link to="./about">
                                    <img src={behance} alt="behance" />
                                </Link>
                            </span>
                            <span>
                                <Link to="./about">
                                    <img src={linkedin} alt="linked in" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Header;
