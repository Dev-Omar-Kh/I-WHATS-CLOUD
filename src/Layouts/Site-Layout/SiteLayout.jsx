import React, { useState } from 'react';

import siteLayoutCSS from './site.module.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SiteLayout() {

    // ====== display-nav-for-phone ====== //

    const {i18n} = useTranslation();

    const [displayPhoneNav, setDisplayPhoneNav] = useState(false);

    return <React.Fragment>

        <div className={siteLayoutCSS.container}>

            <div 
                className={`
                    ${siteLayoutCSS.side_bar} 
                    ${i18n.language === 'en' ? siteLayoutCSS.side_bar_hidden_en : siteLayoutCSS.side_bar_hidden_ar}
                    ${displayPhoneNav ? 
                        i18n.language === 'en' ? siteLayoutCSS.display_side_bar_en : siteLayoutCSS.display_side_bar_ar : ''
                    }`
                }
            >
                <Sidebar displayPhoneNav={setDisplayPhoneNav} />
            </div>

            <div className={siteLayoutCSS.main_side}>

                <div className={siteLayoutCSS.pages_cont}>

                    <Header displayPhoneNav={setDisplayPhoneNav} />

                    <Outlet />

                </div>

            </div>

        </div>

    </React.Fragment>

}
