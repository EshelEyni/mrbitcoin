<template>
    <h1>Chart</h1>
    <MarketHistory v-if="marketHistory" :data="getHistoryRates" :labels="getHistoryDates" />
</template>

<script>

import MarketHistory from "@/components/Chart.vue";
import { bitcoinService } from '../services/bitcoin.service';

export default {
    data() {
        return {
            marketHistory: null
        }
    },
    created() {
        this.getMarketPriceHistory()
        console.log('this.marketHistory', this.marketHistory)
    },
    methods: {
        async getMarketPriceHistory() {
            try {
                this.marketHistory = await bitcoinService.getMarketPriceHistory();
            }
            catch (err) {
                console.log('err', err)
            }
        }
    },
    computed: {
        getHistoryDates() {
            return this.marketHistory.map(day => day.date)
        },
        getHistoryRates() {
            return this.marketHistory.map(day => day.rate)
        }
    },
    components: {
        MarketHistory
    }
}
</script>

<style lang="scss"></style>