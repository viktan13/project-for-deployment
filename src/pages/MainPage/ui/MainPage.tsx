import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <Page data-testid="MainPage">
            <div>12354654654654654</div>
            <h1>{t('Home Page')}</h1>
        </Page>
    );
};

export default MainPage;
