import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticlesSortSelector.module.scss';

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

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('SortBy')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                className={cls.order}
                options={orderOptions}
                label={t('order')}
                value={order}
                onChange={changeOrderHandler}
            />
        </div>
    );
});
