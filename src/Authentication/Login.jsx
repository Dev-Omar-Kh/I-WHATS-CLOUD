import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import authCSS from './auth.module.css';
import formCSS from '../Styles/forms.module.css';
import Auth from './Auth';
import { IoMdUnlock } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

export default function Login() {

    // ====== translate-hook ====== //

    const {t , i18n} = useTranslation();

    // ====== handle-showing-password ====== //

    const [password, setPassword] = useState(false);

    const displayingPassword = (state , setState) => {

        setState(!state);

    }

    // ====== animation ====== //

    const fromVariants = {

        hidden: {opacity: 0 , y: 80},
        visible: {opacity: 1 , y: 1, transition: {duration: 0.5}}

    }

    const eyeVariants = {

        hidden : {opacity : 0},
        visible : {opacity : 1 , transition : {duration : 0.3}}

    }

    const testing = (e) => {

        e.preventDefault();

    }

    return <React.Fragment>

        <div className={`${authCSS.container}`}>

            <div className={authCSS.form_cont}>

                <motion.form 
                    variants={fromVariants} initial='hidden' animate='visible' className={authCSS.form}
                    onSubmit={testing}
                >

                    <div className={authCSS.form_header}>
                        <IoMdUnlock />
                        <span>{t('loginWord')}</span>
                    </div>

                    <div className={formCSS.input_cont}>

                        <div 
                            className={formCSS.loader} 
                            style={i18n.language === 'en' ? {right: '10px'} : {left: '10px'}}
                        ></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>{t('emailInputLabel')} :</span>
                        </label>

                        <input 
                            type="text" id="email" placeholder={t('emailInputPlaceholder')} 
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div 
                            onClick={() => displayingPassword(password , setPassword)} className={formCSS.eyes_cont}
                            style={i18n.language === 'en' ? {right: '0px'} : {left: '0px'}}
                        >
                            {password ?
                                <motion.span key={'h1'} variants={eyeVariants}><BsEyeSlash /></motion.span> :
                                <motion.span key={'s1'} variants={eyeVariants}><BsEye /></motion.span>
                            }
                        </div>

                        <label htmlFor="">
                            <span className={formCSS.label}>{t('passwordInputLabel')} :</span>
                        </label>

                        <input 
                            type={password ? "text" : "password"} id="password" placeholder={t('passwordInputPlaceholder')} 
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <Link to={'/register'} className={formCSS.form_link}>{t('doNotHaveAnAccount')}</Link>

                    <motion.button whileTap={{scale: 0.95}} className={formCSS.submit}>{t('loginWord')}</motion.button>

                </motion.form>

            </div>

            <Auth message={t('loginSlogan')} />

        </div>

    </React.Fragment>

}
