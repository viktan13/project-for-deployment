import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            <h1>
                {t('Home Page')}
            </h1>
        </div>
    );
};

export default MainPage;
