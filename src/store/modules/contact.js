import { contactService } from "../../services/contact.service"

// import { carService } from '@/services/car.service.js'
export default {
    state: {
        contacts: [],
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            state.contacts = state.contacts.filter(car => car._id !== contactId)
        },
        saveContact(state, { contact }){
            const contactId = contact._id
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1, contact)
        }
    },
    actions: {
        async loadContacts(context) {
            try {
                const contacts = await contactService.getContacts()
                console.log(contacts);
                context.commit({ type: 'setContacts', contacts })
            }
            catch (err) {
                console.log('err', err)
            }
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: 'removeContact', contactId })
        },
        async saveContact({ commit }, { contact }) {
            await contactService.saveContact(contact)
            commit({ type: 'saveContact', contact })
        }
    },
    getters: {
        contacts(state) { return state.contacts }
    }
}