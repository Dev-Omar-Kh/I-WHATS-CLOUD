import React, { useState } from 'react';

import siteLayoutCSS from './site.module.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

export default function SiteLayout() {

    // ====== display-nav-for-phone ====== //

    const [displayPhoneNav, setDisplayPhoneNav] = useState(true)

    return <React.Fragment>

        <div className={siteLayoutCSS.container}>

            <div className={`${siteLayoutCSS.side_bar} ${displayPhoneNav ? siteLayoutCSS.display_side_bar : ''}`}>
                <Sidebar displayPhoneNav={setDisplayPhoneNav} />
            </div>

            <div className={siteLayoutCSS.main_side}>

                <div className={siteLayoutCSS.header}>
                    <Header />
                </div>

                <div className={siteLayoutCSS.pages_cont}></div>

            </div>

        </div>

    </React.Fragment>

}
