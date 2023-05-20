import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';

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

    const props = {
        className: classNames('', {}, [className]),
        onChange: onChangeHandler,
        value,
        defaultValue: t('Country'),
        items: options,
        readonly,
        label: t('Country'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    );
};
