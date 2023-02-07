import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Sidebar} from "widgets/Sidebar";


const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'content-page'}>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
