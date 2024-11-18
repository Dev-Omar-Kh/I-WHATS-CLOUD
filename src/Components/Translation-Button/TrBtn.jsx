import React, { useCallback, useEffect, useRef, useState } from 'react';

import { IoLanguage } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import trBtnCSS from './tr_btn.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

export default function TrBtn({wbg}) {

    // ====== display-langs ====== //

    const [displayLangs, setDisplayLangs] = useState(false);

    const toggleLangsList = () => {

        setDisplayLangs(prev => !prev);

    }

    const langListRef = useRef(null);

    const handleClickOutside = useCallback((event) => {

        if (langListRef.current && !langListRef.current.contains(event.target)) {
            setDisplayLangs(false);
        }

    }, []);

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [handleClickOutside]);

    // ====== change-language ====== //

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setDisplayLangs(false);
    };

    // ====== chang-button-color ====== //

    const greenBg = {

        color: 'var(--f-white-color)',
        backgroundColor: 'var(--m-green-color)'

    }

    const whiteBg = {

        color: 'var(--m-green-color)',
        backgroundColor: 'var(--f-white-color)'

    }

    // ====== animation ====== //

    const displayList = {

        hidden: {opacity: 0 , height: 0},
        visible: {opacity: 1 , height: 'auto' , transition: {duration: 0.15}}

    }

    return <React.Fragment>

        <div ref={langListRef} className={trBtnCSS.container}>

            <button onClick={toggleLangsList} className={`${trBtnCSS.tr_btn}`} style={wbg ? whiteBg : greenBg}>
                <IoLanguage />
                {i18n.language === 'en' ? 
                    <IoIosArrowForward style={{rotate: displayLangs ? '90deg' : '0deg'}} /> :
                    <IoIosArrowBack style={{rotate: displayLangs ? '-90deg' : '0deg'}} />
                }
            </button>

            <AnimatePresence>

                {displayLangs && <motion.ul 
                    className={trBtnCSS.tr_list}
                    style={i18n.language === 'en' ? {right: '0px'} : {left: '0px'}}
                    variants={displayList} initial='hidden' animate='visible' exit={'hidden'}
                >

                    <li className={i18n.language === 'ar' ? trBtnCSS.tr_list_li_active : ''} onClick={() => changeLanguage('ar')}>
                        <Flag code="egy" />
                        <span>{t('arabicLang')}</span>
                    </li>
                    <li className={i18n.language === 'en' ? trBtnCSS.tr_list_li_active : ''} onClick={() => changeLanguage('en')}>
                        <Flag code="us" />
                        <span>{t('englishLang')}</span>
                    </li>

                </motion.ul>}

            </AnimatePresence>

        </div>

    </React.Fragment>

}
