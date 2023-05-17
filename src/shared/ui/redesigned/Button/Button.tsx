import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullwidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = 'outline',
        children,
        square,
        disabled,
        size = 'm',
        fullwidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullwidth,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
