import React from 'react';

import titleCSS from './title.module.css';

export default function Title({sec , children}) {

    return <React.Fragment>

        <div className={titleCSS.container}>

            <div className={titleCSS.sec_name}>{sec}</div>

            <div className={titleCSS.main}>

                {children}

            </div>

        </div>

    </React.Fragment>

}
