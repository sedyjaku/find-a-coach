import { createApp } from 'vue';
import router from '@/router';

let app = createApp({});
app.use(router)
app.mount('#app');
