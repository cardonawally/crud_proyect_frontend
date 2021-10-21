import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './Pages/Index';

    const routes = [
        {
            path:"/products",
            name:"Index",
            component: Index
        }
    ]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;