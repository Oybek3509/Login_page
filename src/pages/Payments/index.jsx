import React from 'react';
import "./index.scss";
import tepa from '../../assets/images/tepa.svg';
import koz from '../../assets/images/koz.svg';
import pen from '../../assets/images/pen 1.svg';
import del from '../../assets/images/musir.svg';
const index = () => {
    return (
        <div>
               <section className='student'>
            <div className="student__wrapper">
                <div className="student__top">
                    <h2 className="student__title">Payment Details</h2>
                    <div className="student__top-right">
                        <img src={tepa} alt="sort icon" />
                        
                    </div>
                </div>
                <div className="student__bottom card">
                    <table className='card__table-wrapper'>
                        <thead className='card__table--head'>
                            <tr className='card__head-row'>
                             
                                <th className='card__head-text'> Name</th>
                                <th className='card__head-text'> Payment Schedule</th>
                                <th className='card__head-text'>Bill Number</th>
                                <th className='card__head-text'>Amount Paid</th>
                                <th className='card__head-text'>Balance amount</th>
                                <th className='card__head-text'>Date </th>
                                <th className='card__head-text'></th>
                            </tr>
                        </thead>
                        <tbody className='card__table--body'>
                            <tr className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>First</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img src={koz} alt="pen icon" /> </td>
                            </tr>
                            <tr className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>First</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img src={koz} alt="pen icon" /> </td>
                            </tr>
                            <tr className='card__body-row'>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>First</td>
                                <td className='card__body-text'>00012223</td>
                                <td className='card__body-text'>INR 35,000</td>
                                <td className='card__body-text'>INR 55,000</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img src={koz} alt="pen icon" /> </td>
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