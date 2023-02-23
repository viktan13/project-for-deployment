import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

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
