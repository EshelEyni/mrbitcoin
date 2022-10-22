<template>
    <RouterLink class="contact-name" :to="`/contact/${contact._id}`">
        <h2>{{contact.name}}</h2>
    </RouterLink>

    <h4>{{contact.email}}</h4>
    <h5>{{contact.phone}}</h5>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.contact-name{
    text-decoration: none;
    color:#13161F;
}
</style>
