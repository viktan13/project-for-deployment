import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticlesSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

export interface ArticlesSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;

}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
    const {
        className, sort, order, onChangeSort, onChangeOrder,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('createdAt'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('articleTitle'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('SortBy')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                options={orderOptions}
                label={t('order')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
