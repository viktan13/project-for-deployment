import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getAllFeatureFlags } from '../lib/setGetFeatures';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>('features/updateFeatureFlags', async ({ userId, newFeatures }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        );
        window.location.reload();
        return undefined;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
