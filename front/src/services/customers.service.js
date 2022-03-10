import api from "./api";

function findAllCustomers(){
    return api.get('/customers')
        .then(res => res.data['hydra:member'])
}

function createCustomer(credentials) {
    return api.post('/customers', credentials)
    .then(res => (res.data))
}

function deleteCustomer(id) {
    return api.delete(`/customers/${id}`)
    .then(res => (res.data))
}

export {
    findAllCustomers,
    createCustomer,
    deleteCustomer,
}