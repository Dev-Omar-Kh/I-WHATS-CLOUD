import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import authCSS from './auth.module.css';
import formCSS from '../Styles/forms.module.css';
import Auth from './Auth';
import { IoMdUnlock } from 'react-icons/io';

export default function Login() {

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
                        <span>Login</span>
                    </div>

                    <div className={formCSS.input_cont}>

                        <div className={formCSS.loader}></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Email :</span>
                        </label>

                        <input type="text" id="email" placeholder='Enter your email' />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div onClick={() => displayingPassword(password , setPassword)} className={formCSS.eyes_cont}>
                            {password ?
                                <motion.span key={'h1'} variants={eyeVariants}><BsEyeSlash /></motion.span> :
                                <motion.span key={'s1'} variants={eyeVariants}><BsEye /></motion.span>
                            }
                        </div>

                        <label htmlFor="">
                            <span className={formCSS.label}>Password :</span>
                        </label>

                        <input type={password ? "text" : "password"} id="password" placeholder='Enter your password' />

                    </div>

                    <Link to={'/register'} className={formCSS.form_link}>Don't have an account?</Link>

                    <motion.button whileTap={{scale: 0.95}} className={formCSS.submit}>Login</motion.button>

                </motion.form>

            </div>

            <Auth 
                message={`
                    Welcome back to I-Whats-Cloud. Please log in to access the site's features. 
                    If you don't have an account, kindly create one to get started.
                `} 
            />

        </div>

    </React.Fragment>

}
