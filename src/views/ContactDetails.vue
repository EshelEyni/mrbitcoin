<template>
    <div v-if="contact" class="contact-details">
        <h1>Contact Details</h1>
        <img :src="setImgUrl(contact)" alt="">
        <h2>{{contact.name}}</h2>
        <h3>{{contact.email}}</h3>
        <h3>{{contact.phone}}</h3>
        <button>
            <RouterLink to="/contact">Back</RouterLink>
        </button>
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
        this.getContact()
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
        setImgUrl(contact) {
            const imgUrl = `https://robohash.org/${contact.name}/?set=set4`
            return imgUrl
        }
    },
}
</script>

<style lang="scss">
.contact-details {
    background-color: lightseagreen;
    padding: 10px;

    img {
        height: 50px;
        width: 50px;
    }
}
</style>
