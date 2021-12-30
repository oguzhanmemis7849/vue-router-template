import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home';
import About from './views/About';
import Details from './views/Details';


const routes = [
    {   name:'HomePage',   
        path: '/',
        component: Home
    },
    {   name:'AboutPage',
        path: '/about',
        component: About
    },
    {   name:'DetailsPage',
        path: '/details/:id',
        component: Details
    },
];

const router = createRouter({
    routes,
    history:createWebHistory()
});

export default router;