import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './index.css';

import App from './App.vue';
import PostList from './components/PostList.vue';
import ArchiveList from './components/ArchiveList.vue';
import PostContent from './components/PostContent.vue';

const routes = [
    {path: '/', component: PostList},
    {path: '/page/:num', component: PostList},
    {path: '/archives', component: ArchiveList},
    {path: '/:slug', component: PostContent},
    {path: '/post/:slug', component: PostContent},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export const vm = createApp(App);
vm.use(router);
vm.mount('#app');