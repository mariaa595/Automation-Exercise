import "cypress-file-upload";

describe("Products", () => {
  beforeEach(() => {
    //2. Navigate to url
    cy.visit("https://www.automationexercise.com");
  });
 
  it("TC 08 Verify All Products and product detail page", () => {
   
    // 3. Verify that home page is visible successfully
    cy.get('a[href="/products"]').should("be.visible");
   
    // 4. Click on 'Products' button
    cy.get('a[href="/products"]').click();
   
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should("include", "/products");
   
    // 6. The products list is visible
    cy.get(".title").should("be.visible");
   
    // 7. Click on 'View Product' of first product
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
   
    // 8. User is landed to product detail page
    cy.url().should("include", "/product_details");
   
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    cy.get("label").should("have.text", "Quantity:");
 
  });

  it("TC 09 Search Product", ()=>{
    // 3. Verify that home page is visible successfully
    cy.get('[href="/products"]').should("be.visible");

    // 4. Click on 'Products' button
    cy.get('[href="/products"]').click();


    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should("include", "/products");
    cy.get('.title').contains("All Products")

    // 6. Enter product name in search input and click search button
    cy.get('#search_product').type("Winter Top");
    cy.get('#submit_search').click();

    // 7. Verify 'SEARCHED PRODUCTS' is visible
    cy.get('.title').contains("Searched Products");

    // 8. Verify all the products related to search are visible
    cy.get('.productinfo > p').contains('Winter Top');
  })

  it("TC 12 Add Products in Cart", () =>{

    // 3. Verify that home page is visible successfully
    cy.get('.features_items > .title').contains('Features Items');

    // 4. Click 'Products' button
    cy.get('[href="/products"]').click();

    // 5. Hover over first product and click 'Add to cart'
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo').click();
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    // 6. Click 'Continue Shopping' button
    cy.get('.modal-footer > .btn').click();
    // 7. Hover over second product and click 'Add to cart'
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo').click();
    cy.get('.features_items > :nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    // 8. Click 'View Cart' button
    cy.get('u').click();

    // 9. Verify both products are added to Cart
    cy.get('#product-1 > .cart_description > h4 > a').should('exist');
    cy.get('#product-3 > .cart_description > h4 > a').should('exist');

    // 10. Verify their prices, quantity and total price
    cy.get('#product-1 > .cart_price > p').should('be.visible');
    cy.get('#product-1 > .cart_quantity').should('exist');
    cy.get('#product-1 > .cart_total > .cart_total_price').should('exist');

    cy.get('#product-3 > .cart_price > p').should('be.visible');
    cy.get('#product-3 > .cart_quantity').should('exist');
    cy.get('#product-3 > .cart_total > .cart_total_price').should('exist');


  })

  it("TC 13 Verify Product quantity in Cart", ()=>{
    // 3. Verify that home page is visible successfully
    cy.get('.features_items > .title').contains('Features Items');
    // 4. Click 'View Product' for any product on home page
    cy.get('[href="/product_details/1"]').click();
    // 5. Verify product detail is opened
    cy.url().should("include", "/product_details/1");
    // 6. Increase quantity to 4
    cy.get('#quantity').clear();
    cy.get('#quantity').type("4");
    cy.get('#quantity').type("{enter}");
    // 7. Click 'Add to cart' button
    cy.get(':nth-child(5) > .btn').click();
    // 8. Click 'View Cart' button
    cy.get('u').click();
    // 8. Verify that product is displayed in cart page with exact quantity
    cy.get('#product-1 >.cart_quantity').should('exist');
    cy.get('.disabled').should('have.text', '4');
    cy.get('#product-1 >.cart_total >.cart_total_price').should('exist');
    
    
  })
  it("TC 17: Remove Products From Cart", ()=>{
    // 3. Verify that home page is visible successfully
    cy.get('.features_items > .title').contains('Features Items');
    // 4. Add products to cart
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

    // 5. Click 'Cart' button
    cy.get('u').click();

    // 6. Verify that cart page is displayed
    cy.get(".active").contains("Shopping Cart");
    // 7. Click 'X' button corresponding to particular product
    cy.get('.fa.fa-times').click();
    // 8. Verify that product is removed from the cart
    cy.get('#empty_cart').should('exist');
  })

  it("TC 18: View Category Products",()=>{
  // 3. Verify that categories are visible on left side bar
  cy.get('.left-sidebar > :nth-child(1)').contains('Category');
  // 4. Click on 'Women' category
  cy.get('[href="#Women"]').click();
  // 5. Click on any category link under 'Women' category, for example: Dress
  cy.get('[href="/category_products/1"]').click();
  // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
  cy.get('.title.text-center').contains('Women - Dress Products');
  // 7. On left side bar, click on any sub-category link of 'Men' category
  cy.get('[href="#Men"]').click();
  cy.get('[href="/category_products/6"]').click();
  // 8. Verify that user is navigated to that category page
  cy.url().should("include", "/category_products/6");
  cy.get('.title.text-center').contains('Men - Jeans Products');
  })

  it("TC 19: View & Cart Brand Products", ()=>{
  // 3. Click on 'Products' button
  cy.get('[href="/products"]').click();

  // 4. Verify that Brands are visible on left side bar
  cy.get('.brands_products').contains("Brands");

  // 5. Click on any brand name
  cy.get('[href="/brand_products/Polo"]').click();

  // 6. Verify that user is navigated to brand page and brand products are displayed
  cy.url().should("include", "/brand_products/Polo");
  cy.get('.title.text-center').contains('Brand - Polo Products');

  // 7. On left side bar, click on any other brand link
  cy.get('[href="/brand_products/H&M"]').click();

  // 8. Verify that user is navigated to that brand page and can see products
  cy.get('.title.text-center').contains('Brand - H&M Products');

  })

  it('TC 20: Search Products and Verify Cart After Login', ()=>{
  // 3. Click on 'Products' button]
  cy.get('[href="/products"]').click();
  // 4. Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should("include", "/products");
  cy.get('.title').contains("All Products");
  // 5. Enter product name in search input and click search button
  cy.get('#search_product').type('Tshirt');
  cy.get('#submit_search').click();
  // 6. Verify 'SEARCHED PRODUCTS' is visible
  cy.get('.title').contains('Searched Products');
  // 7. Verify all the products related to search are visible
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').contains('Tshirt');

  // 8. Add those products to cart
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

  // 9. Click 'Cart' button and verify that products are visible in cart
  cy.get('u').click();
  cy.get('.col-sm-6 >.btn').click();
  // 10. Click 'Signup / Login' button and submit login details
  cy.get('.modal-body > :nth-child(2) > a > u').click();
  cy.get('[data-qa="login-email"]').type("tester123@yopmail.com");
  cy.get('[data-qa="login-password"]').type("12345678");
  cy.get('[data-qa="login-button"]').click();

  // 11. Again, go to Cart page
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  // 12. Verify that those products are visible in cart after login as well
  cy.get('.cart_description > p').contains("Tshirts")
  })
  it('TC 21: Add review on product ', ()=>{
  // 3. Click on 'Products' button
  cy.get('[href="/products"]').click();
  // 4. Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should("include", "/products");
  cy.get('.title').contains("All Products");
  // 5. Click on 'View Product' button
  cy.get('[href="/product_details/1"]').click();
  // 6. Verify 'Write Your Review' is visible
  cy.get('[href="#reviews"]').contains('Write Your Review');
  // 7. Enter name, email and review
  cy.get('#name').type('test');
  cy.get('#email').type('tester@yopmail.com');
  cy.get('#review').type('test');
  // 8. Click 'Submit' button
  cy.get('#button-review').click();
  // 9. Verify success message 'Thank you for your review.'
  
  })
});

