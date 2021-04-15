/// <referencec tyeps="Cypress"/>

context('Login form', ()=>{
  beforeEach(()=>{
    cy.visit('/')
  })
  it('Should perform a login', ()=>{
    cy.get('[name="username"]').type('username');
    cy.get('[name="password"]').type('password');
  })
})
