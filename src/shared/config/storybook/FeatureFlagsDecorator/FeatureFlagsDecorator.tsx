// eslint-disable-next-line viktan-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeatureFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
