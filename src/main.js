import { createApp } from 'vue';
import router from '@/router';
import App from '@/App';
import store from '@/store/root';

let app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app');
