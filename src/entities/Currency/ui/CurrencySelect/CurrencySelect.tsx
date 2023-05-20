import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';

export interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.HRN, content: Currency.HRN },
];

export const CurrencySelect = ({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const props = {
        readonly,
        className,
        value,
        defaultValue: t('Currency'),
        onChange: onChangeHandler,
        items: options,
        direction: 'top right' as const,
        label: t('Currency'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListboxDeprecated {...props} />}
        />
    );
};
