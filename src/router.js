import { createWebHistory, createRouter } from "vue-router";
import ListarVendedor from "./components/vendedor/Listar.vue";
import TheWelcome from "./components/TheWelcome.vue";


const routes = [
    {
        path: "/vendedor/listar",
        component: ListarVendedor
    },
    {
        path: "/",
        component: TheWelcome
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;