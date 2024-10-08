import { createBrowserRouter } from 'react-router-dom';
import ExerciseDetail from '../pages/ExerciseDetail';
import Home from '../pages/Home';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/exercise/:id',
        element: <ExerciseDetail />,
      },
    ],
  },
]);
