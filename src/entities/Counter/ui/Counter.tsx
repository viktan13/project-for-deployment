import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();
    const { t } = useTranslation();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={handleInc}>{t('increment')}</Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>{t('decrement')}</Button>
            <Button data-testid="add-btn" onClick={handleAdd}>{t('add 5')}</Button>
        </div>
    );
};
