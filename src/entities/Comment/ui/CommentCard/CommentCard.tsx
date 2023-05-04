import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/type/comment';
import { getRouteProfile } from '@/shared/const/router';

export interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton
                        height={30}
                        width={30}
                        border="50%"
                    />
                    <Skeleton
                        className={cls.username}
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton
                    className={cls.text}
                    height={50}
                    width="100%"
                />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar && (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                )}
                <Text
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </VStack>
    );
});
