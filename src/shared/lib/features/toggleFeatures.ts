import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({
    name,
    on,
    off,
}: ToggleFeaturesOptions<T>): T => {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
};
