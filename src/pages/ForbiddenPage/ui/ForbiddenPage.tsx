import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

export interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames('', {}, [className])}>
            <Text theme={TextTheme.ERROR} title={t('NotAuthorized')} />
        </Page>
    );
};

export default ForbiddenPage;