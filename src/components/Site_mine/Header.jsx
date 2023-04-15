import React, { useState, useContext } from 'react';
import "./index.scss";
import logo from "../../assets/images/Logo.svg";
import admin from "../../assets/images/man.png";
import home from "../../assets/images/uy.svg";
import back from '../../assets/images/back.svg';
import ball from '../../assets/images/bell.svg';
import Card from '../Card/Card';
import About from '../../pages/About/index';
import Payment from '../../pages/Payments/index';
import Error from '../../pages/Error/index';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { context } from '../context/context'

const Header = ({ setMode, setLang }) => {
    const { mode,LANG,lang } = useContext(context);
    const t=LANG[lang.toLowerCase()];
    
    

    const headerStyle = {
        backgroundColor: mode === "LIGHT" ? `#fff` : "#232529",
       
    }
    const btnStyle = {
        backgroundColor: mode === "LIGHT" ? "#fff" : "#232529",
        color: mode === "LIGHT" ? "#232529" : "#fff",
    }
    const selectStyle = {
        backgroundColor: mode === "LIGHT" ? `#fff` : "#232529",
        color: mode === "LIGHT" ? "#232529" : "#fff",


    }
    const sitebarStyle = {
        backgroundColor: mode === "LIGHT" ? `#F2EAE1` : "#2b2d31",
    }
    const hStyle = {
        color: mode === "LIGHT" ? "#000" : "#fff",
    }
    const hrefStyle= {
        color: mode === "LIGHT" ? "#000" : "#ea0202",
    }
   
    return (


        <div className='bigwrap' style={headerStyle}>



            <div style={headerStyle} className="site_container">
                <div className='d-flex'>
                    <div className='site_wrapper'>
                        <div style={sitebarStyle} className='site_bar'>
                            <img className='site_logo' src={logo} width={220} height={24} />

                            <img className='site-admin-logo' src={admin} width={130} height={130} />
                            <h2 style={hStyle}>Karthi Madesh</h2>
                            <p>Admin</p>
                            <ul className='site-bar-list'>
                                <li> <NavLink style={hrefStyle} className='site-bar-link1' to="/">{t.home}</NavLink></li>
                                <li> <a style={hrefStyle} className='site-bar-link2'>{t.course} </a></li>
                                <li> <NavLink style={hrefStyle} className='site-bar-link3' to="/students"> {t.students}</NavLink></li>
                                <li> <NavLink style={hrefStyle} className='site-bar-link4' to="payment">{t.payment} </NavLink></li>
                                <li> <a style={hrefStyle} className='site-bar-link5'> {t.report}</a></li>
                                <li> <a style={hrefStyle} className='site-bar-link6'> {t.settings}</a></li>


                            </ul>
                            <button>{t.logout}</button>
                        </div>
                        <div></div>


                    </div>







                    <div className='site-header'>
                        <div className='site-header-wrap' style={headerStyle}>
                            <button style={btnStyle} className='back-btn'><img src={back} alt="" /></button>
                            <div className='d-flex gap-2'>
                                <select style={selectStyle} className='theme-select' onChange={(e) => {
                                    setMode(e.target.value)
                                    localStorage.setItem('them', e.target.value)
                                }}>
                                    <option disabled selected>{t.selectmode}</option>
                                    <option>LIGHT</option>
                                    <option>DARK</option>
                                </select>
                                <select style={selectStyle} className='theme-select' onChange={(e)=>{
                                    setLang(e.target.value)
                                    localStorage.getItem('language',e.target.value)
                                    }}>
                                    <option disabled selected>{t.selectlanguage}</option>
                                    <option>UZB</option>
                                    <option>ENG</option>
                                    <option>РУС</option>
                                </select>
                                
                              
                            </div>
                            <div className='site-header-input'>
                                <input style={selectStyle} className='header-input' type="search" placeholder={t.search} />
                                <button style={headerStyle}><img src={ball} /></button>
                            </div>


                        </div>

                        <div className='wraps'>
                            <Routes>
                                <Route path='/' element={<Card />} />
                                <Route path='/students' element={<About />} />
                                <Route path='/payment' element={<Payment />} />
                                <Route path='*' element={<Error />} />


                            </Routes>
                        </div>


                    </div>



                </div>

            </div>
        </div>

    );
}

export default Header;