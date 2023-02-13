import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            <h1>
                {t('Home Page')}
            </h1>
            <BugButton />
        </div>
    );
};

export default MainPage;
