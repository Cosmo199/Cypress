/// <reference types="Cypress" />


context('front-end script test workflows', () => {
    beforeEach(() => {
      
      cy.visit('http://www.ploichao.com/backend-user/register') 
      const url = 'http://www.ploichao.com/backend-user/register'
      
    })
    
   function login () {
    cy.visit('http://www.ploichao.com/backend-user/login')
    cy.get('[name="email"]').type('aisbot01@ais.com').should('have.value', 'aisbot01@ais.com')
    cy.get('[name="password"]').type('123456').should('have.value', '123456')
    cy.get('[id="btn_login"]').first().click()  
  }

  it ('login and check menu',()=>{
    login () 
    cy.contains("ข้อมูลส่วนตัว").first().click()
    cy.contains("อัพโหลดสิ่งของ").first().click()
    cy.contains("รายการสิ่งของ").first().click()
    cy.contains("ข้อกำหนดและเงื่อนไข").first().click()
    cy.contains("อัตราค่าบริการ").first().click()
})

    /*
  
    it ('success register',()=>{
      cy.visit('http://www.ploichao.com/backend-user/register')
      cy.get('[name="name"]').type('aisbot05').should('have.value', 'aisbot05')
      cy.get('[name="adress"]').type('ais tower 1').should('have.value', 'ais tower 1')
      cy.get('[name="phone"]').type('0948911206').should('have.value', '0948911206')
      cy.get('[name="email"]').type('aisbot05@ais.com').should('have.value', 'aisbot05@ais.com')
      cy.get('[name="password"]').type('123456').should('have.value', '123456')
      cy.get('[name="re-password"]').type('123456').should('have.value', '123456')
      cy.get('[name="selector"]').first().click()
      cy.get('[id="btn_login"]').first().click()
    })
   

    it ('edit profile',()=>{
        login () 
        cy.contains("ข้อมูลส่วนตัว").first().click()
        cy.get('[name="username"]').clear()
        cy.get('[name="username"]').type('aisbot1').should('have.value', 'aisbot1')
        cy.get('[class="btn btn-info pull-right"]').contains("บันทึก").first().click()
    })

    it ('edit profile',()=>{
        login () 
        cy.contains("อัพโหลดสิ่งของ").first().click()
        cy.get('[name="name"]').type('กระเป๋าเดินทาง').should('have.value', 'กระเป๋าเดินทาง')
        cy.get('[name="price"]').type('120').should('have.value', '120')
        cy.get('[name="description"]').type('ทำจากวัสดุที่ดี ABS และ POLYCARBONATE (โพลีคาร์บอเนต) ล้อคู่ 8 ล้อ ทำจากวัสดุที่ดีหมุน 360 องศา เงียบ ใช้ระบบเข็นได้ กระเป๋าเดินทางที่มีดีไซน์ ทันสมัยโดดเด่น หรูหรา ดูดี').should('have.value', 'ทำจากวัสดุที่ดี ABS และ POLYCARBONATE (โพลีคาร์บอเนต) ล้อคู่ 8 ล้อ ทำจากวัสดุที่ดีหมุน 360 องศา เงียบ ใช้ระบบเข็นได้ กระเป๋าเดินทางที่มีดีไซน์ ทันสมัยโดดเด่น หรูหรา ดูดี')
        cy.get('[name="agreement"]').type('ทดสอบ').should('have.value', 'ทดสอบ')
        cy.get('[name="service_id"]').select('1').should('have.value', '1')
        cy.get('[name="province_id"]').select('1').should('have.value', '1')
        cy.get('[name="category_id"]').select('1').should('have.value', '1')
        cy.get('[name="rent_type_id"]').select('1').should('have.value', '1')

    })
  */
  
  })
  
  
  
  
