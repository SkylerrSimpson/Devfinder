import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';

// import { ErrorProvider } from './context/ErrorContext';
import Root from './Layout/Root';
import { lazy } from 'react';
import { Suspense } from 'react';
import Loading from './Pages/Loading';
const Home = lazy(()  => import('./Pages/Home'));
// import WordList from './Pages/WordList';
const SavedProfiles = lazy(()  => import('./Pages/SavedProfiles'));
// const Error = lazy(() => import('./Pages/Error'));

const router = createBrowserRouter([
 {
  path: '/',
  element: <Root />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'saved-profiles',
      element: <SavedProfiles />,
    },
  ]
 },
])

const App = () => {
  return (
    // <ErrorProvider>
      <ProfileProvider>
        <Suspense fallback={<Loading></Loading>}>
          <RouterProvider router={router} />
        </Suspense>
      </ProfileProvider>
    // </ErrorProvider>

  );
}

export default App;
