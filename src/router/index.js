import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetails from '../views/EventDetails.vue';
import About from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: EventList,
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
