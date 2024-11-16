import React from 'react';

import authCSS from './auth.module.css';
import { IoLanguage } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';

export default function Auth({message}) {

    return <React.Fragment>

        <div className={authCSS.auth_cont}>

            <img src={require('../Images/logo-w-b.png')} alt="" />

            <p>{message}</p>

        </div>

        <div className={authCSS.auth_header}>

            <img src={require('../Images/logo-g-b.png')} alt="" />

            <div className={authCSS.more}>

                <button>
                    <IoLanguage />
                    <IoIosArrowForward />
                </button>

            </div>

        </div>

    </React.Fragment>

}
