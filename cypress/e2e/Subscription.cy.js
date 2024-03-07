import "cypress-file-upload";

describe("Products", () => {
  beforeEach(() => {
    //2. Navigate to url
    cy.visit("https://www.automationexercise.com");
  });
 

  it("TC 10 Verify Subscription in home page", ()=> {
    // 3. Verify that home page is visible successfully
    cy.get('.features_items > .title').contains('Features Items');

    // 4. Scroll down to footer
    cy.get('#susbscribe_email').scrollIntoView();

    // 5. Verify text 'SUBSCRIPTION'
    cy.get('.single-widget > h2').should('have.text', "Subscription");

    // 6. Enter email address in input and click arrow button
    cy.get('#susbscribe_email').type("tester123@yopmail.com");
    cy.get('#subscribe').click();

    // 7. Verify success message 'You have been successfully subscribed!' is visible
    cy.contains('You have been successfully subscribed!').should('exist');

  })

  it("TC 11 Verify Subscription in Cart page", ()=>{
    
    // 3. Verify that home page is visible successfully
    cy.get('a[href="/view_cart"]').should("be.visible");

    // 4. Click 'Cart' button
    cy.get('.shop-menu > .nav > :nth-child(3)').click();

    // 5. Scroll down to footer
    cy.get('#susbscribe_email').scrollIntoView();

    // 6. Verify text 'SUBSCRIPTION'
    cy.get('.single-widget > h2').should('have.text', "Subscription");

    // 7. Enter email address in input and click arrow button
    cy.get('#susbscribe_email').type("tester123@yopmail.com");
    cy.get('#subscribe').click();

    // 8. Verify success message 'You have been successfully subscribed!' is visible
    cy.contains('You have been successfully subscribed!').should('exist');

  })

 
});

