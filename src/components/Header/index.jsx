import React from 'react';
import "./index.scss";
import back from '../../assets/images/back.svg';
import ball from '../../assets/images/bell.svg';
const index = () => {
    return (
        <div className='site-header'>
           <div className='site-header-wrap'>
             <button className='back-btn'><img src={back} alt="" /></button>
             <div className='site-header-input'>
                <input className='header-input' type="search" placeholder='Search...'/>
                <button><img src={ball}  /></button>
             </div>

           </div>

        </div>
    );
};

export default index;