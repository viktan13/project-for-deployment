import React from 'react';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Home',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'About us',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
