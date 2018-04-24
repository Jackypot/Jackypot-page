import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/grid_Template.css';
import './estilos/contenedores.css';
import './estilos/cuerpo.css';
import './estilos/navigation.css';
import './estilos/popovers.css';
import './estilos/prizes.css';
import './estilos/transparencia.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
