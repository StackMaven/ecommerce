import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const HomePage = () => import('@/primary/pages/HomePage.vue');
const ProductPage = () => import('@/primary/pages/ProductsPage.vue');
export enum RootPage {
    home = 'HOME_PAGE',
    product = 'PRODUCT_PAGE',
    productCategory = 'PRODUCT_TYPE_CATEGORY'
}

export const routes: RouteRecordRaw[] = [
    {
        component: HomePage,
        name: RootPage.home,
        path: '/'
    },
    {
        component: ProductPage,
        name: RootPage.product,
        path: '/products/:category'
    }
];

const router = createRouter({ routes, history: createWebHashHistory() });

export default router;
