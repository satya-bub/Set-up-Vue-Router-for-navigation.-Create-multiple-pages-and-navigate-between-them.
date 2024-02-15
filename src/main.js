import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import CoursesPage from './components/CoursesPage.vue';
import CourseDetailsPage from './components/CourseDetailsPage.vue';
import UserProfilePage from './components/UserProfilePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/courses', component: CoursesPage },
  { path: '/courses/:id', name: 'courseDetails', component: CourseDetailsPage },
  { path: '/profile', component: UserProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
