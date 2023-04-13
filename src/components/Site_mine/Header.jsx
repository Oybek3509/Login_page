import React from 'react';
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
import { Route,Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = ()=> {
    return (
        
        
        
        
       
        <div className="site_container">
            <div className='d-flex'>
            <div className='site_wrapper'>
           <div className='site_bar'>
                <img className='site_logo' src={logo}  width={220} height={24}/>
                   
                    <img className='site-admin-logo' src={admin} width={130} height={130} />
                   <h2>Karthi Madesh</h2>
                    <p>Admin</p>
                    <ul className='site-bar-list'>
                        <li> <NavLink className='site-bar-link1' to="/"> Home</NavLink></li>
                        <li> <a className='site-bar-link2'> Course</a></li>
                        <li> <NavLink className='site-bar-link3' to="/students"> Students</NavLink></li>
                        <li> <NavLink className='site-bar-link4' to="payment"> Payment</NavLink></li>
                        <li> <a className='site-bar-link5'> Report</a></li>
                        <li> <a className='site-bar-link6'> Settings</a></li>
                       
                       
                    </ul>
                    <button>Logout</button>
           </div>
           <div></div>


            </div>







            <div className='site-header'>
           <div className='site-header-wrap'>
             <button className='back-btn'><img src={back} alt="" /></button>
             <div className='site-header-input'>
                <input className='header-input' type="search" placeholder='Search...'/>
                <button><img src={ball}  /></button>
             </div>

           </div>

           <div className='wraps'>
            <Routes>
             <Route path='/' element={<Card/>}/>
             <Route path='/students' element={<About/>}/>
             <Route path='/payment' element={<Payment/>}/>
             <Route path='*' element={<Error/>}/>
                
                
            </Routes> 
           </div>


        </div>


               
            </div>
         
        </div>
        
       
    );
}

export default Header;