import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

export interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton
                    width="100%"
                    height="80px"
                    border="8px"
                />
                <Skeleton
                    width="100%"
                    height="80px"
                    border="8px"
                />
                <Skeleton
                    width="100%"
                    height="80px"
                    border="8px"
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem item={item} />
            ))}
        </VStack>
    );
});
