import { BrowserView, MobileView } from 'react-device-detect';
import React, { memo, useCallback, useState } from 'react';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationsDeprecated from '@/shared/assets/icons/bell.svg';
import Notifications from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Popover } from '@/shared/ui/redesigned/Popups';

export interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    SVG={Notifications}
                    onClick={onOpenDrawer}
                    clickable
                />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ThemeButton.CLEAR}
                >
                    <IconDeprecated
                        SVG={NotificationsDeprecated}
                        inverted
                    />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                            direction="bottom left"
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                            direction="bottom left"
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer
                    isOpen={isOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
