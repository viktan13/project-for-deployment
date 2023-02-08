import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
export interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link to={to} {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};
