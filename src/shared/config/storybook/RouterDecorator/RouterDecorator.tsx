// eslint-disable-next-line viktan-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story, StoryContext } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (
    StoryComponent: Story,
    context: StoryContext,
) => {
    const { title } = context;
    if (title === 'pages/ProfilePage/ProfilePage') {
        return (
            <MemoryRouter initialEntries={['/profile/1']}>
                <Routes>
                    <Route
                        path="/profile/:id"
                        element={<StoryComponent />}
                    />
                </Routes>
            </MemoryRouter>
        );
    }
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    );
};
