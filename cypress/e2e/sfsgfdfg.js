/// <reference types="cypress"/>
 
 
 //feature
describe('LoginPage', () => {

    //scenarios




    


    it('New User Signup', ()=> {
        
        cy.visit('/login')
        cy.get('[data-qa="signup-name"]').type('Avocado')
        cy.get('[data-qa="signup-email"]').type('avocado@email.com')
        cy.get('[data-qa="signup-button"]').click()


        cy.get('.clearfix > :nth-child(3)').click()
        cy.get('[data-qa="password"]').type('avocado1234')
        cy.get('[data-qa="days"]').select('12')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('2000')
        cy.get('[data-qa="first_name"]').type('AvocadoName')
        cy.get('[data-qa="last_name"]').type('AvocadoLastName')
        cy.get('[data-qa="address"]').type('AvocadoStreet')
        cy.get('[data-qa="country"]').type('Canada')
        cy.get('[data-qa="state"]').type('Fresh')
        cy.get('[data-qa="city"]').type('Ground')
        cy.get('[data-qa="zipcode"]').type('00001')
        cy.get('[data-qa="mobile_number"]').type('00142121')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
    
    
    })
        
        

    it.skip('Login', ()=> {
        
        cy.visit('/login')
        cy.get('[data-qa="login-email"]').type('avocado@email.com')
  
        cy.get('[data-qa="login-password"]').type('avocado1234{enter}')
        //cy.get('[data-qa="login-button"]').click()
        //cy.get('[data-qa="continue-button"]').click()
    
    
    })
        
        

        
})





