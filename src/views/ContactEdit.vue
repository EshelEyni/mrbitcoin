<template>
    <section v-if="contact" class="contact-edit">
        <h1 class="edit-header">Contact Edit</h1>
        <form class="edit-form" @submit.prevent="onSave">
            <input v-model="contact.name" type="text" placeholder="Name*">
            <input v-model="contact.email" type="text" placeholder="Email*">
            <input v-model="contact.phone" type="text" placeholder="Phone*">
            <button>Save</button>
        </form>
        <button class="btn-go-back" @click="onGoBack()">Back</button>
    </section>
    <section v-else>Loding contact details...</section>
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
            this.$store.dispatch({ type: 'saveContact', contact: this.contact })
            this.$router.back()
        },
        onGoBack() {
            this.$router.back()
        }
    },
}
</script>

<style lang="scss">
.contact-edit {
    height: 90vh;
}

.edit-header {
    text-align: center;
}

.edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    gap: 10px;

    &>*:not(button) {
        width: 30vw;
        height: 45px;
        padding-inline-start: 15px;
        border-radius: 15px;
    }

    button {
        height: 55px;
        width: 85px;
        font-size: 1.25rem;
        border-radius: 15px;
        border: none;
        color: #fff;
        background-color: #FF9500;
    }
}

.btn-go-back {
    position: absolute;
    bottom: 10px;
    margin-top: 50px;
    height: 55px;
    width: 85px;
    font-size: 1.25rem;
    border-radius: 15px;
    border: none;
    color: #fff;
    background-color: #FF9500;
}
</style>
