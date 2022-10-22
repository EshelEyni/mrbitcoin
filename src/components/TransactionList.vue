<template>
    <section class="ta-list-container">
        <h1>Transaction List</h1>
        <ul class="ta-list">
            <li v-for="transaction in transactions" class="transaction" :key="transaction._id">
                <h3>Amount: {{transaction.amount}}</h3>
                <h3 v-if="isDetails">From: {{transaction.from}}</h3>
                <h3 v-if="!isDetails">To: {{transaction.to}}</h3>
                <h3>{{transaction.at}}</h3>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    props: {
        transactions: {
            type: Array,
            required: true,
        },
        isDetails: {
            type: Boolean,
            default: false,
        }
    },
    created() {
        console.log('this.transactions', this.transactions)
    },
}

</script>

<style lang="scss">
.ta-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .ta-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .transaction {
            display: grid;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid black;
            border-radius: 5px;
            margin-bottom: 1rem;
            width: 100%;

            h3 {
                font-size: 1.5rem;
                margin: 0;
            }
        }
    }
}
</style>