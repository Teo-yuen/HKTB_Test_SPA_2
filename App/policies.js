/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_SIGNIN",
        forgotPassword: 'B2C_1_reset_v3',
    },
    authorities: {
        signUpSignIn: {
            authority: "https://b2cdemo02.b2clogin.com/B2CDemo02.onmicrosoft.com/B2C_1A_SIGNIN",
        },
        forgotPassword: {
            authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_reset_v3',
        },
    },
    authorityDomain: "b2cdemo02.b2clogin.com"
}