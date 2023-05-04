import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(
    ({ className, SVG, inverted, ...otherProps }: IconProps) => (
        <SVG
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    ),
);
