import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const
    LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
        const { t } = useTranslation();

        const dispatch = useAppDispatch();

        const username = useSelector(getLoginUsername);
        const password = useSelector(getLoginPassword);
        const error = useSelector(getLoginError);
        const isLoading = useSelector(getLoginIsLoading);

        const onChangeUsername = useCallback((value: string) => {
            dispatch(loginActions.setUsername(value));
        }, [dispatch]);

        const onChangePassword = useCallback((value: string) => {
            dispatch(loginActions.setPassword(value));
        }, [dispatch]);

        const onLoginClick = useCallback(async () => {
            const result = await dispatch(loginByUsername({ username, password }));
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        }, [onSuccess, dispatch, password, username]);

        return (
            <DynamicModuleLoader
                removeAfterUnmount
                reducers={initialReducers}
            >
                <div className={classNames(cls.LoginForm, {}, [className])}>
                    <Text title={t('Login form')} />
                    {error && (
                        <Text
                            text={t('Username or password is not correct')}
                            theme={TextTheme.ERROR}
                        />
                    )}
                    <Input
                        autoFocus
                        type="text"
                        className={cls.input}
                        placeholder={t('username')}
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('password')}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <Button
                        theme={ThemeButton.OUTLINE}
                        className={cls.loginBtn}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('Login')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    });

export default LoginForm;
