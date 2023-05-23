import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

export interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;
    return (
        <VStack
            max
            align="center"
            justify="center"
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
