import React from 'react';

import titleNameCSS from './title.module.css';

export default function TheTitle({children}) {

    return <React.Fragment>

        <div className={titleNameCSS.title}>

            {children}

        </div>

    </React.Fragment>

}
