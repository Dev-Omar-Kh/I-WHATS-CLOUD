import React from 'react';
import Title from '../../Components/Main-Titles/Title';
import TheTitle from '../../Components/Main-Titles/TheTitle';
import BtnsLinks from '../../Components/Main-Titles/BtnsLinks';
import { useTranslation } from 'react-i18next';

import { IoBarChartOutline, IoCashOutline, IoChatboxEllipsesOutline, IoChatbubblesOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MdOutlineHandshake } from 'react-icons/md';

import actionsCSS from '../../Components/Main-Titles/title.module.css';
import overCSS from './overview.module.css'
import ViewCard from './ViewCard';
import FinancialCard from './FinancialCard';

export default function Overview() {

    const {t} = useTranslation()

    // ====== get-summary-for-whatsapp-and-sms-and-financial ====== //

    const whatsData = [

        {key: 'Total Sent' , value: '4000'},
        {key: 'Total Received' , value: '500'},
        {key: 'Success' , value: '68%'},
        {key: 'Failed' , value: '32%'},

    ];

    const smsData = [

        {key: 'Total Sent' , value: '500'},
        {key: 'Total Received' , value: '286'},
        {key: 'Success' , value: '55%'},
        {key: 'Failed' , value: '45%'},

    ];

    const financialData = [

        {title: 'Partners' , count: 100 , type: 'Earnings' , link: {to: '/' , name: 'Payout'}},
        {title: 'Balance' , count: 180 , type: 'Credits' , link: {to: '/' , name: 'Top Up'}},

    ]

    return <React.Fragment>

        <div className='db_container'>

            <Title sec={t('sideBarSectionDashboard')}>

                <TheTitle>
                    <IoBarChartOutline />
                    <p>{t('sideBarLinkOverview')}</p>
                </TheTitle>

                <BtnsLinks>
                    <Link className={actionsCSS.btn_link}>
                        <IoChatbubblesOutline />
                        <span>{t('titleActionGateways')}</span>
                    </Link>
                    <Link className={actionsCSS.btn_link}>
                        <MdOutlineHandshake />
                        <span>{t('titleActionPartners')}</span>
                    </Link>
                </BtnsLinks>

            </Title>

            <div className={overCSS.container}>

                <div className={overCSS.over_cards_cont}>

                    <div className={overCSS.title}>
                        <IoCashOutline />
                        <p>{t('overviewTitleFinancial')}</p>
                    </div>

                    {financialData.map((fin , idx) => <FinancialCard key={idx} data={fin} />)}

                </div>

                <div className={overCSS.over_cards_cont}>

                    <div className={overCSS.title}>
                        <IoLogoWhatsapp />
                        <p>{t('overviewTitleWhatsApp')}</p>
                    </div>

                    {whatsData.map((sum , idx)=> <ViewCard key={idx} data={sum} />)}

                </div>

                <div className={overCSS.over_cards_cont}>

                    <div className={overCSS.title}>
                        <IoChatboxEllipsesOutline />
                        <p>{t('overviewTitleSMS')}</p>
                    </div>

                    {smsData.map((sum , idx)=> <ViewCard key={idx} data={sum} />)}

                </div>

            </div>

        </div>

    </React.Fragment>

}
