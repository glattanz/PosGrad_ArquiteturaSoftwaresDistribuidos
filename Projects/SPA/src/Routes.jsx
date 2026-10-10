import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './views/RootLayout.jsx'
import { Home } from './views/Home.jsx'
import { Movies } from './views/Movies/Movies.jsx'
import { MovieDetail } from './views/MovieDetails/MovieDetails.jsx'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/movies/:id",
                element: <MovieDetail />
            }
        ]
    }
]);