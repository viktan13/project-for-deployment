import { useTranslation } from 'react-i18next';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItemsList } from '../../model/selectors/getSidebarItemsList';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItemsList);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={
                classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {t(collapsed ? '>' : '<')}
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
