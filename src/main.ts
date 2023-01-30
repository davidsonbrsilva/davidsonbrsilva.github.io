import { createApp } from 'vue';

import App from './App.vue';
import Locale from '@locale';

import './global.css';

createApp(App).use(Locale).mount('#app');
