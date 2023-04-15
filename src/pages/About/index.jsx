import React,{useContext,useState} from 'react';
import "./index.scss";
import sort from '../../assets/images/sort.svg';
import person from '../../assets/images/qora.png';
import pen from '../../assets/images/pen 1.svg';
import del from '../../assets/images/musir.svg';
import { context } from '../../components/context/context'
const index = () => {
    const { mode,LANG,lang} = useContext(context);
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
               <section  className='student'>
            <div  className="student__wrapper">
                <div style={headerStyle} className="student__top">
                    <h2 style={text} className="student__title">{t.studentslist}</h2>
                    <div className="student__top-right">
                        <img src={sort} alt="sort icon" />
                        <button style={btnStyle} className='student__btn'>{t.addnewstudent}</button>
                    </div>
                </div>
                <div style={tableStyle}  className="student__bottom card">
                    <table  className='card__table-wrapper'>
                        <thead style={tableStyle} className='card__table--head'>
                            <tr style={tableStyle} className='card__head-row'>
                                <th className='card__head-text'></th>
                                <th className='card__head-text'>{t.name}</th>
                                <th className='card__head-text'>{t.email}</th>
                                <th className='card__head-text'>{t.phone}</th>
                                <th className='card__head-text'>{t.enrollnumber}</th>
                                <th className='card__head-text'>{t.dateofadmission}</th>
                                <th className='card__head-text'></th>
                            </tr>
                        </thead>
                        <tbody className='card__table--body'>
                            <tr style={cardStyle} className='card__body-row'>
                                <td className='card__body-img'><img src={person} alt="person image" /></td>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>karthi@gmmail.com</td>
                                <td className='card__body-text'>7305477760</td>
                                <td className='card__body-text'>1234567305477760</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img className='mb-0' src={pen} alt="pen icon" /> <img className='mb-1' src={del} alt="delete icon" /></td>
                            </tr>
                            <hr style={hreStyle} />
                            <tr style={cardStyle} className='card__body-row'>
                                <td className='card__body-img'><img src={person} alt="person image" /></td>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>karthi@gmmail.com</td>
                                <td className='card__body-text'>7305477760</td>
                                <td className='card__body-text'>1234567305477760</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img className='mb-0' src={pen} alt="pen icon" /> <img className='mb-1' src={del} alt="delete icon" /></td>
                            </tr>
                            <hr style={hreStyle}/>
                            <tr style={cardStyle} className='card__body-row'>
                                <td className='card__body-img'><img src={person} alt="person image" /></td>
                                <td className='card__body-text'>Karthi</td>
                                <td className='card__body-text'>karthi@gmmail.com</td>
                                <td className='card__body-text'>7305477760</td>
                                <td className='card__body-text'>1234567305477760</td>
                                <td className='card__body-text'>08-Dec, 2021</td>
                                <td className='card__body-icon'><img className='mb-0' src={pen} alt="pen icon" /> <img className='mb-1' src={del} alt="delete icon" /></td>
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