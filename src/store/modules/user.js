import { userService } from "../../services/user.service"


export default {
    state: {
        user: userService.getLoggedinUser(),
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        signup({ commit }, { user }) {
            userService.signup(user)
            commit({ type: 'setUser', user })
        },
        login({ commit }, { user }) {
            commit({ type: 'setUser', user })
        },
        logout({ commit }) {
            userService.logout()
            commit({ type: 'setUser', user: null })
        },
        updateUser({ commit }, { user }) {
            userService.updateUser(user)
            commit({ type: 'setUser', user })
        }
    },
    getters: {
        user(state) { return state.user }
    }
}