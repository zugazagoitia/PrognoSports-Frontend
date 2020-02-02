export default {
    mutations: {
        USER_REQUEST: 'USER_REQUEST',
        USER_SUCCESS: 'USER_SUCCESS',
        USER_ERROR: 'USER_ERROR',
        AUTH_LOGOUT: 'AUTH_LOGOUT',
        USER_REGISTER: 'USER_REGISTER',
        USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
        USER_REGISTER_ERROR: 'USER_REGISTER_ERROR',
        USER_CHANGE_PWD_SUCCESS: 'USER_CHANGE_PWD_SUCCESS',
        REMOVE_REGISTERED_MAIL_STATE: 'REMOVE_REGISTERED_MAIL_STATE'
    },
    getters: {
    },
    actions: {
        USER_REQUEST: 'USER_REQUEST',
        USER_REGISTER: 'USER_REGISTER',
        USER_FORGOT_PWD: 'USER_FORGOT_PWD',
        USER_CHANGE_PWD: 'USER_CHANGE_PWD',
    },
};