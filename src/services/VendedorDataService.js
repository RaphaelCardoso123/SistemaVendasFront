import http from "../http-common";

class VendedorDataService {
    listar() {
        return http.get ('/vendedor/listar');
    }

    cadastrar(vendedor) {
        return http.post('/vendedor', vendedor);
    }

    atualizar(id, vendedor) {
        return http.put(`/vendedor/${id}`, vendedor);
    }
}

export default new VendedorDataService();