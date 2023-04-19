import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
});
