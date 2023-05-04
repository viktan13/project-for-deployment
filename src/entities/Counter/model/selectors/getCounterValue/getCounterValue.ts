import { buildSelector } from '@/shared/lib/state';

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
