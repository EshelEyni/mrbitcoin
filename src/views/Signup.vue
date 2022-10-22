<template>
    <div class="contact-edit">
        <h1>Signup</h1>
        <form class="edit-form" @submit.prevent="onSignup">
            <input v-model="user.name" type="text" placeholder="Name*">
            <input v-model="user.email" type="text" placeholder="Email*">
            <input v-model="user.phone" type="text" placeholder="Phone*">
            <button>Signup</button>
        </form>
        <button class="btn-go-back"  @click="onGoBack()">Back</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                balance: 100,
                transactions: []
            },
        }
    },
    async created() {
    },
    methods: {
        onSignup() {
            // console.log('this.user', this.user)
            this.$store.dispatch({ type: 'signup', user: this.user })
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

    &>*:not(button) {
        width: 30vw;
        height: 45px;
        padding-inline-start: 15px;
        border-radius: 15px;
    }

    button {
        height: 45px;
        width: 75px;
        border-radius: 15px;
    }
}
</style>
