import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '@/views/AboutMe.vue';
import Contact from '@/views/Contact.vue';
import Home from "@/views/Home.vue";
import Projects from '@/views/Projects.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about_me', component: AboutMe }, 
    { path: '/contact', component: Contact }, 
    { path: '/projects', component: Projects } 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

