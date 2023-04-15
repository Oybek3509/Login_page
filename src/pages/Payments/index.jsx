import React,{useContext} from 'react';
import "./index.scss";
import tepa from '../../assets/images/tepa.svg';
import koz from '../../assets/images/koz.svg';
import { context } from '../../components/context/context'
const index = () => {
    const { mode,LANG,lang } = useContext(context);
    const t=LANG[lang.toLowerCase()];
    const headerStyle = {
        backgroundColor: mode === "LIGHT" ? `#fff` : "#232529",
        
    }
    const text = {
        color: mode === "LIGHT" ? `#232529` : "#fff",
    }
    const tableStyle = {
        backgroundColor: mode === "LIGHT" ? `#fff` : "#35383F",
        color: mode === "LIGHT" ? '#000': '#000'
    }
    const hreStyle = {
       
        color: mode === "LIGHT" ? '#fff': '#35383F'
    }
    const cardStyle = {
        backgroundColor: mode === "LIGHT" ? `#fff` : "#4a4c50",
        color: mode === "LIGHT" ? '#000': '#fff'
    }
    const btnStyle = {
        backgroundColor: mode === "LIGHT" ? `#FEAF00` : "#4a4c50",
        color: mode === "LIGHT" ? '#fff': '#fff'
    }
    return (
        <div>
               <section className='student'>
            <div className="student__wrapper">
                <div className="student__top">
                    <h2 style={text} className="student__title">{t.paymentdetails}</h2>
                    <div className="student__top-right">
                        <img src={tepa} alt="sort icon" />
                        
                    </div>
                </div>
                <div style={tableStyle} className="student__bottom card">
                    <table className='card__table-wrapper'>
                        <thead style={tableStyle} className='card__table--head'>
                            <tr style={tableStyle} className='card__head-row'>
                             
                                <th className='card__head-text'>{t.name}</th>
                                <th className='card__head-text'>{t.paymentschedule}</th>
                                <th className='card__head-text'>{t.billnumber}</th>
                                <th className='card__head-text'>{t.amountpaid}</th>
                                <th className='card__head-text'>{t.balanceamount}</th>
                                <th className='card__head-text'>{t.date} </th>
                                <th className='card__head-text'></th>
                            </tr>
                        </thead>
                        <tbody className='card__table--body'>
                            <tr style={cardStyle} className='card__body-row'>
                                
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>{t.first}</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img className='mb-1' src={koz} alt="pen icon" /> </td>
                            </tr>
                            <hr style={hreStyle}/>
                            <tr style={cardStyle} className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>{t.first}</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img className='mb-1' src={koz} alt="pen icon" /> </td>
                            </tr>
                            <hr style={hreStyle}/>
                            <tr style={cardStyle} className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>{t.first}</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img className='mb-1' src={koz} alt="pen icon" /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        </div>
    );
};

export default index;