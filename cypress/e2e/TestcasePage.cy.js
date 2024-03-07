import "cypress-file-upload";

describe("TestcasePage", () => {
  beforeEach(() => {
    //2. Navigate to url
    cy.visit("https://www.automationexercise.com");
  });

  
  it("TC 07 Verify Test Cases Page", () => {
   
    // 3. Verify that home page is visible successfully
    cy.get('a[href="/test_cases"]').should("be.visible");
  
    // 4. Click on 'Test Cases' button
    cy.get(".shop-menu > .nav > :nth-child(5)").click();
    // cy.get('a[href="/test_cases"]').click();
  
    // 5. Verify user is navigated to test cases page successfully
    cy.url().should("include", "/test_cases");
 
  });
 
});

