import React from 'react';

import overCardCSS from './overview.module.css';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2';

export default function ViewCard({data}) {

    return <React.Fragment>

        <div className={overCardCSS.over_card}>

            <div className={overCardCSS.card_det}>

                <p className={overCardCSS.det_title}>{data.key}</p>
                <p className={overCardCSS.det_count}>{data.value}</p>

            </div>

            <div className={overCardCSS.card_icon}>
                {data.key === 'Total Sent' && <IoIosCheckmarkCircleOutline />}
                {data.key === 'Total Received' && <IoChatboxEllipsesOutline />}
                {data.key === 'Success' && <HiArrowTrendingUp />}
                {data.key === 'Failed' && <HiArrowTrendingDown style={{color: 'var(--error-color)'}} />}
            </div>

        </div>

    </React.Fragment>

}
