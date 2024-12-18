import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { BsEye, BsEyeSlash } from 'react-icons/bs';

import authCSS from './auth.module.css';
import formCSS from '../Styles/forms.module.css';
import Auth from './Auth';
import { IoIosArrowBack, IoIosArrowForward, IoMdAddCircleOutline } from 'react-icons/io';
import moment from 'moment-timezone';
import { countries } from 'country-data';
import { useTranslation } from 'react-i18next';

export default function Register() {

    // ====== translate-hook ====== //

    const {t , i18n} = useTranslation();

    // ====== fetch-timezone ====== //

    const timezones = moment.tz.names();

    // ====== search-timezone ====== //

    const [filterText, setFilterText] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState('');

    const filteredTimezones = timezones.filter(zone =>
        zone.replace(/\s+/g, '').toLowerCase().includes(filterText.replace(/\s+/g, '').toLowerCase())
    );

    // ====== search-country-code ====== //

    const countryCodes = countries.all.map(country => ({
        name: country.name,
        code: country.countryCallingCodes[0]
    }));

    const [filterTextCd, setFilterTextCd] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    const filteredCountryCode = countryCodes.filter(cd =>
        cd.name.replace(/\s+/g, '').toLowerCase().includes(filterTextCd.replace(/\s+/g, '').toLowerCase())
    );

    // ====== display-drop-list ====== //

    const [displayDropList, setDisplayDropList] = useState({list1: false, list2: false});

    const toggleDropList = (list) => {

        setDisplayDropList((prevState) => ({
            ...prevState,
            [list]: !prevState[list],
        }));

    }

    const list1Ref = useRef(null);
    const list2Ref = useRef(null);

    const handleClickOutside = useCallback((event) => {

        if (list1Ref.current && !list1Ref.current.contains(event.target)) {
            setDisplayDropList((prev) => ({ ...prev, list1: false }));
        }

        if (list2Ref.current && !list2Ref.current.contains(event.target)) {
            setDisplayDropList((prev) => ({ ...prev, list2: false }));
        }

    }, []);

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [handleClickOutside]);

    // ====== handle-showing-password ====== //

    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const displayingPassword = (state , setState) => {

        setState(!state);

    }

    const testing = (e) => {

        e.preventDefault();

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

    const dropListVariants = {

        hidden: {opacity: 0 , height: 0},
        visible: {opacity: 1 , height: 'auto', transition: {duration: 0.3}}

    }

    return <React.Fragment>

        <div className={`${authCSS.container}`}>

            <div className={authCSS.form_cont}>

                <motion.form 
                    variants={fromVariants} initial='hidden' animate='visible' exit={'hidden'} className={authCSS.form}
                    onSubmit={testing}
                >

                    <div className={authCSS.form_header}>
                        <IoMdAddCircleOutline />
                        <span>{t('registerWord')}</span>
                    </div>

                    <div className={formCSS.input_cont}>

                        <div 
                            className={formCSS.loader} 
                            style={i18n.language === 'en' ? {right: '10px'} : {left: '10px'}}
                        ></div>

                        <label htmlFor="">
                            <span className={formCSS.label}>{t('nameInputLabel')} :</span>
                        </label>

                        <input 
                            type="text" id="name" placeholder={t('nameInputPlaceholder')} 
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

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

                    <div ref={list1Ref} className={formCSS.input_cont}>

                        <label htmlFor="timezone">
                            <span className={formCSS.label}>{t('timezoneInputLabel')} :</span>
                        </label>

                        <div className={formCSS.select_cont}>

                            <div 
                                onClick={() => toggleDropList('list1')} 
                                className={formCSS.select} 
                                style={{borderColor: displayDropList.list1 ? 'var(--m-green-color)' : 'var(--b-gray-color)'}}
                            >
                                <p
                                    style={{
                                        color: selectedTimezone === t('timezoneInputPlaceholder') || selectedTimezone === ''
                                        ? 'var(--b-gray-color)' : 'var(--r-black-color)'
                                    }}
                                >{selectedTimezone || t('timezoneInputPlaceholder')}</p>
                                {i18n.language === 'en' ? <IoIosArrowForward 
                                    style={{
                                        rotate: displayDropList.list1 ? '90deg' : '0deg' , 
                                        color: displayDropList.list1 ? 'var(--m-green-color)' : 'var(--b-gray-color)'
                                    }} 
                                /> : <IoIosArrowBack 
                                    style={{
                                        rotate: displayDropList.list1 ? '-90deg' : '0deg' , 
                                        color: displayDropList.list1 ? 'var(--m-green-color)' : 'var(--b-gray-color)'
                                    }} 
                                />}
                            </div>

                            <AnimatePresence>

                                {displayDropList.list1 && <motion.div 
                                    variants={dropListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                    className={formCSS.options_cont}
                                >

                                    <div className={formCSS.search_select}>

                                        <input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)}  />

                                    </div>

                                    <div className={formCSS.options_scroll}>

                                        {filteredTimezones.length === 0 ?
                                            <div className={formCSS.option}>
                                                <p>{t('selectNoResult')}</p>
                                            </div> : 
                                            (

                                                <>
                                                
                                                    <div 
                                                        className={`
                                                            ${formCSS.option} 
                                                            ${
                                                                selectedTimezone === t('timezoneInputPlaceholder') 
                                                                || selectedTimezone === ''? 
                                                                formCSS.selected_option: ''
                                                            }
                                                        `}
                                                        onClick={() => {
                                                            setSelectedTimezone(t('timezoneInputPlaceholder'));
                                                            toggleDropList('list1');
                                                        }}
                                                    >
                                                        <p>{t('timezoneInputPlaceholder')}</p>
                                                    </div>

                                                    {filteredTimezones.map((zone , idx) => 
                                                        <div 
                                                            key={idx} 
                                                            className={`
                                                                ${formCSS.option} 
                                                                ${selectedTimezone === zone ? formCSS.selected_option: ''}
                                                            `}
                                                            onClick={() => {
                                                                setSelectedTimezone(zone);
                                                                toggleDropList('list1');
                                                                setFilterText('')
                                                            }}
                                                        >
                                                            <p>{zone}</p>
                                                        </div>
                                                    )}
                                                
                                                </>
                                            )
                                        }

                                    </div>

                                </motion.div>}

                            </AnimatePresence>

                        </div>

                    </div>

                    <div ref={list2Ref} className={formCSS.input_cont}>

                        <label htmlFor="countryCode">
                            <span className={formCSS.label}>{t('countryCodeInputLabel')} :</span>
                        </label>

                        <div className={formCSS.select_cont}>

                            <div 
                                onClick={() => toggleDropList('list2')} 
                                className={formCSS.select} 
                                style={{borderColor: displayDropList.list2 ? 'var(--m-green-color)' : 'var(--b-gray-color)'}}
                            >
                                <p
                                    style={{
                                        color: selectedCountryCode === t('countryCodeInputPlaceholder') || selectedCountryCode === ''
                                        ? 'var(--b-gray-color)' : 'var(--r-black-color)'
                                    }}
                                >{selectedCountryCode || t('countryCodeInputPlaceholder')}</p>
                                {i18n.language === 'en' ? <IoIosArrowForward 
                                    style={{
                                        rotate: displayDropList.list2 ? '90deg' : '0deg' , 
                                        color: displayDropList.list2 ? 'var(--m-green-color)' : 'var(--b-gray-color)'
                                    }} 
                                /> : <IoIosArrowBack 
                                    style={{
                                        rotate: displayDropList.list2 ? '-90deg' : '0deg' , 
                                        color: displayDropList.list2 ? 'var(--m-green-color)' : 'var(--b-gray-color)'
                                    }} 
                                />}
                            </div>

                            <AnimatePresence>

                                {displayDropList.list2 && <motion.div 
                                    variants={dropListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                    className={formCSS.options_cont}
                                >

                                    <div className={formCSS.search_select}>

                                        <input type="text" value={filterTextCd} onChange={(e) => setFilterTextCd(e.target.value)}  />

                                    </div>

                                    <div className={formCSS.options_scroll}>

                                        {filteredCountryCode.length === 0 ?
                                            <div className={formCSS.option}>
                                                <p>{t('selectNoResult')}</p>
                                            </div> : 
                                            (

                                                <>
                                                
                                                    <div 
                                                        className={`
                                                            ${formCSS.option} 
                                                            ${
                                                                selectedCountryCode === t('countryCodeInputPlaceholder') 
                                                                || selectedCountryCode === ''? 
                                                                formCSS.selected_option: ''
                                                            }
                                                        `}
                                                        onClick={() => {
                                                            setSelectedCountryCode(t('countryCodeInputPlaceholder'));
                                                            toggleDropList('list2');
                                                        }}
                                                    >
                                                        <p>{t('countryCodeInputPlaceholder')}</p>
                                                    </div>

                                                    {filteredCountryCode.map((cd , idx) => 
                                                        <div 
                                                            key={idx} 
                                                            className={`
                                                                ${formCSS.option} 
                                                                ${selectedCountryCode === cd.name ? formCSS.selected_option: ''}
                                                            `}
                                                            onClick={() => {
                                                                setSelectedCountryCode(cd.name);
                                                                toggleDropList('list2');
                                                                setFilterTextCd('')
                                                            }}
                                                        >
                                                            <p>{cd.name}</p>
                                                        </div>
                                                    )}
                                                
                                                </>
                                            )
                                        }

                                    </div>

                                </motion.div>}

                            </AnimatePresence>

                        </div>

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
                            type={password ? "text" : "password"} id="password" 
                            placeholder={t('passwordInputPlaceholder')}
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <div className={formCSS.input_cont}>

                        <div onClick={() => 
                            displayingPassword(confirmPassword , setConfirmPassword)} className={formCSS.eyes_cont}
                            style={i18n.language === 'en' ? {right: '0px'} : {left: '0px'}}
                        >
                            {confirmPassword ?
                                <motion.span key={'h1'} variants={eyeVariants}><BsEyeSlash /></motion.span> :
                                <motion.span key={'s1'} variants={eyeVariants}><BsEye /></motion.span>
                            }
                        </div>

                        <label htmlFor="">
                            <span className={formCSS.label}>{t('confirmPasswordInputLabel')} :</span>
                        </label>

                        <input 
                            type={confirmPassword ? "text" : "password"} 
                            id="confirmPassword" placeholder={t('confirmPasswordInputPlaceholder')}
                            style={i18n.language === 'en' ? {paddingRight: '40px'} : {paddingLeft: '40px'}}
                        />

                    </div>

                    <Link to={'/login'} className={formCSS.form_link}>{t('haveAnAccount')}</Link>

                    <motion.button whileTap={{scale: 0.95}} className={formCSS.submit}>{t('registerWord')}</motion.button>

                </motion.form>

            </div>

            <Auth message={t('registerSlogan')}  />

        </div>

    </React.Fragment>

}
