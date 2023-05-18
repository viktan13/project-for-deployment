import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage/AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import UserIcon from '@/shared/assets/icons/user.svg';

export interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const mods: Mods = {};

    const style = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border="50%"
        />
    );
    const errorFallback = (
        <Icon
            width={size}
            height={size}
            SVG={UserIcon}
        />
    );
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            style={style}
            alt={alt}
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
