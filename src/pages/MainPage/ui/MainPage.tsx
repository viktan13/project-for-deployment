import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <Page>
            <h1>
                {t('Home Page')}
            </h1>
            <Counter />
        </Page>
    );
};

export default MainPage;
