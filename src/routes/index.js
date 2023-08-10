import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import AboutUs from '~/pages/AboutUs';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Management from '~/pages/Management';
import Admin from '~/pages/Admin';
import Unauthorized from '~/components/Unauthorized';
import Players from '~/pages/Players';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sign-in', component: SignIn, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/about-us', component: AboutUs },
    { path: '/unauthorized', component: Unauthorized, layout: null },
    { path: '/players', component: Players },
];

const privateRoutes = [{ path: '/user/profile', component: Profile }];

const managerRoutes = [
    { path: '/manager', component: Management, layout: null },
    { path: '/manager/profile', component: Profile },
];

const adminRoutes = [
    { path: '/admin', component: Admin, layout: null },
    { path: '/admin/profile', component: Profile },
];

export { publicRoutes, privateRoutes, managerRoutes, adminRoutes };
