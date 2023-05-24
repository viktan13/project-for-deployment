import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

/**
 * @deprecated
 */
export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            className,
            children,
            to,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;

        return (
            <Link
                ref={ref}
                to={to}
                {...otherProps}
                className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            >
                {children}
            </Link>
        );
    },
);
