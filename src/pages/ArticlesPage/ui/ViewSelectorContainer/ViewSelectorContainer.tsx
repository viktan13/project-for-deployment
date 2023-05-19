import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ViewSelectorContainer.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hook/useArticleFilters';

export interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;

        const { view, onChangeView } = useArticleFilters();

        return (
            <ArticleViewSelector
                className={classNames(cls.ViewSelectorContainer, {}, [
                    className,
                ])}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
