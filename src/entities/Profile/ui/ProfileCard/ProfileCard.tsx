import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';

import { Profile } from '../../model/types/profile';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeLastName,
    onChangeFirstName,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('ProfileTitleError')}
                    text={t('ProfileTextError')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                value={data?.name}
                placeholder={t('Your first name')}
                className={cls.input}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="ProfileCardProps.FirstName"
            />
            <Input
                value={data?.lastName}
                placeholder={t('Your last name')}
                className={cls.input}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="ProfileCardProps.LastName"
            />
            <Input
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
