import api from "./api"

function findAllInvoices(){
    return api.get('/invoices')
        .then(res => res.data['hydra:member'])
}

function createInvoice(credentials) {
    return api.post('/invoices', credentials)
    .then(res => (res.data))
}

function deleteInvoice(id) {
    return api.delete(`/invoices/${id}`)
    .then(res => (res.data))
}

export {
    createInvoice,
    deleteInvoice,
    findAllInvoices
}