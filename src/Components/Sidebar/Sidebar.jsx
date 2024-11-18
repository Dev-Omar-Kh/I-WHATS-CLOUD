import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { 
    IoBarChartOutline, IoChatboxEllipsesOutline, 
    IoLayersOutline, 
    IoLinkOutline, IoLogoReddit, IoLogoWhatsapp, IoNewspaperOutline, IoPeopleOutline, IoSaveOutline, 
    IoTicketOutline, 
    IoUnlinkOutline
} from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward, IoIosCloseCircleOutline, IoMdCheckmarkCircleOutline } from 'react-icons/io';

import sidebarCSS from './sidebar.module.css';
import { useTranslation } from 'react-i18next';
// import './active.css';

export default function Sidebar({displayPhoneNav}) {

    // ====== translate-hook ====== //

    const {t, i18n} = useTranslation();

    useEffect(() => {

        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;

    }, [i18n.language]);

    // ====== display-list ====== //

    const [displayList, setDisplayList] = useState({list1: false, list2: false, list3: false});

    const toggleList = (list) => {

        setDisplayList((prevState) => ({
            ...prevState,
            [list]: !prevState[list],
        }));

    }

    // ====== framer-motion ====== //

    const showListVariants = {

        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },

    }

    return <React.Fragment>

        <div className={sidebarCSS.container}>

            <div to={'/'} className={sidebarCSS.logo}>
                <Link><img src={require('../../Images/logo-w-b.png')} alt="" /></Link>
                <button onClick={() => displayPhoneNav(false)}>
                    <IoIosCloseCircleOutline />
                </button>
            </div>

            <nav className={sidebarCSS.nav}>

                <div className={sidebarCSS.nav_sec}>

                    <p className={sidebarCSS.nav_sec_header}>
                        {t('sideBarSectionDashboard')}
                        <span></span>
                    </p>

                    <NavLink to={'/'} className='side_bar_link'>
                        <IoBarChartOutline />
                        <span>{t('sideBarLinkOverview')}</span>
                    </NavLink>

                    <>

                        <button 
                            onClick={() => toggleList('list1')} 
                            className='side_bar_link' 
                            style={{color: displayList.list1 ? 'var(--f-white-color)' : ''}}
                        >
                            <div>
                                <IoLogoWhatsapp />
                                <span>{t('sideBarLinkWhatsApp')}</span>
                            </div>
                            {i18n.language === 'en' ? 
                                <div style={{rotate: displayList.list1 ? '90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                    <IoIosArrowForward />
                                </div> :
                                <div style={{rotate: displayList.list1 ? '-90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                    <IoIosArrowBack />
                                </div>
                            }
                        </button>

                        <AnimatePresence>

                            {displayList.list1 && <motion.ul 
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={sidebarCSS.link_det}
                            >

                                <li><NavLink>{t('sideBarSecondeLinkQueue')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkSent')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkReceived')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkCampaigns')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkScheduled')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkGroups')}</NavLink></li>

                            </motion.ul>}

                        </AnimatePresence>

                    </>

                    <>

                        <button 
                            onClick={() => toggleList('list2')} 
                            className='side_bar_link' 
                            style={{color: displayList.list2 ? 'var(--f-white-color)' : ''}}
                        >
                            <div>
                                <IoChatboxEllipsesOutline />
                                <span>{t('sideBarLinkSMS')}</span>
                            </div>
                            {i18n.language === 'en' ? 
                                <div style={{rotate: displayList.list2 ? '90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                    <IoIosArrowForward />
                                </div> :
                                <div style={{rotate: displayList.list2 ? '-90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                    <IoIosArrowBack />
                                </div>
                            }
                        </button>

                        <AnimatePresence>

                            {displayList.list2 && <motion.ul 
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={sidebarCSS.link_det}
                            >

                                <li><NavLink>{t('sideBarSecondeLinkQueue')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkSent')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkReceived')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkCampaigns')}</NavLink></li>
                                <li><NavLink>{t('sideBarSecondeLinkScheduled')}</NavLink></li>

                            </motion.ul>}

                        </AnimatePresence>

                    </>

                    <>

                        <button 
                            onClick={() => toggleList('list3')} 
                            className='side_bar_link' 
                            style={{color: displayList.list3 ? 'var(--f-white-color)' : ''}}
                        >
                            <div>
                                <IoLinkOutline />
                                <span>{t('sideBarLinkHosts')}</span>
                            </div>
                            {i18n.language === 'en' ? 
                                <div style={{rotate: displayList.list3 ? '90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                    <IoIosArrowForward />
                                </div> :
                                <div style={{rotate: displayList.list3 ? '-90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                    <IoIosArrowBack />
                                </div>
                            }
                        </button>

                        <AnimatePresence>

                            {displayList.list3 && <motion.ul 
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={sidebarCSS.link_det}
                            >

                                <li><NavLink>{t('hostWhatsApp')}</NavLink></li>
                                <li><NavLink>{t('hostAndroid')}</NavLink></li>

                            </motion.ul>}

                        </AnimatePresence>

                    </>

                </div>

                <div className={sidebarCSS.nav_sec}>

                    <p className={sidebarCSS.nav_sec_header}>
                        {t('sideBarSectionContact')}
                        <span></span>
                    </p>

                    <NavLink className='side_bar_link'>
                        <IoSaveOutline />
                        <span>{t('sideBarLinkSaved')}</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoPeopleOutline />
                        <span>{t('sideBarLinkGroups')}</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoUnlinkOutline />
                        <span>{t('sideBarLinkUnSubscribe')}</span>
                    </NavLink>

                </div>

                <div className={sidebarCSS.nav_sec}>

                    <p className={sidebarCSS.nav_sec_header}>
                        {t('sideBarSectionTools')}
                        <span></span>
                    </p>

                    <NavLink className='side_bar_link'>
                        <IoLogoReddit />
                        <span>{t('sideBarLinkActions')}</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoNewspaperOutline />
                        <span>{t('sideBarLinkTemplates')}</span>
                    </NavLink>

                </div>

                <div className={`${sidebarCSS.nav_sec} ${sidebarCSS.phone_links}`}>

                    <p className={sidebarCSS.nav_sec_header}>
                        {t('sideBarSectionServices')}
                        <span></span>
                    </p>

                    <NavLink className='side_bar_link'>
                        <IoMdCheckmarkCircleOutline />
                        <span>{t('headerLinkSub')}</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoLayersOutline />
                        <span>{t('headerLinkPackages')}</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoTicketOutline />
                        <span>{t('headerLinkRedeem')}</span>
                    </NavLink>

                </div>

            </nav>

        </div>

    </React.Fragment>

}
