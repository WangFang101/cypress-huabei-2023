export class Api {
    constructor() {
        cy.fixture('userInfo.json')
            .then((data) => {
                this.user = data
                console.log(this.user.CreateUser.type)
            })

    }


    getAllCustomers(){
        return cy.request({
            method: 'GET',
            url: 'http://3x5m5o-3000.csb.app/customers',
        })
    }

    addNewCustomer() {
        const body = {
            name: this.user.CreateUser.name,
            type: this.user.CreateUser.type
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
            name: this.user.ModifyUser.name,
            type: this.user.ModifyUser.type
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
