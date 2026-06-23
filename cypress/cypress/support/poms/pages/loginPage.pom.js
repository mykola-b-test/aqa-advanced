export class LoginPage {
    selectors = {
        signInButton: () => cy.xpath('//button[contains(text(),"Sign In")]'),
        guestLoginButton: () => cy.xpath('//button[contains(text(),"Guest log in")]'),
        signUpButton: () => cy.xpath('//button[contains(text(),"Sign up")]')
    };

    clickSignInButton() {
        this.selectors.signInButton().click();
    }

    clickGuestLoginButton() {
        this.selectors.guestLoginButton().click();
    }

    clickSignUpButton() {
        this.selectors.signUpButton().click();
    }

}