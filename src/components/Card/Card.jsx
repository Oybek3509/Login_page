import React from 'react';
import "./index.scss";
import wapka from '../../assets/images/wapka.svg';
const Card = () => {

    // const {item:{email, first_name}} = props;
    return (

        // <div className='card'>
        //     <div className="card-body">
        //         <h3 className='card-title'>{first_name}</h3>
        //         <p className='card-text'>{email}</p>
        //     </div>
        // </div>
                 <div className='card'>
                    <img src={wapka } alt=""  width={48} height={38}/>
                    <p>Students</p>
                    <p className='card-num'>243</p>
                 </div>
    );
};



export default Card;