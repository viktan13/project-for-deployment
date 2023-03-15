import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

export interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, SVG }: IconProps) => (
    <SVG className={classNames(cls.Icon, {}, [className])} />
));
