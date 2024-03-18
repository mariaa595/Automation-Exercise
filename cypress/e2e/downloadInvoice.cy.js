describe("Download Invoice", ()=>{
    beforeEach( ()=>{
        //2. Navigate to url
        cy.visit("https://www.automationexercise.com");
        //3. Verify that home page is visible successfully
        cy.get('.features_items >.title').contains('Features Items');
    })

    it('TC 24: Download Invoice after purchase order', ()=>{
        //  4. Add products to cart
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click(); //continue shopping
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

        // 5. Click 'Cart' button
        cy.get('u').click();
        // 6. Verify that cart page is displayed
        //cy.url().should('include','\view_cart');
        // 7. Click Proceed To Checkout
        cy.get('.col-sm-6 > .btn').click();
        // 8. Click 'Register / Login' button
        cy.get('.modal-body > :nth-child(2) > a > u').click();
        // 9. Fill all details in Signup and create account
        cy.url().should("include", "/login");

        cy.get(".signup-form").should("be.visible");

        cy.get('input[name="name"]').type("tester");

        cy.get('[data-qa="signup-email"]').type("tester01@yopmail.com");

        cy.get('[data-qa="signup-button"]').click();

        cy.contains("Enter Account Information").should("exist");

        cy.get(".login-form").should("be.visible");

        cy.url().should("include", "/signup");

        cy.get("#id_gender2").click();

        cy.get('[data-qa="password"]').type("123456789");

        cy.get('[data-qa="days"]').select("1");

        cy.get('[data-qa="months"]').select("January");

        cy.get('[data-qa="years"]').select("1999");

        cy.get("#newsletter").click();

        cy.get("#optin").click();

        cy.get('[data-qa="first_name"]').type("maria");

        cy.get('[data-qa="last_name"]').type("khan");

        cy.get('[data-qa="address"]').type("house 123");

        cy.get('[data-qa="country"]').select("Canada");

        cy.get('[data-qa="state"]').type("Alberta");

        cy.get('[data-qa="city"]').type("Alberta");

        cy.get('[data-qa="zipcode"]').type("1000");

        cy.get('[data-qa="mobile_number"]').type("1234567890");

        cy.get('[data-qa="create-account"]').click();

        // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        cy.contains("Account Created!").should("exist");
        cy.get('[data-qa="account-created"]').should("be.visible");
        cy.url().should("include", "/account_created");
        cy.get('[data-qa="continue-button"]').click();

        // 11. Verify ' Logged in as username' at top
        cy.contains("tester").should("exist");
        // 12.Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        // 13. Click 'Proceed To Checkout' button
        cy.get('.col-sm-6 > .btn').click();
        // 14. Verify Address Details and Review Your Order
        cy.get('#address_delivery > :nth-child(4)').should('have.text', 'house 123');
        cy.get('#product-1 > .cart_description > h4 > a').should('have.text','Blue Top');
        // 15. Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('hello this is my first order');
        cy.get(':nth-child(7) > .btn').click();
        // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get('[data-qa="name-on-card"]').type('Maria khan');
        cy.get('[data-qa="card-number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('03');
        cy.get('[data-qa="expiry-year"]').type('2028');
        // 17. Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click();
        // 18. Verify success message 'Your order has been placed successfully!'
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')
        // 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
        cy.get('.col-sm-9 > .btn-default')
        // 20. Click 'Continue' button
        cy.get('.nav > :nth-child(5)').click()
        // 21. Click 'Delete Account' button
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();

        // 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    })
    it('TC 25:  Verify Scroll Up with "Arrow" button and Scroll Down functionality',()=>{
        // 4. Scroll down page to bottom
        cy.get('#susbscribe_email').scrollIntoView();
        // 5. Verify 'SUBSCRIPTION' is visible
        cy.get('.single-widget > h2').should('have.text', "Subscription");
        // 6. Click on arrow at bottom right side to move upward
        cy.get('#scrollUp > .fa').click();
        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        cy.get('.active > :nth-child(1) > h2').should('have.text', 'Full-Fledged practice website for Automation Engineers')
            })

    it('TC 26:Verify Scroll Up without "Arrow" button and Scroll Down functionality',()=>{
        // 4. Scroll down page to bottom
        cy.get('#susbscribe_email').scrollIntoView();
        // 5. Verify 'SUBSCRIPTION' is visible
        cy.get('.single-widget > h2').should('have.text', "Subscription");
        // 6. Scroll up page to top
        cy.get('.header-middle').scrollIntoView();
        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        cy.get('.active > :nth-child(1) > h2').should('have.text', 'Full-Fledged practice website for Automation Engineers')
    });
});