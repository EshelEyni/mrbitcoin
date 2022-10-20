<template>
    <header class="app-header">
        <section v-if="user">
            <h1>{{user.name}}</h1>
            <h2>USD/Bitcoin: {{btcRate.data}}</h2>
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
            user: null,
            btcRate: 0,
        }
    },
    async created() {
        this.user = await userService.getUser()
        this.btcRate = await bitcoinService.getRate()
    },
}
</script>

<style lang="scss">
.app-header {
    display: flex;
    justify-content: space-between;
padding: 0px 25px;
    &>* {
        display: flex;
        gap: 25px;
    }
}
</style>