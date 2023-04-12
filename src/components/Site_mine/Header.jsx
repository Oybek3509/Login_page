import React from 'react';
import "./index.scss";
import logo from "../../assets/images/Logo.svg";
import admin from "../../assets/images/man.png";
import home from "../../assets/images/uy.svg";


function Header() {
    return (
        <>
        <div className="site_container">
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


        </div>
        </>
    );
}

export default Header;