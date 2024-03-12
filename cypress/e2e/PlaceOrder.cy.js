describe("PlaceOrder", ()=>{
    beforeEach( ()=>{
        //2. Navigate to url
        cy.visit("https://www.automationexercise.com");
    })

    it('TC 14: Place Order: Register while Checkout', ()=>{
        // 3. Verify that home page is visible successfully
        cy.get('.features_items > .title').contains('Features Items');
        // 4. Add products to cart
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

        cy.get('[data-qa="signup-email"]').type("tester50@yopmail.com");

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
        
        // 19. Click 'Delete Account' button
        cy.get('.nav > :nth-child(5)').click();
        // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        //cy.get('.col-sm-9 > .btn-default')
    })

    it('TC 15 Place Order: Register before Checkout', ()=>{
        // 3. Verify that home page is visible successfully
        cy.get('.features_items > .title').contains('Features Items');
        // 4. Click 'Signup / Login' button
        cy.get('a[href="/login"]').click();
        // 5. Fill all details in Signup and create account
        cy.url().should("include", "/login");

        cy.get(".signup-form").should("be.visible");

        cy.get('input[name="name"]').type("tester");

        cy.get('[data-qa="signup-email"]').type("tester50@yopmail.com");

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

        // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        cy.contains("Account Created!").should("exist");
        cy.get('[data-qa="account-created"]').should("be.visible");
        cy.url().should("include", "/account_created");
        cy.get('[data-qa="continue-button"]').click();

        // 7. Verify ' Logged in as username' at top
        cy.contains("tester").should("exist");
        // 8. Add products to cart
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click(); //continue shopping
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        // 9. Click 'Cart' button
        cy.get('u').click();
        // 10. Verify that cart page is displayed

        // 11. Click Proceed To Checkout
        cy.get('.col-sm-6 > .btn').click();
        // 12. Verify Address Details and Review Your Order
        cy.get('#address_delivery > :nth-child(4)').should('have.text', 'house 123');
        cy.get('#product-1 > .cart_description > h4 > a').should('have.text','Blue Top');
        // 13. Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('hello this is my first order');
        cy.get(':nth-child(7) > .btn').click();
        // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get('[data-qa="name-on-card"]').type('Maria khan');
        cy.get('[data-qa="card-number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('03');
        cy.get('[data-qa="expiry-year"]').type('2028');
        // 15. Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click();
        // 16. Verify success message 'Your order has been placed successfully!'
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')
        // 17. Click 'Delete Account' button
        cy.get('.nav > :nth-child(5)').click();
        // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        
    })
    it("TC 16 Place Order: Login before Checkout", ()=>{
        // 3. Verify that home page is visible successfully
        cy.get('a[href="/login"]').should("be.visible");
        // 4. Click 'Signup / Login' button
        cy.get('a[href="/login"]').click();
        // 5. Fill email, password and click 'Login' button
        cy.get('[data-qa="login-email"]').type("tester123@yopmail.com");
        cy.get('[data-qa="login-password"]').type("12345678");
        cy.get('[data-qa="login-button"]').click();

        // 6. Verify 'Logged in as username' at top
        cy.contains("tester").should("exist");
        // 7. Add products to cart
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        // 8. Click 'Cart' button
        cy.get('u').click();
        // 9. Verify that cart page is displayed

        // 10. Click Proceed To Checkout
        cy.get('.col-sm-6 >.btn').click();

        // 11. Verify Address Details and Review Your Order
        cy.get('#address_delivery > :nth-child(4)').should('have.text', 'house no 123');
        cy.get('#product-1 > .cart_description > h4 > a').should('have.text','Blue Top');

        // 12. Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('hello this is my first order');
        cy.get(':nth-child(7) > .btn').click();
        // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get('[data-qa="name-on-card"]').type('Maria khan');
        cy.get('[data-qa="card-number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('03');
        cy.get('[data-qa="expiry-year"]').type('2028');
        // 14. Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click();

        // 15. Verify success message 'Your order has been placed successfully!'
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!');
        cy.get('[data-qa="continue-button"]').click();
        cy.get('[href="/logout"]').click(); //logout

        // 16. Click 'Delete Account' button
        // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    })
});