<template>
    <div>
        <h1 class="tf-header">Transfer funds</h1>
        <form class="edit-form" v-if="user" @submit.prevent="onTransfer">
            <input v-model="transfer.amount" ref="input" type="number" placeholder="Amount*" min="0"
                :max="user?.balance">
            <button class="btn-transfer">Transfer</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            transfer: {
                toId: this.contact?._id,
                from: null,
                at: null,
                amount: 0,
            },
        };
    },
    methods: {
        onTransfer() {
            this.transfer.from = this.user?.name
            this.transfer.at = new Date().toLocaleString()
            const userToUpdate = { ...this.user }
            userToUpdate.balance -= this.transfer.amount
            userToUpdate.transactions = [...userToUpdate.transactions, { ...this.transfer, to: this.contact?.name }]
            this.$store.dispatch({ type: 'updateUser', user: userToUpdate })
            this.$emit('transfer', this.transfer);
        },
    },
    computed: {
        user() { return this.$store.getters.user },
    }
}
</script>

<style lang="scss">
.tf-header {
    text-align: center;
}


.edit-form .btn-transfer {
    width: fit-content;
}

</style>
