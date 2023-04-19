import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = options;

    render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
