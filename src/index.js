import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './context/GlobalState';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <StateProvider>
            <Router>
                <App />
            </Router>
        </StateProvider>
    </React.StrictMode>
);
