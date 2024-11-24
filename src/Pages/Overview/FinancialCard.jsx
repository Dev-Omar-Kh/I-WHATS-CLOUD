import React from 'react';

import financialCardCSS from './overview.module.css';
import { Link } from 'react-router-dom';

export default function FinancialCard({data}) {

    return <React.Fragment>

        <div className={financialCardCSS.financial_card}>

            <div className={financialCardCSS.financial_title}>
                <p>{data.title}</p>
            </div>

            <div className={financialCardCSS.financial_count}>

                <p>{data.count.toFixed(2)} USD</p>
                <span>{data.type}</span>

            </div>

            <div className={financialCardCSS.financial_action}>

                <Link to={data.link.to}>{data.link.name}</Link>

            </div>

        </div>

    </React.Fragment>

}
