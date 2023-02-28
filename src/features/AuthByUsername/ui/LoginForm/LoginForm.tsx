import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const
    LoginForm = memo(({ className }: LoginFormProps) => {
        const { t } = useTranslation();

        const dispatch = useDispatch();

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

        const onLoginClick = useCallback(() => {
            dispatch(loginByUsername({ username, password }));
        }, [dispatch, password, username]);

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
