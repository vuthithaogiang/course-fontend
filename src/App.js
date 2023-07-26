import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes, managerRoutes, adminRoutes } from './routes';
import { DefaultLayout } from './Layouts';
import { Fragment } from 'react';
import { AuthProvider } from './contexts/AuthProvider';
import RequireAuth from './components/RequireAuth';

const ROLES = {
    user: 'USER',
    manager: 'MANAGER',
    admin: 'ADMIN',
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const PageElement = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <PageElement />
                                        </Layout>
                                    }
                                />
                            );
                        })}

                        {privateRoutes.map((route, index) => {
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const PageElement = route.component;

                            return (
                                <Route key={index} element={<RequireAuth allowedRole={ROLES.user} />}>
                                    <Route
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <PageElement />
                                            </Layout>
                                        }
                                    />
                                </Route>
                            );
                        })}

                        {managerRoutes.map((route, index) => {
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const PageElement = route.component;

                            return (
                                <Route key={index} element={<RequireAuth allowedRole={ROLES.manager} />}>
                                    <Route
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <PageElement />
                                            </Layout>
                                        }
                                    />
                                </Route>
                            );
                        })}

                        {adminRoutes.map((route, index) => {
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const PageElement = route.component;

                            return (
                                <Route key={index} element={<RequireAuth allowedRole={ROLES.admin} />}>
                                    <Route
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <PageElement />
                                            </Layout>
                                        }
                                    />
                                </Route>
                            );
                        })}
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
