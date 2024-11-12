import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import authCSS from './auth.module.css';
import formCSS from '../Styles/forms.module.css';

export default function Register() {

    // ====== handle-showing-password ====== //

    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const displayingPassword = (state , setState) => {

        setState(!state);

    }

    console.log(confirmPassword);

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

        <div className={`common_container ${authCSS.container}`}>

            <motion.form 
                variants={fromVariants} initial='hidden' animate='visible' className={authCSS.form}
                onSubmit={testing}
            >

                <div className={authCSS.form_header}>
                    <img src={require('../Images/logo-g-b.png')} alt="" />
                </div>

                <div className={formCSS.input_cont}>

                    <div className={formCSS.loader}></div>

                    <label htmlFor="">
                        <span className={formCSS.label}>Name :</span>
                    </label>

                    <input type="text" id="name" />

                </div>

                <div className={formCSS.input_cont}>

                    <div className={formCSS.loader}></div>

                    <label htmlFor="">
                        <span className={formCSS.label}>Email :</span>
                    </label>

                    <input type="text" id="email" />

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

                    <input type={password ? "text" : "password"} id="password" />

                </div>

                <div className={formCSS.input_cont}>

                    <div onClick={() => displayingPassword(confirmPassword , setConfirmPassword)} className={formCSS.eyes_cont}>
                        {confirmPassword ?
                            <motion.span key={'h1'} variants={eyeVariants}><BsEyeSlash /></motion.span> :
                            <motion.span key={'s1'} variants={eyeVariants}><BsEye /></motion.span>
                        }
                    </div>

                    <label htmlFor="">
                        <span className={formCSS.label}>Confirm Password :</span>
                    </label>

                    <input type={confirmPassword ? "text" : "password"} id="confirmPassword" />

                </div>

                <Link to={'/login'} className={formCSS.form_link}>Already have an account?</Link>

                <motion.button whileTap={{scale: 0.95}} className={formCSS.submit}>Register</motion.button>

            </motion.form>

        </div>

    </React.Fragment>

}
