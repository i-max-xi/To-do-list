'useStrict';

import './style.css';
import * as Add from './add.js';

const Enter = document.querySelector('#enter');

Enter.addEventListener('click', (Add.addItem));