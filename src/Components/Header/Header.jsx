import React from 'react';

import headerCSS from './header.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { IoLayersOutline, IoMenu, IoTicketOutline } from 'react-icons/io5';
import TrBtn from '../Translation-Button/TrBtn';

export default function Header({displayPhoneNav}) {

    const {t , i18n} = useTranslation();

    return <React.Fragment>

        <div className={headerCSS.container}>

            <div onClick={() => displayPhoneNav(true)} className={headerCSS.burger}>

                <IoMenu />

            </div>

            <Link className={headerCSS.logo}>
                <img src={require('../../Images/logo-g-b.png')} alt="" />
            </Link>

            <div className={headerCSS.actions}>

                <Link>
                    <IoMdCheckmarkCircleOutline />
                    <p>{t('headerLinkSub')}</p>
                </Link>

                <Link>
                    <IoLayersOutline />
                    <p>{t('headerLinkPackages')}</p>
                </Link>

                <Link>
                    <IoTicketOutline />
                    <p>{t('headerLinkRedeem')}</p>
                </Link>

            </div>

            <div className={headerCSS.setting}>

                <div className={headerCSS.translate}>

                    <TrBtn wbg={false} />

                </div>

                <div className={headerCSS.profile}>

                    <img src={require('../../Images/pfp.png')} alt="" />

                    <span style={i18n.language === 'en' ? {right: '0px'} : {left: '0px'}}>
                        {i18n.language === 'en' ? <IoIosArrowForward /> : <IoIosArrowBack />}
                    </span>

                </div>

            </div>

        </div>

    </React.Fragment>

}
