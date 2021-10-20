import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './Pages/Index';
import Home from './Pages/Home';

    const routes = [
        {
            path:"/products",
            name:"Index",
            component: Index
        },
        {
            path:"/",
            name:"Home",
            component: Home
        }
    ]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;