import {Api} from "../support/api/api";

describe('API Tests', () => {

  let api
  let id

  before(() => {
    api = new Api()
  })

  it('get all customers', () => {
    api.getAllCustomers().then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('can not add new customer without token', () => {
    api.addNewCustomer('').then((response) => {
      expect(response.status).to.equal(401);
    });
  });

  it('add new customer', () => {
    api.addNewCustomer().then((response) => {
      expect(response.status).to.equal(201);
      id = response.body.id
      api.getCustomer(id).then((resp1)=>{
        expect(resp1.body.data.customer.id).to.equal(id);
        expect(resp1.body.data.customer.name).to.equal(api.user.CreateUser.name);
      })
    });
  });

  it('modify customer', () => {
    api.modifyCustomer(id).then((response)=>{
      expect(response.status).to.equal(200);
      api.getCustomer(id).should((resp1)=>{
        expect(resp1.body.data.customer.name).to.equal(api.user.ModifyUser.name);
        expect(resp1.body.data.customer.type).to.equal(api.user.ModifyUser.type);
      })
    })
  });

  it('can not modify customer without token', () => {
    api.modifyCustomer(id,'').then((response)=>{
      expect(response.status).to.equal(401);
    })
  });

  it('delete new customer', () => {
    api.deleteCustomer(id).then((response)=>{
      expect(response.status).to.equal(200);
      api.getCustomer().should((resp1)=>{
        expect(resp1.status).to.equal(404)
      })
    })
  });

  it('can not delete new customer without token', () => {
    api.deleteCustomer(id,'').then((response)=>{
      expect(response.status).to.equal(401);
    })
  });


});







