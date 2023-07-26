import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import AboutUs from '~/pages/AboutUs';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Management from '~/pages/Management';
import Admin from '~/pages/Admin';
import Unauthorized from '~/components/Unauthorized';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sign-in', component: SignIn, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/about-us', component: AboutUs },
    { path: '/unauthorized', component: Unauthorized, layout: null },
];

const privateRoutes = [{ path: '/profile', component: Profile }];

const managerRoutes = [{ path: '/management', component: Management, layout: null }];

const adminRoutes = [{ path: '/admin', component: Admin, layout: null }];

export { publicRoutes, privateRoutes, managerRoutes, adminRoutes };
