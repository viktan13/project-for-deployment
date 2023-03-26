import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <Page>
            <h1>
                {t('Home Page')}
            </h1>
        </Page>
    );
};

export default MainPage;
