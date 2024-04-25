/*
 * @Author: findnr
 * @Date: 2024-04-24 07:16:55
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-24 07:21:43
 * @Description: 
 */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import layouts from "./autoload"
import { setupGuard } from "./guard"

const routes = [
    {
        path: '/',
        redirect: '/auth/login',
    },
    ...layouts
]

const router = createRouter({
    // history: createWebHistory(),
    history: process.env.NODE_ENV == 'development' ? createWebHistory() : createWebHashHistory(),
    routes: routes
})

setupGuard(router)

export default router;