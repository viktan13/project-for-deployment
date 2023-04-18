import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { classNames, Mods } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

export interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose,
    } = props;

    const { theme } = useTheme();

    const { isClosing, isMounted, close } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
