import { createWebHistory, createRouter } from "vue-router";
import TheWelcome from "./components/TheWelcome.vue";

import ListarVendedor from "./components/vendedor/Listar.vue";
import Cadastrar from "./components/vendedor/Cadastrar.vue";
import Atualizar from "./components/vendedor/Atualizar.vue";

import ListarCliente from "./components/cliente/Listar.vue";
import CadastrarCliente from "./components/cliente/Cadastrar.vue";
import AtualizarCliente from "./components/cliente/Atualizar.vue";

import ListarServico from "./components/servico/Listar.vue";
import CadastrarServico from "./components/servico/Cadastrar.vue";
import AtualizarServico from "./components/servico/Atualizar.vue";



const routes = [
    {
        path: "/",
        component: TheWelcome
    },


    {
        path: "/vendedor/listar",
        component: ListarVendedor
    },
    {
        path: "/vendedor/cadastrar",
        component: Cadastrar
    },
    {
        path: "/vendedor/:id",
        component: Atualizar
    },


    {
        path: "/cliente/listar",
        component: ListarCliente
    },
    {
        path: "/cliente/cadastrar",
        component: CadastrarCliente
    },
    {
        path: "/cliente/:id",
        component: AtualizarCliente
    },


    {
        path: "/servico/listar",
        component: ListarServico
    },
    {
        path: "/servico/cadastrar",
        component: CadastrarServico
    },
    {
        path: "/servico/:id",
        component: AtualizarServico
    }




];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;