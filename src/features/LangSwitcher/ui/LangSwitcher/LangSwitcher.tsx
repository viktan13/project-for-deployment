import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

export interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const ontoggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    variant="clear"
                    onClick={ontoggle}
                >
                    {' '}
                    {t(short ? 'Short Lang' : 'language')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ThemeButton.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={ontoggle}
                >
                    {t(short ? 'Short Lang' : 'language')}
                </ButtonDeprecated>
            }
        />
    );
});
