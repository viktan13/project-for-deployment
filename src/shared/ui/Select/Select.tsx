import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {};

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            className={cls.option}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
