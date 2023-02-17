import { classNames } from 'shared/lib/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const ontoggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={ontoggle}
        >
            {t(short ? 'Short Lang' : 'language')}
        </Button>
    );
};
