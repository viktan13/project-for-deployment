import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

export interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.USA, content: Country.USA },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Canada, content: Country.Canada },
];

export const CountrySelect = ({
    className,
    value,
    onChange,
    readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Country')}
            items={options}
            readonly={readonly}
            label={t('Country')}
        />
    );
};
