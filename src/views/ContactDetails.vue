<template>
    <div>
        <div v-if="contact" class="contact-details">
            <section class="contact-details-main-container">
                <h1>Contact Details</h1>
                <img :src="setImgUrl(contact)" alt="">
                <h2>{{contact.name}}</h2>
                <h3>{{contact.email}}</h3>
                <h3>{{contact.phone}}</h3>
            </section>
            <TransactionList v-if="contact.transactions.length" :transactions="contact.transactions"
                :isDetails="true" />
            <div>
                <TransferFunds v-if="contact&&user" :contact="contact" @transfer="onTransfer" />
            </div>
            <button class="btn-go-back" @click="onGoBack()">Back</button>
        </div>
        <div v-else>Loding contact details...</div>
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import TransferFunds from '../components/TransferFunds.vue'
import TransactionList from '../components/TransactionList.vue'
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
                const _id = this.$route.params._id;
                this.contact = await contactService.getContactById(_id)
            }
            catch (err) {
                console.log("err", err);
            }
        },
        setImgUrl(contact) {
            const imgUrl = `https://joeschmoe.io/api/v1/${contact._id}@ashallendesign.co.uk`;
            return imgUrl;
        },
        onTransfer(transfer) {
            const contactToUpdate = { ...this.contact }
            contactToUpdate.transactions = [...this.contact.transactions, transfer]
            this.contact = contactToUpdate
        },
        onGoBack() {
            this.$router.back()
        }
    },
    computed: {
        user() { return this.$store.getters.user }
    },
    components: {
        TransferFunds,
        TransactionList
    }
}
</script>

<style lang="scss">
.contact-details {
    height: 90vh;
    display: flex;
    flex-direction: column;
    // align-items: center;

    .contact-details-main-container {
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: center;
        justify-content: space-evenly;
        background-color: #FF9500;
        margin-top: 25px;
        height: 35%;
        width: 35%;
        border-radius: 5px;
        padding: 15px;

        img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
        }
    }
}
</style>
