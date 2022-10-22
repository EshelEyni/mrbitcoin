<template>
    <h1 class="contact-app-header">Contacts</h1>
    <ContactList @contact-removed="onRemoveContact" :contacts="contacts" />
</template>

<script>
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
    created() {
        this.$store.dispatch({ type: 'loadContacts' })
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    components: {
        ContactList
    }
}
</script>

<style lang="scss">
.contact-app-header {
    text-align: center;
}
</style>