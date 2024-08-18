import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../layout/App'
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../features/activities/form/ActivityForm';
import ActivityDetail from '../features/activities/detail/ActivityDetail';
import TestErrors from '../features/errors/TestErrors';
import NotFound from '../features/errors/NotFound';
import ServerError from '../features/errors/ServerError';

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activity/:id', element: <ActivityDetail /> },
            { path: 'createActivity', element: <ActivityForm /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'errors', element: <TestErrors /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <NotFound /> }
        ]
    }
]

export const router = createBrowserRouter(routes);