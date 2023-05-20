import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eyenew.svg';
import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleListItemProps } from '../ArticleListItem';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleListItemRedesignedProps {
    className?: string;
}

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );
    const views = (
        <HStack gap="8">
            <Icon SVG={EyeIcon} />
            <Text
                text={String(article.views)}
                className={cls.views}
            />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding="24"
                max
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack
                    max
                    gap="16"
                >
                    <HStack
                        max
                        gap="8"
                    >
                        <Avatar
                            size={32}
                            src={article.user.avatar}
                        />
                        <Text
                            bold
                            text={article.user.username}
                        />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text
                        bold
                        title={article.title}
                    />
                    <Text
                        size="s"
                        title={article.subtitle}
                    />
                    <AppImage
                        fallback={
                            <Skeleton
                                width="100%"
                                height={250}
                            />
                        }
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack
                        max
                        justify="between"
                    >
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button variant="outline">{t('ReadMore')}</Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={
                            <Skeleton
                                width={200}
                                height={200}
                            />
                        }
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </AppLink>
    );
});
