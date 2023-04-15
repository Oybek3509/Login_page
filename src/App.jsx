import React,{useState} from 'react';

import Sitebar from './components/Site_mine/Header';
// import Footer from './components/Footer';
// import Login from './components/Login_page/Main';
// import Header from './components/Header/index';
import {context} from './components/context/context';
import { BrowserRouter } from 'react-router-dom' 
import LANG from './lang/lang';
// import Card from './components/Card/Card';
function App() {
  const [lang,setLang]=useState(localStorage.getItem('language')|| 'uzb');
    const [mode,setMode]=useState(localStorage.getItem('them'));

    
    return (
        







      <context.Provider value={{lang, mode,LANG}}>
      <BrowserRouter>
       {/* <Header/> */}
             {/* <Login /> */}
             <Sitebar setLang={setLang} setMode={setMode}/>
              {/* <Card/> */}
            {/* <Home/> */}
              
      </BrowserRouter>
  
    </context.Provider>   
        
    );
}

export default App;