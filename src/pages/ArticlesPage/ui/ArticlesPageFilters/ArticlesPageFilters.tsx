import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticlesSortSelector } from '@/features/ArticlesSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import cls from './ArticlesPageFilters.module.scss';
import { useArticleFilters } from '../../lib/hook/useArticleFilters';

export interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
        onChangeSearch,
        search,
        onChangeView,
        view,
        onChangeType,
        type,
        onChangeSort,
        sort,
        order,
        onChangeOrder,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticlesSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
