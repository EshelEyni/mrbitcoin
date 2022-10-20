<template>
    <div v-if="contact" class="contact-edit">
        <h1>Contact Edit</h1>
        <form class="edit-form" @submit.prevent="onSave">
            <input v-model="contact.name" type="text" placeholder="Name*">
            <input v-model="contact.email" type="text" placeholder="Email*">
            <input v-model="contact.phone" type="text" placeholder="Phone*">
            <button>Save</button>
        </form>
        <button @click="onGoBack()">Back</button>
    </div>
    <div v-else>Loding contact details...</div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const _id = this.$route.params._id
        if (_id) {
            this.getContact()
        } else {
            console.log('!CONTACT._ID');
            this.contact = await contactService.getEmptyContact()
        }
    },
    methods: {
        async getContact() {
            try {
                const _id = this.$route.params._id
                this.contact = await contactService.getContactById(_id)
            }
            catch (err) {
                console.log('err', err)
            }
        },
        async onSave() {
            this.$store.dispatch({ type: 'saveContact', contact: this.contact})
            this.$router.back()
        },
        onGoBack() {
            this.$router.back()
        }
    },
}
</script>

<style lang="scss">
.edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    gap: 10px;

    &>*:not(:nth-child(4)) {
        width: 30vw;
        height: 45px;
        padding-inline-start: 15px;
        border-radius: 15px;
    }

    &>*:nth-child(4) {
        height: 45px;
        width: 75px;
        border-radius: 15px;
    }
}
</style>
