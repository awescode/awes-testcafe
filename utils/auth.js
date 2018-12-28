export const getCredentials = (config) => {
    return {
        username: config.httpAuth_username,
        password: config.httpAuth_password
    }
};