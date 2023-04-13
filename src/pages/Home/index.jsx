import React from 'react';
import './index.scss'
import pul from '../../assets/images/pul.svg';

const index = () => {
    return (
        <div>
            <div className='card'>
                    <img src={pul } alt=""  width={48} height={38}/>
                    <p>Puople</p>
                    <p className='card-num'>324234</p>
                 </div>
        </div>
    );
};

export default index;