import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
        <ArticleListItemSkeleton
            className={cls.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text
                    size={TextSize.L}
                    title={t('NoArticles')}
                />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    wrap="wrap"
                    gap="16"
                    data-testid="ArticleList"
                    className={classNames(cls.ArticleListRedesigned, {}, [])}
                >
                    {articles.map((item) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            className={cls.card}
                            target={target}
                            key={item.id}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </HStack>
            }
            off={
                <div
                    data-testid="ArticleList"
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    {articles.map((item) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            className={cls.card}
                            target={target}
                            key={item.id}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </div>
            }
        />
    );
});
