import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

export interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) return null;

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Admin'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        {
            content: t('Profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Settings'),
            href: getRouteSettings(),
        },
        {
            content: t('Logout'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    items={items}
                    trigger={
                        <Avatar
                            size={40}
                            src={authData.avatar}
                        />
                    }
                />
            }
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted
                            size={30}
                            src={authData.avatar}
                        />
                    }
                />
            }
        />
    );
});
