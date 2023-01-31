import { createWebHistory, createRouter } from "vue-router";

const routes = [

    {
        path: "/vendedor/listar",
        component: ()=> import( "./components/vendedor/Listar.vue")
    },
    {
        path: "/vendedor/cadastrar",
        component: ()=> import( "./components/vendedor/Cadastrar.vue")
    },

    {
        path: "/vendedor/:id",
        component: ()=> import( "./components/vendedor/Atualizar.vue")
    },


    {
        path: "/cliente/listar",
        component: ()=> import( "./components/cliente/Listar.vue")
    },
    {
        path: "/cliente/cadastrar",
        component: ()=> import( "./components/cliente/Cadastrar.vue")
    },
    {
        path: "/cliente/:id",
        component: ()=> import( "./components/cliente/Atualizar.vue")
    },


//     {
//         path: "/servico/listar",
//         component: ListarServico
//     },
//     {
//         path: "/servico/cadastrar",
//         component: CadastrarServico
//     },
//     {
//         path: "/servico/:id",
//         component: AtualizarServico
//     }

// //começo pedido
//     ,{
//         path: "/pedido/listar",
//         component: ListarPedido
//     },
//     {
//         path: "/pedido/cadastrar",
//         component: CadastrarPedido
//     },
//     {
//         path: "/pedido/:id",
//         component: AtualizarPedido
//     }
    //,{
    //    path: " ",
    //    component: ListarPedidosVendedores
    //},
    //{
    //    path: " ",
    //    component: ListarPedidosClientes
    //}
//fim pedido


];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;