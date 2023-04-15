import React,{useContext} from 'react';
import "./index.scss";
import wapka from '../../assets/images/wapka.svg';
import wapka2 from '../../assets/images/2.svg';
import wapka3 from '../../assets/images/3.svg';
import wapka4 from '../../assets/images/4.svg';
import {context} from '../context/context'
const Card = () => {
   const { mode,LANG,lang } = useContext(context);
   const t=LANG[lang.toLowerCase()];

    // const {item:{email, first_name}} = props;
    return (

        // <div className='card'>
        //     <div className="card-body">
        //         <h3 className='card-title'>{first_name}</h3>
        //         <p className='card-text'>{email}</p>
        //     </div>
        // </div>
        
                 
                 <div className='d-flex gap-5 card-box'>
                  <div className='card1'>
                    <img src={wapka } alt=""  width={48} height={38}/>
                    <p>{t.students}</p>
                    <p className='card-num'>243</p>
                 </div>
                 <div className='card2'>
                    <img src={wapka2 } alt=""  width={48} height={38}/>
                    <p>{t.course}</p>
                    <p className='card-num'>13</p>
                 </div>
                 <div className='card3'>
                    <img src={wapka3 } alt=""  width={48} height={38}/>
                    <p>{t.payments}</p>
                    <p className='card-num'>556,000</p>
                 </div>
                 <div className='card4'>
                    <img src={wapka4 } alt=""  width={48} height={38}/>
                    <p>{t.users}</p>
                    <p className='card-num'>3</p>
                 </div>
                 </div>
    );
};



export default Card;