import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

export interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(({ className, SVG, inverted }: IconProps) => (
    <SVG className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
