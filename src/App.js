import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './Layouts';
import { Fragment } from 'react';
import { AuthProvider } from './contexts/AuthProvider';
import RequireAuth from './components/RequireAuth';

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
                                <Route key={index} element={<RequireAuth />}>
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
