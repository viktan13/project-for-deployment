import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ScrollButtonIcon from '@/shared/assets/icons/circle-up.svg';

export interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Icon
            onClick={onClick}
            SVG={ScrollButtonIcon}
            clickable
            height={32}
            width={32}
            className={classNames(cls.ScrollToTopButton, {}, [className])}
        />
    );
});
