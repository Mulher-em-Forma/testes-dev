import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/:id',
                element: <CharacterPage />
            }
        ]
    }
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    },
}
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true,
            }}
        />
    </StrictMode>,
)
