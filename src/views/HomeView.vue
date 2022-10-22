
<template>
  <main class="home-page">
    <h1>Mr. Bitcoin🪙</h1>
    <section class="main-content" v-if="user">
      <h1>Welcome {{user.name}}</h1>
      <h2>Enjoy you Bitcoin wallet</h2>
      <TransactionList :transactions="userTransactions" />
    </section>
    <section class="links" v-else>
      <h1>You're not connected</h1>
      <section class="links-container">
        <RouterLink :to="`/login/`">Login</RouterLink>
        <RouterLink :to="`/signup/`">Signup</RouterLink>
      </section>
    </section>
  </main>
</template>


<script>
import TransactionList from '../components/TransactionList.vue';

export default {
  data() {
    return {
      userTransactions: [],
    };
  },
  created() {
    this.userTransactions = this.getUserTransactions()
    console.log('this.userTransactions', this.userTransactions)
  },
  computed: {
    user() { return this.$store.getters.user; }
  },
  methods: {
    getUserTransactions() {
      let currTransactions = this.user ? [...this.user.transactions] : []
      if (currTransactions.length > 3) {
        return currTransactions.slice(currTransactions.length - 3)
      }
      else return currTransactions
    }
  },
  components: { TransactionList }
}
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  h1 {
    font-size: 3rem;
    // margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    // margin-bottom: 1rem;
  }

  .main-content {
    display: flex;
    // flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .main-content {
    flex-direction: column;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;

    .links-container {
      display: flex;
      gap: 1rem;
      background-color: #f5f5f5;
      border-radius: 1rem;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    a {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-decoration: none;
      color: #13161F;

    }
  }
}
</style>