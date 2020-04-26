import { showAlert } from './messages';

const date = new Date();

console.log(`DEV_${date.getTime()}`);

import './styles.scss';

document.getElementById('btn-alert').addEventListener('click', showAlert);