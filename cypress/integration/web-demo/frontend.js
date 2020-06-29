/// <reference types="Cypress" />
context('front-end script test workflows', () => {
    beforeEach(() => {
      
      cy.visit('https://www.bcd-bte.com/loginAdmin') 
      const url = 'https://www.bcd-bte.com/loginAdmin'
      
    })    

   function login () {
    cy.visit('https://www.bcd-bte.com/loginAdmin')
    cy.get('[name="email"]').type('building.cons98@gmail.com').should('have.value', 'building.cons98@gmail.com')
    cy.get('[name="password"]').type('buildingcons98').should('have.value', 'buildingcons98')
    cy.get('[class="login-form-btn"]').contains("Login").click()
  }

  
  it ('login and check menu',()=>{
    login () 
    cy.contains("ยินตอนรับเข้าสู่ระบบ").first().click()
    cy.contains("Dashboard").first().click()
    cy.contains("ผลงาน").first().click()
    cy.contains("บริการ").first().click()
    cy.contains("บทความ").first().click()
})

it ('view page portfolioList ui element',()=>{
    login () 
    cy.visit('https://www.bcd-bte.com/portfolioList')
    cy.contains("จัดการข้อมูลผลงาน")
    cy.get('[name="search"]').type('งานเทปูน').should('have.value', 'งานเทปูน')
})

it ('view page blogList ui element',()=>{
  login () 
  cy.visit('https://www.bcd-bte.com/blogList')
  cy.contains("จัดการข้อมูลบทความ")
  cy.get('[name="search"]').type('งานเทพื้นบ้าน').should('have.value', 'งานเทพื้นบ้าน')
  
})

it ('view add blog case 1',()=>{
  login () 
  cy.visit('https://www.bcd-bte.com/blogList')
  cy.contains("จัดการข้อมูลบทความ")
  cy.get('[class="btn btn-info"]').first().click()
  cy.contains("เพิ่มบทความ")
  cy.get('[name="blog_name"]').type('งานเทพื้นบ้าน').should('have.value', 'งานเทพื้นบ้าน')
  cy.get('[name="blog_type_id"]').select('41').should('have.value', '41')
  cy.get('[name="author_id"]').select('4').should('have.value', '4')
  cy.get('[class="mce-content-body "]').type('งานเทพื้นบ้าน').should('have.value', 'งานเทพื้นบ้าน')

})
  })
  
