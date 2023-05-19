import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hook/useArticleFilters';

export interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        search,
        onChangeSearch,
        onChangeType,
        type,
        onChangeSort,
        onChangeOrder,
        sort,
        order,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            search={search}
            onChangeSearch={onChangeSearch}
            className={className}
            onChangeType={onChangeType}
            type={type}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            sort={sort}
            order={order}
        />
    );
});
