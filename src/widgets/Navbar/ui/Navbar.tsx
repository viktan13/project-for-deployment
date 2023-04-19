import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Dropdown } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { NotificationList } from '@/entities/Notification/ui/NotificationList/NotificationList';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('AppName')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={AppRoutes.ARTICLE_CREATE}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Create article')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>

                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
