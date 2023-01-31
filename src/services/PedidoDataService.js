import http from "../http-common";

class PedidoDataService {
    
    cadastrar(pedido) {      //CADASTRAR
        return http.post('/pedido', pedido);
    }

    obterPorId(id) {           //CONSULTAR
        return http.get(`/pedido/${id}`)
    }

    atualizar(id, pedido) {  //ATUALIZAR    
        return http.put(`/pedido/${id}`, pedido);
    } 

    async deletar(id) {         //EXCLUIR
        return await http.delete(`/pedido/${id}`)
    }

    listar() {                //LISTAR
        return http.get ('/pedido/listar');
    }

    /*
    obterPorClienteId(id) {           //CONSULTAR
        return http.get(` `)
    }

    obterPorVendedorId(id) {           //CONSULTAR
        return http.get(` `)
    }
    */
}

export default new PedidoDataService();