import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('All'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('ECONOMICS'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('SCIENCE'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <TabsDeprecated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
});
