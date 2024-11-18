import React from 'react';

import authCSS from './auth.module.css';
// import { IoLanguage } from 'react-icons/io5';
// import { IoIosArrowForward } from 'react-icons/io';
import TrBtn from '../Components/Translation-Button/TrBtn';
import { useTranslation } from 'react-i18next';

export default function Auth({message}) {

    const {i18n} = useTranslation();

    return <React.Fragment>

        <div className={authCSS.auth_cont}>

            <div style={i18n.language === 'en' ? {right: '20px'} : {left: '20px'}} className={authCSS.big_cont_tr}>
                <TrBtn wbg={true} />
            </div>

            <img src={require('../Images/logo-w-b.png')} alt="" />

            <p>{message}</p>

        </div>

        <div className={authCSS.auth_header}>

            <img src={require('../Images/logo-g-b.png')} alt="" />

            <div className={authCSS.more}>

                <TrBtn wbg={false} />

            </div>

        </div>

    </React.Fragment>

}
