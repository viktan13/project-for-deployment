import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/profileSlice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

export interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    ({ className }: EditableProfileCardHeaderProps) => {
        const { t } = useTranslation('profile');
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;

        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.onCancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        border="partial"
                        padding="24"
                        max
                    >
                        <HStack
                            max
                            justify="between"
                            className={classNames('', {}, [className])}
                        >
                            <Text title={t('Profile')} />
                            {canEdit && (
                                <HStack gap="8">
                                    {readonly ? (
                                        <Button
                                            variant="outline"
                                            onClick={onEdit}
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Edit')}
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                color="error"
                                                variant="outline"
                                                onClick={onCancelEdit}
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                            >
                                                {t('Cancel')}
                                            </Button>
                                            <Button
                                                color="success"
                                                variant="outline"
                                                onClick={onSave}
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                            >
                                                {t('Save')}
                                            </Button>
                                        </>
                                    )}
                                </HStack>
                            )}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <TextDeprecated title={t('Profile')} />
                        {canEdit && (
                            <HStack gap="8">
                                {readonly ? (
                                    <ButtonDeprecated
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Edit')}
                                    </ButtonDeprecated>
                                ) : (
                                    <>
                                        <ButtonDeprecated
                                            theme={ThemeButton.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ThemeButton.OUTLINE}
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Save')}
                                        </ButtonDeprecated>
                                    </>
                                )}
                            </HStack>
                        )}
                    </HStack>
                }
            />
        );
    },
);
