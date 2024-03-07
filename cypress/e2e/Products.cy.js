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

  it.only("TC 13 Verify Product quantity in Cart", ()=>{
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
});

