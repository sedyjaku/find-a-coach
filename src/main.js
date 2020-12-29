import { createApp } from 'vue';
import router from '@/router';
import App from '@/App';

let app = createApp(App);
app.use(router)
app.mount('#app');
