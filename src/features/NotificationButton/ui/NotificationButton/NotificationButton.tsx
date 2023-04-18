import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import Notifications from 'shared/assets/icons/bell.svg';
import { NotificationList } from 'entities/Notification/ui/NotificationList/NotificationList';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ThemeButton.CLEAR}>
                    <Icon SVG={Notifications} inverted />
                </Button>
            )}
            direction="bottom left"
        >
            <NotificationList className={cls.notifications} />
        </Popover>

    );
});
