import { BrowserView, MobileView } from 'react-device-detect';
import React, { memo, useCallback, useState } from 'react';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import Notifications from '@/shared/assets/icons/bell.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';

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
        <Button
            onClick={onOpenDrawer}
            theme={ThemeButton.CLEAR}
        >
            <Icon
                SVG={Notifications}
                inverted
            />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                    direction="bottom left"
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
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
