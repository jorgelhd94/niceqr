import { createApp } from 'vue';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import App from './App.vue';

let app = createApp(App);

app.use(store);

app.mount('#app');
