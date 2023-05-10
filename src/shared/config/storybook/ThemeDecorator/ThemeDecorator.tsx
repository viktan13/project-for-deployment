import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line viktan-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <StoreProvider>
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        </StoreProvider>
    );
