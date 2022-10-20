
<template>
  <AppHeader />
  <main class="main-container">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
.main-container{
    min-height: calc(90vh - 4em);
    padding: 15px;
}
</style>