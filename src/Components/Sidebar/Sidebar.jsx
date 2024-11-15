import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { 
    IoBarChartOutline, IoChatboxEllipsesOutline, 
    IoLinkOutline, IoLogoReddit, IoLogoWhatsapp, IoNewspaperOutline, IoPeopleOutline, IoSaveOutline, 
    IoUnlinkOutline
} from 'react-icons/io5';
import { IoIosArrowForward, IoIosCloseCircleOutline } from 'react-icons/io';

import sidebarCSS from './sidebar.module.css';
// import './active.css';

export default function Sidebar({displayPhoneNav}) {

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
                        Dashboard
                        <span></span>
                    </p>

                    <NavLink to={'/'} className='side_bar_link'>
                        <IoBarChartOutline />
                        <span>Overview</span>
                    </NavLink>

                    <>

                        <button 
                            onClick={() => toggleList('list1')} 
                            className='side_bar_link' 
                            style={{color: displayList.list1 ? 'var(--f-white-color)' : ''}}
                        >
                            <div>
                                <IoLogoWhatsapp />
                                <span>WhatsApp</span>
                            </div>
                            <div style={{rotate: displayList.list1 ? '90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                <IoIosArrowForward />
                            </div>
                        </button>

                        <AnimatePresence>

                            {displayList.list1 && <motion.ul 
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={sidebarCSS.link_det}
                            >

                                <li><NavLink>Queue</NavLink></li>
                                <li><NavLink>Sent</NavLink></li>
                                <li><NavLink>Received</NavLink></li>
                                <li><NavLink>Campaigns</NavLink></li>
                                <li><NavLink>Scheduled</NavLink></li>
                                <li><NavLink>Groups</NavLink></li>

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
                                <span>SMS</span>
                            </div>
                            <div style={{rotate: displayList.list2 ? '90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                <IoIosArrowForward />
                            </div>
                        </button>

                        <AnimatePresence>

                            {displayList.list2 && <motion.ul 
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={sidebarCSS.link_det}
                            >

                                <li><NavLink>Queue</NavLink></li>
                                <li><NavLink>Sent</NavLink></li>
                                <li><NavLink>Received</NavLink></li>
                                <li><NavLink>Campaigns</NavLink></li>
                                <li><NavLink>Scheduled</NavLink></li>

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
                                <span>Hosts</span>
                            </div>
                            <div style={{rotate: displayList.list3 ? '90deg' : '0deg'}} className={sidebarCSS.arrowList}>
                                <IoIosArrowForward />
                            </div>
                        </button>

                        <AnimatePresence>

                            {displayList.list3 && <motion.ul 
                                variants={showListVariants} initial='hidden' animate='visible' exit={'hidden'} 
                                className={sidebarCSS.link_det}
                            >

                                <li><NavLink>WhatsApp</NavLink></li>
                                <li><NavLink>Android</NavLink></li>

                            </motion.ul>}

                        </AnimatePresence>

                    </>

                </div>

                <div className={sidebarCSS.nav_sec}>

                    <p className={sidebarCSS.nav_sec_header}>
                        Contacts
                        <span></span>
                    </p>

                    <NavLink className='side_bar_link'>
                        <IoSaveOutline />
                        <span>Saved</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoPeopleOutline />
                        <span>Groups</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoUnlinkOutline />
                        <span>Unsubscribe</span>
                    </NavLink>

                </div>

                <div className={sidebarCSS.nav_sec}>

                    <p className={sidebarCSS.nav_sec_header}>
                        Tools
                        <span></span>
                    </p>

                    <NavLink className='side_bar_link'>
                        <IoLogoReddit />
                        <span>Actions</span>
                    </NavLink>

                    <NavLink className='side_bar_link'>
                        <IoNewspaperOutline />
                        <span>Templates</span>
                    </NavLink>

                </div>

            </nav>

        </div>

    </React.Fragment>

}
