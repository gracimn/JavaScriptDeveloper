import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//Este código é responsável por iniciar a renderização da sua aplicação React, e o componente App é o ponto de partida onde toda a interface do usuário da sua aplicação é montada.