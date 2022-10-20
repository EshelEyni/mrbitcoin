<template>
    <h1>Contacts</h1>
    <ContactList @contact-removed="onRemoveContact" :contacts="contacts" />

</template>

<script>

import { contactService } from '@/services/contact.service.js';
import ContactList from "@/components/ContactList.vue";

export default {
    data() {
        return {
        }
    },
    methods: {
        onRemoveContact(contactId) {
            this.$store.dispatch({ type: 'removeContact', contactId })
        }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    components: {
        ContactList
    }
};
</script>

<style lang="scss">

</style>