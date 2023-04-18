import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

export interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();
    const mods = {
        [cls.opened]: isOpen,
    };
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
