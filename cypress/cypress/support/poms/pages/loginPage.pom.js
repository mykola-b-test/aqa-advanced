export class LoginPage {
    selectors = {
        signInButton: () => cy.contains('button', 'Sign In'),
        guestLoginButton: () => cy.contains('button', 'Guest log in'),
        signUpButton: () => cy.contains('button', 'Sign up')
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