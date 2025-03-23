import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AddJob from '../views/AddJob.vue';
import EditJob from '../views/EditJob.vue';
import JobDetail from '../views/JobDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/add', component: AddJob },
    { path: '/jobs/:id', component: EditJob },
    { path: '/job/:id', component: JobDetail },
  ],
});

export default router;