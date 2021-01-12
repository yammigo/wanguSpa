// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Meta from 'vue-meta'
import store from './store/index.js'
Vue.use(VueAwesomeSwiper)
    //全局组件
import banner from '@/components/banner/banner'
import page from '@/components/page/page'
import top from '@/components/toTop/top'
import loading from '@/components/loading/loading'
Vue.component('banner', banner)
Vue.component('page', page)
Vue.component('toTop', top)
Vue.component('loading', loading)
    //路由页面
const index = resolve => require(['@/components/index/index'], resolve)
const solution = resolve => require(['@/components/solution/solution'], resolve)
const solutionDetail = resolve => require(['@/components/solution/solution_detail'], resolve)
const product = resolve => require(['@/components/product/product'], resolve)
const proDetail = resolve => require(['@/components/product/product_detail'], resolve)
const case1 = resolve => require(['@/components/case/case'], resolve)
const news = resolve => require(['@/components/news/news'], resolve)
const newsDetail = resolve => require(['@/components/news/newsDetail'], resolve)
const about = resolve => require(['@/components/about/about'], resolve)
const search = resolve => require(['@/components/search/search'], resolve)
const discover = resolve => require(['@/components/discover/discover'], resolve)
const disDetail = resolve => require(['@/components/discover/disDetail'], resolve)
const share = resolve => require(['@/components/share/share'], resolve)
const shareDetail = resolve => require(['@/components/share/shareDetail'], resolve)

/*
import 'common/stylus/index.styl';*/

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Meta);
// 接口地址
// global.baseUrl = 'http://www.vgtech.com.cn/adminsys/';
global.baseUrl = 'adminsys/';
// global.baseUrl='http://www.zhongqinsoft.com/zq_saas/';
/*http://www.zhongqinsoft.com/zq_saas*/
global.newsUrl = baseUrl + 'system_admin/saas_news/';
global.lang = 0;
global.pro = 0;
global.solu = 0;
global.news = 0;

if (localStorage['lang']) {
    global.lang = parseInt(localStorage['lang']);
} else {
    localStorage['lang'] = 0;
    global.lang = 0
}
if (localStorage['pro']) {
    global.pro = parseInt(localStorage['pro']);
} else {
    localStorage['pro'] = 0;
    global.pro = 0
}
if (localStorage['solu']) {
    global.solu = parseInt(localStorage['solu']);
} else {
    localStorage['solu'] = 0;
    global.solu = 0
}
if (localStorage['news']) {
    global.news = parseInt(localStorage['news']);
} else {
    localStorage['news'] = 0;
    global.news = 0
}
const routes = [
    { path: '/', name: 'home', component: index },
    { path: '/solution', name: 'solution', component: solution },
    { path: '/solutionDetail/:id', name: 'solutionDetail', component: solutionDetail },
    { path: '/product', name: 'product', component: product },
    { path: '/productDetail/:id', name: 'productDetail', component: proDetail },
    { path: '/case', name: 'case', component: case1 },
    { path: '/news', name: 'news', component: news },
    { path: '/newsDetail/:id', name: 'newsDetail', component: newsDetail },
    { path: '/about/:id', name: 'about', component: about },
    { path: '/search/:id', name: 'search', component: search },
    { path: '/discover', name: 'discover', component: discover },
    { path: '/disDetail/:id', name: 'disDetail', component: disDetail },
    { path: '/share', name: 'share', component: share },
    { path: '/shareDetail/:id', name: 'shareDetail', component: shareDetail }
];

const router = new VueRouter({
    'linkActiveClass': 'active',
    routes
});

router.beforeEach((to, from, next) => {
    next()
    window.scrollTo(0, 0);
})
if (sessionStorage['route']) {
    router.push(sessionStorage['route'])
} else {
    router.push('/');
}


/*	eslint-disable no-new	*/
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});