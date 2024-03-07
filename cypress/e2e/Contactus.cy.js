import "cypress-file-upload";

describe("Contact Us", () => {
  beforeEach(() => {
    //2. Navigate to url
    cy.visit("https://www.automationexercise.com");
  });

  it("TC 06 Contact Us Form", () => {
    // 3. Verify that home page is visible successfully
    cy.get('a[href="/contact_us"]').should("be.visible");

    // 4. Click on 'Contact Us' button
    cy.get('a[href="/contact_us"]').click();

    // 5. Verify 'GET IN TOUCH' is visible
    cy.get("div.contact-form > .title").should("exist");

    // 6. Enter name, email, subject and message
    cy.get('[data-qa="name"]').type("tester");

    cy.get('[data-qa="email"]').type("tester123@yopmail.com");

    cy.get('[data-qa="subject"]').type("test");

    cy.get("#message").type("hello this is a test message");

    // 7. Upload file
    cy.get("input[type=file]").attachFile("message.txt");

    // 8. Click 'Submit' button
    cy.get('[data-qa="submit-button"]').click();

    // 9. Click OK button
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Your expected alert message"); // Optionally, check the alert text if needed

      // Click on OK
      cy.get("body").type("{enter}");
    });

    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible

    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("exist");

    // 11. Click 'Home' button and verify that landed to home page successfully
    cy.get("#form-section > .btn").click();
  });
  
});

