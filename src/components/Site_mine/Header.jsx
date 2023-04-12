import React from 'react';
import "./index.scss";
import logo from "../../assets/images/Logo.svg";
import admin from "../../assets/images/man.png";
import home from "../../assets/images/uy.svg";
import back from '../../assets/images/back.svg';
import ball from '../../assets/images/bell.svg';
import { BrowserRouter } from 'react-router-dom';

const Header = ()=> {
    return (
        
        <BrowserRouter>
        
        
       
        <div className="site_container">
            <div className='d-flex'>
            <div className='site_wrapper'>
           <div className='site_bar'>
                <img className='site_logo' src={logo}  width={220} height={24}/>
                   
                    <img className='site-admin-logo' src={admin} width={130} height={130} />
                   <h2>Karthi Madesh</h2>
                    <p>Admin</p>
                    <ul className='site-bar-list'>
                        <li> Home</li>
                        <li>Course</li>
                        <li>Students</li>
                        <li>Payment</li>
                        <li>Report</li>
                        <li>Settings</li>
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
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto?</h1>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto?</h1>

            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto?</h1>

            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto?</h1>


            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto?</h1>




            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto?</h1>



           </div>


        </div>


               
            </div>
         
        </div>
        </BrowserRouter>
       
    );
}

export default Header;