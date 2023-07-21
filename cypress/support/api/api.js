export class Api {
    getAllCustomers(){
        return cy.request({
            method: 'GET',
            url: 'http://3x5m5o-3000.csb.app/customers',
        })
    }

    addNewCustomer() {
        const body = {
            name: 'test',
            type: 'Individual'
        }
        return cy.request({
            method: 'POST',
            url: 'http://3x5m5o-3000.csb.app/customer',
            headers: {
                'Content-Type': 'application/json',
                'auth_key': 'you are the best'
            },
            body,
        })
    }

    getCustomer(id) {
        return cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `http://3x5m5o-3000.csb.app/customer?id=${id}`,
        })
    }

    deleteCustomer(id) {
        return cy.request({
            method: 'DELETE',
            url: `http://3x5m5o-3000.csb.app/customer/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'auth_key': 'you are the best'
            },
        })
    }

    modifyCustomer(id) {
        const body = {
            name: 'modify',
            type: 'Company'
        }
        return cy.request({
            method: 'PUT',
            url: `http://3x5m5o-3000.csb.app/customer/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'auth_key': 'you are the best'
            },
            body,
        })
    }

}
