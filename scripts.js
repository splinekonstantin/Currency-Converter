import { init } from './init.js';

const app = document.querySelector('.app');

// start the app
app.addEventListener('mouseenter', init, { ones: true });
