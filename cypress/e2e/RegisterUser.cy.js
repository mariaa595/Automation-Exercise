import "cypress-file-upload";

describe("Signin/Signup", () => {
  beforeEach(() => {
    //2. Navigate to url
    cy.visit("https://www.automationexercise.com");
  });

  it("TC 01 Register User", () => {
    //3. Verify that home page is visible successfully

    cy.get('a[href="/login"]').should("be.visible");

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();

    //5. Verify 'New User Signup!' is visible
    cy.url().should("include", "/login");

    cy.get(".signup-form").should("be.visible");

    //6. Enter name and email address
    cy.get('input[name="name"]').type("tester");

    cy.get('[data-qa="signup-email"]').type("tester5@yopmail.com");

    //7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();

    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    //cy.contains("Enter Account Information").should("exist");

    cy.get(".login-form").should("be.visible");

    cy.url().should("include", "/signup");

    //9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender2").click();

    cy.get('[data-qa="password"]').type("123456789");

    cy.get('[data-qa="days"]').select("1");

    cy.get('[data-qa="months"]').select("January");

    cy.get('[data-qa="years"]').select("1999");

    //10. Select checkbox 'Sign up for our newsletter!'
    cy.get("#newsletter").click();

    //11. Select checkbox 'Receive special offers from our partners!'
    cy.get("#optin").click();

    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type("maria");

    cy.get('[data-qa="last_name"]').type("khan");

    cy.get('[data-qa="address"]').type("house 123");

    cy.get('[data-qa="country"]').select("Canada");

    cy.get('[data-qa="state"]').type("Alberta");

    cy.get('[data-qa="city"]').type("Alberta");

    cy.get('[data-qa="zipcode"]').type("1000");

    cy.get('[data-qa="mobile_number"]').type("1234567890");

    //13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click();

    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("Account Created!").should("be.visible");

    cy.get('[data-qa="account-created"]').should("be.visible");

    cy.url().should("include", "/account_created");

    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();

    //16. Verify that 'Logged in as username' is visible
    cy.contains("tester").should("exist");

    //17. Click 'Delete Account' button
    cy.get('a[href="/delete_account"]').click();

    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains("Account Deleted!").should("exist");

    cy.get('[data-qa="continue-button"]').click();
  });

  it("TC 02 Login User with correct email and password", () => {
    //3. Verify that home page is visible successfully
    cy.get('a[href="/login"]').should("be.visible");

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();

    //5. Verify 'Login to your account!' is visible
    cy.url().should("include", "/login");

    cy.contains("Login to your account").should("exist");

    //6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type("tester123@yopmail.com");

    cy.get('[data-qa="login-password"]').type("12345678");

    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    //8. Verify that 'Logged in as username' is visible
    cy.contains("tester").should("exist");

    //9. Click 'Delete Account' button

    // cy.get('a[href="/delete_account"]').click();

    //10. Verify that 'ACCOUNT DELETED!' is visible

    //cy.contains('Account Deleted!').should('exist');
  });

  it("TC 03 Login User with incorrect email and password", () => {
    // 3. Verify that home page is visible successfully
    cy.get('a[href="/login"]').should("be.visible");

    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();

    // 5. Verify 'Login to your account' is visible
    cy.url().should("include", "/login");

    cy.contains("Login to your account").should("exist");

    // 6. Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type("tester3@yopmail.com");

    cy.get('[data-qa="login-password"]').type("12345678");

    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.contains("Your email or password is incorrect!").should("exist");
  });

  it("TC 04 Logout User", () => {
    // 3. Verify that home page is visible successfully
    cy.get('a[href="/login"]').should("be.visible");

    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();

    // 5. Verify 'Login to your account' is visible
    cy.url().should("include", "/login");

    cy.contains("Login to your account").should("exist");

    // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type("tester123@yopmail.com");

    cy.get('[data-qa="login-password"]').type("12345678");

    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();

    // 8. Verify that 'Logged in as username' is visible
    cy.contains("tester").should("exist");

    // 9. Click 'Logout' button
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();

    // 10. Verify that user is navigated to login page
    cy.url().should("include", "/login");
  });

  it("TC 05 Register User with existing email", () => {
    //3. Verify that home page is visible successfully
    cy.get('a[href="/login"]').should("be.visible");

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click();

    //5. Verify 'New User Signup!' is visible
    cy.url().should("include", "/login");

    cy.get(".signup-form").should("be.visible");

    //6. Enter name and email address

    cy.get('input[name="name"]').type("tester");

    cy.get('[data-qa="signup-email"]').type("tester123@yopmail.com");

    //7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();

    //8. Verify error 'Email Address already exist!' is visible
    cy.contains("Email Address already exist!").should("exist");
  });

});

