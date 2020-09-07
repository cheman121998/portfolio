import React from 'react';
import './style.scss';
import { logo, dibble, behance, linkedin } from '../../assets/images';
import { Link } from 'react-router-dom';
import { Tooltip, Button } from 'antd';

class Header extends React.Component {
    render() {
        return (
            <div>
                <section id="header">
                    <nav className="navbar" id="mainNav">
                        <div className="container">
                            <Link className="navbar-brand" to="./about">
                                <img src={logo} alt="logo" />
                            </Link>
                            {/* <button
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                className="navbar-toggler navbar-toggler-right"
                                type="button"
                                data-toogle="collapse"
                                aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fa fa-bars"></i>
                            </button> */}
                            <div className="collapse" id="navbarResponsive">
                                <ul id="nav" className="nav navbar-nav">
                                    <li className="nav-item" role="presentation">
                                        <Link to="./work" className="nav-link active">
                                            Work
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="./about" className="nav-link ">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="./resume" className="nav-link">
                                            Resume
                                        </Link>
                                    </li>
                                    <Tooltip trigger="click" placement="topLeft" title="Contact">
                                        <button>Contact</button>
                                    </Tooltip>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="intro-text">
                            <h1>Hello, I'm Lisa</h1>
                            <p>
                                Multifunctional designer/developer based in Bath — a traditionally
                                trained designer who codes.
                            </p>
                            <Tooltip placement="topLeft" title="View Work">
                                <button>View Work</button>
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
