import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss'
import React from "react";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

export interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const ontoggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }


    return (
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(cls.LangSwitcher, {}, [className])}
                onClick={ontoggle}
            >
                {t('language')}
            </Button>
    );
};