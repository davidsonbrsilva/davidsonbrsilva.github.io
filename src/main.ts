import { createApp } from 'vue';

import App from './App.vue';
import Locale from '@locale/index';

createApp(App).use(Locale).mount('#app');
