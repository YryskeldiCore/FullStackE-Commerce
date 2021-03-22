import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PERSONAL_ROUTE, MAINPAGE_ROUTE, ABOUT_ROUTE} from './utils/consts'
import Admin from './pages/Admin';
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import DevicePage from './pages/DevicePage'
import Auth from './pages/Auth'
import PersonalPage from './pages/personalPage'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PERSONAL_ROUTE,
        Component: PersonalPage
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    }
]
