<template>
    <header class="app-header">
        <section v-if="user">
            <h1>{{user?.name}}</h1>
            <h2>Balance: {{user?.balance}}</h2>
            <select name="currency" id="" v-model="currency" @change="getRate">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="RUB">RUB</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="BRL">BRL</option>
                <option value="SGD">SGD</option>
            </select>
            <h2>Bitcoin: {{btcRate}} ({{currency}})</h2>
            <button @click="onLogout">Logout</button>
        </section>
        <nav class="nav-bar">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/charts">Charts</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
import { userService } from '@/services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service'

export default {
    data() {
        return {
            currency: 'USD',
            btcRate: 0,
        }
    },
    async created() {
        this.getRate()
    },
    methods: {
        async getRate() {
            try {
                this.btcRate = await bitcoinService.getRate(this.currency)
            } catch (err) {
                console.log('err', err)
            }
        },
        onLogout() {
            userService.logout()
            this.$store.dispatch({ type: 'logout' })
        },
    },
    computed: {
        user() { return this.$store.getters.user }
    }
}
</script>

<style lang="scss">
.app-header {
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;
    background-color: #F7931A;
    color: #000;
    padding: 10px;
    border-radius: 0px 0px 15px 15px;
    height: 5vh;


    .nav-bar {
        display: flex;
        justify-content: space-between;
        padding-inline-end: 15px;
        font-size: 1.2rem;

        a {
            color: #13161F;
            text-decoration: none;
        }
    }

    &>* {
        color: #13161F;
        display: flex;
        gap: 25px;
    }

    button {
        background-color: #13161F;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }



    select {
        background-color: #13161F;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        option {
            font-size: 18px;
        }

        &>* {
            background-color: #13161F;
            color: #fff;
            border-radius: 0px;
            padding: 15px;
        }
    }
}
</style>