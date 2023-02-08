import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to="/"
                >
                    {t('Home')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    to="/about"
                >
                    {t('About us')}
                </AppLink>
            </div>
        </div>
    );
};
