import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const refreshPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Unexpected mistake occurred')}</h1>
            <button onClick={refreshPage} type="button">{t('Reload')}</button>
        </div>
    );
};
