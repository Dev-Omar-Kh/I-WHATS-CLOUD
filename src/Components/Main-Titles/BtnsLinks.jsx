import React from 'react';

import btnsLinksCSS from './title.module.css';

export default function BtnsLinks({children}) {

    return <React.Fragment>

        <div className={btnsLinksCSS.actions}>

            {children}

        </div>

    </React.Fragment>

}
