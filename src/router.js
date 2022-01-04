import { createRouter, createWebHashHistory } from "vue-router";
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
    {   name:'DetailPage',
        path: '/detail/:userID',
        component: Details
    },
];

//import ettiğimiz createRouter'ı tanımlıyoruz.

const router = createRouter({
    routes,
    // mode : "hash|history",
    // history:createWebHistory()

    //sunucu tarafından router'ların sayfa yenilemelerine karşın createWebHashHistory koyularak
    //sunucu tarafından anlaşılmasını bunun bir singlepage application olduğunu anlamasını sağlar.
    history : createWebHashHistory()
});

export default router;