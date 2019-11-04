import App from './App';
import HomePage from './containers/Home/Home';
import History from './containers/History/History';
import MovieDetails from './containers/MovieDetails/MovieDetails';

export default [
  {
    component: App,
    routes: [
      {
        component: History,
        path: '/history',
        exact: true,
      },
      {
        component: MovieDetails,
        path: '/movieDetails',
        exact: true,
      },
      {
        component: HomePage,
        path: '/',
      },
    ],
  },
];
