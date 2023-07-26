

const env = Cypress.env('environment')
export class Api {
    constructor() {
        cy.fixture('userInfo.json')
            .its(env)
            .then((data) => {
                this.user = data
            })

    }

    getAllCustomers(){
        return cy.request({
            method: 'GET',
            url: '/customers',
        })
    }

    addNewCustomer( key = 'auth_key') {
        const body = {
            name: this.user.CreateUser.name,
            type: this.user.CreateUser.type
        }
        return cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: '/customer',
            headers: {
                'Content-Type': 'application/json',
                'auth_key': `${key}`
            },
            body,
        })
    }

    getCustomer(id) {
        return cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `/customer?id=${id}`,
        })
    }

    deleteCustomer(id, key='auth_key') {
        return cy.request({
            method: 'DELETE',
            failOnStatusCode: false,
            url: `/customer/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'auth_key': `${key}`
            },
        })
    }



    modifyCustomer(id,  key= 'key') {
        const body = {
            name: this.user.ModifyUser.name,
            type: this.user.ModifyUser.type
        }
        return cy.request({
            method: 'PUT',
            failOnStatusCode: false,
            url: `/customer/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'auth_key': `${key}`
            },
            body,
        })
    }

}
